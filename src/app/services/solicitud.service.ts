import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './GLOBAL';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  public url;

  constructor( 
    private _http: HttpClient,
    ) { 
      this.url = GLOBAL.url;
    }

    getToken(): string | null {
      return localStorage.getItem('token');
    }

    listar_solicitudes_filtro_admin(tipo:any,filtro:any,token:any):Observable<any> {
      let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
      return this._http.get(this.url+'listar_solicitudes_filtro_admin/'+tipo+'/'+filtro,{headers:headers});
    }

    obtener_solicitud_admin(id:any,token:any):Observable<any> {
      let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
      return this._http.get(this.url+'obtener_solicitud_admin/'+id,{headers:headers});
    }

}
