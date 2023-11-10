import { Component, OnInit } from '@angular/core';
import { CvService } from 'src/app/servicios/cv.service';

@Component({
  selector: 'app-informacion-personal',
  templateUrl: './informacion-personal.component.html',
  styleUrls: ['./informacion-personal.component.css']
})

export class InformacionPersonalComponent implements OnInit {
  Educacion: any;
  constructor(private cvService:CvService){}
  ngOnInit(): void {
    this.cvService.obtenerDatos().subscribe(
      data => {
        console.log(data["informacionPersonal"]);
        this.Educacion=data["informacionPersonal"];
      }
    )
  }
}
