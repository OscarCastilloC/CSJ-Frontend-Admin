import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {NgxTinymceModule} from 'ngx-tinymce'
import { NgbPaginationModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routing } from "./app.routing";
import { InicioComponent } from './components/inicio/inicio.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { IndexClienteComponent } from './components/clientes/index-socio/index-cliente.component';
import { CreateClienteComponent } from './components/clientes/create-socio/create-cliente.component';
import { EditClienteComponent } from './components/clientes/edit-socio/edit-cliente.component';
import { ConfigComponent } from './components/config/config.component';
import { BackgroundComponent } from './components/background/background.component';
import { IndexSolicitudComponent } from './components/solicitudes/index-solicitud/index-solicitud.component';
import { CreateSocioSolicitudComponent } from './components/solicitudes/create-socio-solicitud/create-socio-solicitud.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SidebarComponent,
    LoginComponent,
    IndexClienteComponent,
    CreateClienteComponent,
    EditClienteComponent,
    ConfigComponent,
    BackgroundComponent,
    IndexSolicitudComponent,
    CreateSocioSolicitudComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routing,
    NgbPaginationModule,
    NgxTinymceModule.forRoot ({baseURL:'../../../assets/tinymce/' }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
