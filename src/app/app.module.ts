import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';
import { LogService } from './shared/log.service';

@NgModule({
  declarations: [AppComponent, CursosComponent, CriarCursoComponent],
  imports: [BrowserModule],
  providers: [LogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
