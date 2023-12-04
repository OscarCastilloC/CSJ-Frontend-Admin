import { Injectable } from '@angular/core';
import { GLOBAL} from './GLOBAL';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public url;

  constructor( 
    private _http: HttpClient,
    ) { 
      this.url = GLOBAL.url;
    }

    getToken(): string | null {
      return localStorage.getItem('token');
    }

    listar_socios_filtro_admin(tipo:any,filtro:any,token:any):Observable<any> {
      let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
      return this._http.get(this.url+'listar_socios_filtro_admin/'+tipo+'/'+filtro,{headers:headers});
    }

    registro_socio_admin(data:any,token:any):Observable<any> {
      let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
      return this._http.post(this.url+'registro_socio_admin',data,{headers:headers});
    }

    obtener_socio_admin(id:any,token:any):Observable<any> {
      let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
      return this._http.get(this.url+'obtener_socio_admin/'+id,{headers:headers});
    }

    actualizar_socio_admin(id:any,data:any,token:any):Observable<any> {
      let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
      return this._http.put(this.url+'actualizar_socio_admin/'+id,data,{headers:headers});
    }

    actualizar_estado_socio_admin(id:any,data:any,token:any):Observable<any> {
      let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
      return this._http.put(this.url+'actualizar_estado_socio_admin/'+id,data,{headers:headers});
    }

    obtenerEstadoActivoSocio(id:any):Observable<any> {
      let headers = new HttpHeaders({'Content-Type':'application/json'});
      return this._http.get(`${this.url}/obtenerEstadoActivoSocio/${id}`,{headers:headers}).pipe(
        map((response: any) => {
          return response.isActive as boolean; // Devuelve el estado isActive como booleano
        })
      );
    }
}
