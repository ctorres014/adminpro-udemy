import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, Subscription } from 'rxjs/Rx';
// import { setInterval, clearInterval } from 'timers';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {
    this.subscription = this.regresaObservable()
    // Administra hasta 3 tipos de resultados segun la ejecucion
        .subscribe(
          numero => console.log('Subs', numero),
          error => console.log('Error en el obs (dos veces)', error),
          () => console.log('El observador termino!')
        );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('La pagina se va a cerrar');
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {

   return new Observable(observer => {
      let contador = 0;

      let intervalo = setInterval( () => {

        contador += 1;

        let salida = {
          valor: contador
        };

        observer.next(salida); // Continuar con la ejecucion
        // if (contador === 3) {
        //   clearInterval(intervalo); // Eliminamos la ejecucion del intervalo
        //   observer.complete(); // Terminamos la ejecucion;
        // }

        // if (contador === 2) {
        //   observer.error('Auxilio!');
        // }

      }, 500);

      // Definimos la cantidad de intentos a ajecutar por la funcion
    }).retry(2)
      .map( (respuesta: any) => {
        return respuesta.valor;
      })
      .filter( (valor, index) => {

        if ((valor % 2) === 1) {
          // impar
          return true;
        }else {
          // par
          return false;
        }

      });

  }

}
