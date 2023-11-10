import { Component, OnInit } from '@angular/core';
import { CvService } from 'src/app/servicios/cv.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})

export class HabilidadesComponent implements OnInit {
  Educacion: any;
  constructor(private cvService:CvService){}
  ngOnInit(): void {
    this.cvService.obtenerDatos().subscribe(
      data => {
        console.log(data["habilidades"]);
        this.Educacion=data["habilidades"];
      }
    )
  }
}
