import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { debug } from 'util';

@Injectable()
export class SettingsService {

  constructor(@Inject(DOCUMENT) private _document) {
    const tema = JSON.parse(localStorage.getItem('tema'));

    // Definimos un tema por defecto
    if (tema == null) {
      const url = `assets/css/colors/default.css`;
      this._document.getElementById('tema').setAttribute('href', url );
    }else {
      // Usamos el tema del localstorage
      this.aplicarTema(tema);
    }

  }

  aplicarTildeByStorage() {
    // Obtenemos un Array de elementos por medio de la clase css selector
    const selectores: any = this._document.getElementsByClassName('selector');

    for (const ref of selectores) {
      if (ref.getAttribute('data-theme') === JSON.parse(localStorage.getItem('tema'))) {
        ref.classList.add('working');
      }
    }

  }


  aplicarTema(tema: string) {
    const url = `assets/css/colors/${ tema }.css`;
    this._document.getElementById('tema').setAttribute('href', url );

    localStorage.setItem("tema", JSON.stringify(tema));

  }

  aplicarTilde(link: any) {
    // Obtenemos un Array de elementos por medio de la clase css selector
    const selector: any = this._document.getElementsByClassName('selector');

    for (const item of selector) {
      item.classList.remove('working');
    }

    link.classList.add('working');

  }

}
