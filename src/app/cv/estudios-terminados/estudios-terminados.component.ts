import { Component, OnInit } from '@angular/core';
import { CvService } from 'src/app/servicios/cv.service';

@Component({
  selector: 'app-estudios-terminados',
  templateUrl: './estudios-terminados.component.html',
  styleUrls: ['./estudios-terminados.component.css']
})

export class EstudiosTerminadosComponent implements OnInit {
  Educacion: any;
  constructor(private cvService:CvService){}
  ngOnInit(): void {
    this.cvService.obtenerDatos().subscribe(
      data => {
        console.log(data["estudiosterminados"]);
        this.Educacion=data["estudiosterminados"];
      }
    )
  }
}
