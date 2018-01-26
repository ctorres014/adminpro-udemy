import { Component, OnInit, Input, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtprogress') txtProgress: ElementRef;

  @Input('name') leyenda: string;
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    // console.log(this.leyenda);
  }

  onChange(newValue: number) {

    // let elemetHTML: any = document.getElementsByName('progreso')[0];

    if (newValue > 100) {
      this.progreso = 100;
    }else if (newValue < 0) {
      this.progreso = 0;
    }else {
      this.progreso = newValue;
    }

    // elemetHTML.value = this.progreso;
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);

  }

  cambiarValor(valor: number)
  {

    if (this.progreso >= 100 && valor > 0)
    {
      this.progreso = 100;
      return;
    }

    if (this.progreso <= 0 && valor < 0)
    {
      return;
    }

    this.progreso = this.progreso + valor;

    this.cambioValor.emit(this.progreso);

  }


}
