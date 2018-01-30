import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document) { }

  ngOnInit() {
  }

  cambiarColor(tema: string, link: any) {
    // Una forma de instanciar el DOM es mediante el Inject(Document)
    // y luego hacer referencia a _document en este caso

    const url = `assets/css/colors/${ tema }.css`;

    this._document.getElementById('tema').setAttribute('href', url );

    this.aplicarCheck(link);
  }

  private aplicarCheck(link: any) {
    // La variable link hace referencia al elemento html seleccionado

    // Obtenemos un Array de elementos por medio de la clase css selector
    const selector = this._document.getElementsByClassName('selector');

    for (const item of selector) {
      item.classList.remove('working');
    }

      link.classList.add('working');
  }
}
