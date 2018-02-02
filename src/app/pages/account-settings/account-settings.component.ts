import { Component, OnInit } from '@angular/core';
import { SettingsService } from './../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(private _setting: SettingsService) { }

  ngOnInit() {
    this._setting.aplicarTildeByStorage();
  }

  cambiarColor(tema: string, link: any) {
    // Una forma de instanciar el DOM es mediante el Inject(Document)
    // y luego hacer referencia a _document en este caso

    this._setting.aplicarTema(tema);
    this.aplicarCheck(link);
  }

  private aplicarCheck(link: any) {
    // La variable link hace referencia al elemento html seleccionado

    this._setting.aplicarTilde(link);
  }
}
