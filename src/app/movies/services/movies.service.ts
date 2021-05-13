import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TheMoviesDbModel } from "../models/the-movies-db.model";

@Injectable()
export class MoviesService {
  private apiKey = 'd416af5d4faee64e25ab001d87aab5c3';

  constructor(private httpClient: HttpClient) { }

  private baseUrl(path: string, query: string = ''): string {
    let url = `https://api.themoviedb.org/3/${path}?api_key=${this.apiKey}`;
    if (query) url += `&${query}`;
    return url;
  }

  getById(id: string): Observable<any> {
    return this.httpClient.get(this.baseUrl(`movie/${id}`));
  }

  getPopulars(page: number = 1): Observable<any> {
    return this.httpClient.get<TheMoviesDbModel>(this.baseUrl(`movie/popular`, `page=${page}`));
  }
}
