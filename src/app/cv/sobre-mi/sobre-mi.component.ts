import { Component, OnInit } from '@angular/core';
import { CvService } from 'src/app/servicios/cv.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})

export class SobreMiComponent implements OnInit {
  Educacion: any;
  constructor(private cvService:CvService){}
  ngOnInit(): void {
    this.cvService.obtenerDatos().subscribe(
      data => {
        console.log(data["sobreMi"]);
        this.Educacion=data["sobreMi"];
      }
    )
  }
}
