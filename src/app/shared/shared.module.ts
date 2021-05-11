import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ShellComponent } from "./components/shell/shell.component";
import { MaterialModule } from "./material.module";

@NgModule({
  declarations: [ShellComponent],
  imports: [MaterialModule],
  exports: [
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    ShellComponent,
  ],
})
export class SharedModule { }
