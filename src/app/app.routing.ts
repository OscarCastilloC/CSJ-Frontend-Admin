import { Routes, RouterModule} from "@angular/router";

import { ModuleWithProviders } from "@angular/core";
import { InicioComponent } from "./components/inicio/inicio.component";
import { LoginComponent } from "./components/login/login.component";

import { AdminGuard } from "./guards/admin.guard";
import { IndexClienteComponent } from "./components/clientes/index-socio/index-cliente.component";
import { CreateClienteComponent } from "./components/clientes/create-socio/create-cliente.component";
import { EditClienteComponent } from "./components/clientes/edit-socio/edit-cliente.component";
import { ConfigComponent } from "./components/config/config.component";
import { ClienteGuard } from "./guards/cliente.guard";
import { IndexSolicitudComponent } from "./components/solicitudes/index-solicitud/index-solicitud.component";
import { CreateSocioSolicitudComponent } from "./components/solicitudes/create-socio-solicitud/create-socio-solicitud.component";

const appRoute : Routes = [
    {path:'', redirectTo: 'inicio', pathMatch: 'full'},
    {path: 'inicio', component: InicioComponent, canActivate: [AdminGuard]},

    {path: 'panel', children: [
        {path: 'socios', component: IndexClienteComponent, canActivate: [AdminGuard]},
        {path: 'socios/registro', component: CreateClienteComponent, canActivate: [AdminGuard]},
        {path: 'socios/:id', component: EditClienteComponent, canActivate: [AdminGuard,ClienteGuard]},

        {path: 'solicitudes', component: IndexSolicitudComponent, canActivate: [AdminGuard]},
        {path: 'solicitudes/registro/:id', component: CreateSocioSolicitudComponent, canActivate: [AdminGuard]},

        {path: 'configuraciones',component:ConfigComponent, canActivate: [AdminGuard]}
    ]},
    

    {path: 'login', component: LoginComponent}
]

export const appRoutingProviders : any [] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoute);