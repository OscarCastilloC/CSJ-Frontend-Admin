import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { SolicitudService } from 'src/app/services/solicitud.service';

declare var iziToast:any;

@Component({
  selector: 'app-create-socio-solicitud',
  templateUrl: './create-socio-solicitud.component.html',
  styleUrls: ['./create-socio-solicitud.component.css']
})
export class CreateSocioSolicitudComponent implements OnInit {
  public cliente:any = {};
  public id:any;
  public token:any;
  public load_btn = false;
  public load_data = true;

  constructor(
    private _route : ActivatedRoute,
    private _clienteService : ClienteService,
    private _adminService : AdminService,
    private _solicitudService: SolicitudService,
    private _router: Router
  ) {
      this.token=this._adminService.getToken();
  }

  ngOnInit(): void {
    this._route.params.subscribe(
      params => {
        this.id = params['id'];

        this._solicitudService.obtener_solicitud_admin(this.id,this.token).subscribe(
          response => {
            console.log(response);
            if (response.data == undefined) {

              this.cliente = undefined;
              this.load_data = false;

            } else {

              this.cliente = response.data;
              this.load_data = false;

            }
          },
          error => {

          }
        );
      }
    )
  }

  registro(registroForm:any) {
    if(registroForm.valid) {
      console.log(this.cliente);
      this.load_btn = true;
      this._clienteService.registro_socio_admin(this.cliente,this.token).subscribe(
        response => {
          iziToast.show({
            title: 'Éxito',
            titleColor: '#1DC74C',
            color: 'FFF',
            class: 'text-success',
            position: 'topRight',
            message: 'Se registro correctamente el nuevo socio'
          });

          this.cliente = {
            genero: '',
            nombres: '',
            apellidos: '',
            f_nacimiento: '',
            telefono: '',
            dni: '',
            email: ''
          }

          this.load_btn = false;
          this._router.navigate(['/panel/socios']);
        },
          error => {
          console.log(error);
        }
      );
    }
    else {
      iziToast.show({
        title: 'Error',
        titleColor: '#FF0000',
        color: 'FFF',
        class: 'text-danger',
        position: 'topRight',
        message: 'Los datos del formulario no son validos'
      });
    }

  }
}
