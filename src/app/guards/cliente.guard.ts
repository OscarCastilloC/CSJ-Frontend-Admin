import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { ClienteService } from '../services/cliente.service';
import { Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ClienteGuard implements CanActivate {

  constructor(
    private _clienteService: ClienteService,
    private _router:Router
  ) {
  
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const socioId = route.params['id']; // Asegúrate de que la ruta tenga un parámetro 'id' para identificar al socio

    return this._clienteService.obtenerEstadoActivoSocio(socioId).pipe(
      map((isActivo: boolean) => {
        if (isActivo) {
          return true; // Si el socio está activo, se permite el acceso a la ruta
        } else {
          this._router.navigate(['/panel/socios']); // Si el socio no está activo, redirige a otra ruta
          return false;
        }
      })
    );
  }
}
