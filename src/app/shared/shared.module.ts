import { NgModule } from "@angular/core";
import { ShellComponent } from "./components/shell/shell.component";
import { MaterialModule } from "./material.module";

@NgModule({
  declarations: [ShellComponent],
  imports: [MaterialModule],
  exports: [ShellComponent],
})
export class SharedModule { }
