import { Component } from "@angular/core";
import { Movie } from "./models/movie.model";

@Component({
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.scss"],
})
export class MoviesComponent {
  movies: Movie[] = [
    {
      title: "Interstellar",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      genres: ["Adventure", "Drama", "Sci-Fi"],
      year: 2014,
      imdbUrl: "https://www.imdb.com/title/tt0816692/",
      imdbCover: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
    },
    {
      title: "2001: A Space Odyssey",
      description: "After discovering a mysterious artifact buried beneath the Lunar surface, mankind sets off on a quest to find its origins with help from intelligent supercomputer H.A.L. 9000.",
      genres: ["Adventure", "Sci-Fi"],
      year: 1968,
      imdbUrl: "https://www.imdb.com/title/tt0062622/",
      imdbCover: "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    },
    {
      title: "The Dark Knight",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      genres: ["Action", "Crime", "Drama"],
      year: 2008,
      imdbUrl: "https://www.imdb.com/title/tt0468569/",
      imdbCover: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    },
    {
      title: "Dota: Dragon's Blood",
      description: "After encounters with a dragon and a princess on her own mission, a Dragon Knight becomes embroiled in events larger than he could have ever imagined.",
      genres: ["Animation", "Action", "Adventure"],
      year: 2021,
      imdbUrl: "https://www.imdb.com/title/tt14069590/",
      imdbCover: "https://m.media-amazon.com/images/M/MV5BNjVjYmQ4N2QtNzc1Yi00MzI0LTlmNWMtZTU2MjcxYzIwYmY4XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_UX182_CR0,0,182,268_AL_.jpg",
    },
  ];
}
