import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CursoModel } from '../models/heroe.model';
import { map, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = 'https://personajeapp-default-rtdb.firebaseio.com/';


  constructor( private http: HttpClient ) { }


  crearHeroe( heroe: CursoModel ) {

    return this.http.post(`${ this.url }/cursos.json`, heroe)
            .pipe(
              map( (resp: any) => {
                heroe.id = resp.name;
                return heroe;
              })
            );

  }

  actualizarHeroe( heroe: CursoModel ) {

    const cursoTemp = {
      ...heroe
    };

    delete cursoTemp.id;

    return this.http.put(`${ this.url }/curso/${ heroe.id }.json`, cursoTemp);


  }

  borrarHeroe( id: string ) {

    return this.http.delete(`${ this.url }/cursos/${ id }.json`);

  }


  getHeroe( id: string ) {

    return this.http.get(`${ this.url }/cursos/${ id }.json`);

  }


  getHeroes() {
    return this.http.get(`${ this.url }/cursos.json`)
            .pipe(
              map( this.crearArreglo ),
              delay(0)
            );
  }

  private crearArreglo( heroesObj: object ) {

    const heroes: CursoModel[] = [];

    Object.keys( heroesObj ).forEach( key => {

      const heroe: CursoModel = heroesObj[key];
      heroe.id = key;

      heroes.push( heroe );
    });


    return heroes;

  }


}
