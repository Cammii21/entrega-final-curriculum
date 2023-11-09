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
    this.cvService.obtenerEducacion().subscribe(
      data => {
        console.log(data["informacionCv"][0]);
        this.Educacion=data["informacionCv"][0];
      }
    )
  }
}
