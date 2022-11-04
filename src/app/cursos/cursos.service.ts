import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class CursosService {
  static emitirCursoCriado = new EventEmitter<string>();

  private cursos: string[] = ['Angular', 'Java', 'Spring'];

  constructor() {
    console.log('CursosService');
  }

  getCursos() {
    return this.cursos;
  }

  addCurso(curso: string) {
    this.cursos.push(curso);
    CursosService.emitirCursoCriado.emit(curso);
  }
}
