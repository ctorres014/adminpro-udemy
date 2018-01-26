import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  progresoAzul: number;
  progresoVerde: number;

  constructor() { }

  ngOnInit() {
  }

  //Esta funcion se puede reemplazar por una asignacion
  // directa en el componente hijo
  // update(evento: number) {
  //   console.log(evento);
  // }

}
