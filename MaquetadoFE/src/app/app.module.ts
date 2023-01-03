import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { BannerComponent } from './Components/banner/banner.component';
import { LogoAPComponent } from './Components/logo-ap/logo-ap.component';
import { AcercaDeComponent } from './Components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './Components/experiencia/experiencia.component';
import { EducacionComponent } from './Components/educacion/educacion.component';
import { HardysoftComponent } from './Components/hardysoft/hardysoft.component';
import{ NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';
import { FooterComponent } from './Components/footer/footer.component'; 

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        BannerComponent,
        LogoAPComponent,
        AcercaDeComponent,
        ExperienciaComponent,
        EducacionComponent,
        HardysoftComponent,
        ProyectosComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
