import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { SolicitudService } from 'src/app/services/solicitud.service';

@Component({
  selector: 'app-index-solicitud',
  templateUrl: './index-solicitud.component.html',
  styleUrls: ['./index-solicitud.component.css']
})
export class IndexSolicitudComponent implements OnInit {
  public solicitudes : Array<any> = [];
  public filtro_dni = '';
  public filtro_correo = '';

  public page = 1;
  public pageSize = 20;
  public token;
  public load_data = true;
  public load_btn = false;

  constructor (
    private _solicitudService : SolicitudService,
    private _adminService: AdminService
  ) {

      this.token = this._adminService.getToken();
  }

  ngOnInit(): void {
    this.init_Data();
  }
  
  init_Data() {
    this._solicitudService.listar_solicitudes_filtro_admin(null,null,this.token).subscribe(
      response => {

        this.solicitudes = response.data;
        this.load_data = false;
      },

      error => {
        console.log(error);
      }
    );
  }
  
  filtro (tipo:any) {


    if (tipo == 'dni') 
    {
      if (this.filtro_dni) 
      {
        this.load_data = true;
        this._solicitudService.listar_solicitudes_filtro_admin(tipo,this.filtro_dni,this.token).subscribe(
          response => {
    
            this.solicitudes = response.data;
            this.load_data = false;
          },
    
          error => {
            console.log(error);
          }
        );
      } else {
        this.init_Data();
      }
    } else if ( tipo == 'correo')
    {
      if (this.filtro_correo)
      {
        this.load_data = true;
        this._solicitudService.listar_solicitudes_filtro_admin(tipo,this.filtro_correo,this.token).subscribe(
          response => {
    
            this.solicitudes = response.data;
            this.load_data = false;
          },
    
          error => {
            console.log(error);
          }
        );
      }
      else {
        this.init_Data();
      }
    }
  }
}
