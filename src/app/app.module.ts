import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InformacionPersonalComponent } from './cv/informacion-personal/informacion-personal.component';
import { EstudiosTerminadosComponent } from './cv/estudios-terminados/estudios-terminados.component';
import { HabilidadesComponent } from './cv/habilidades/habilidades.component';
import { ExperienciaLaboralComponent } from './cv/experiencia-laboral/experiencia-laboral.component';
import { IdiomaComponent } from './cv/idioma/idioma.component';
import { SobreMiComponent } from './cv/sobre-mi/sobre-mi.component';
import { FooterComponent } from './cv/footer/footer.component';
import { HeaderComponent } from './cv/header/header.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    InformacionPersonalComponent,
    EstudiosTerminadosComponent,
    HabilidadesComponent,
    ExperienciaLaboralComponent,
    IdiomaComponent,
    SobreMiComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
