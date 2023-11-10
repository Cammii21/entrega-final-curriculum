import { Component, OnInit } from '@angular/core';
import { CvService } from 'src/app/servicios/cv.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})

export class ExperienciaLaboralComponent implements OnInit {
  Educacion: any;
  constructor(private cvService:CvService){}
  ngOnInit(): void {
    this.cvService.obtenerDatos().subscribe(
      data => {
        console.log(data["experienciaLaboral"]);
        this.Educacion=data["experienciaLaboral"];
      }
    )
  }
}
