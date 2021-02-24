import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tuberias',
  templateUrl: './tuberias.component.html',
  styleUrls: ['./tuberias.component.css']
})
export class TuberiasComponent implements OnInit {
  usuario: string="Ruben garcia Romeral"
  mes: string = "marzo"
  texto: string = "Lorem ipsum dolor sit"
  fecha: Date = new Date()
  dinero: number =57.12
  numero_pi: number = Math.PI
  preposiciones: string[] = ['a', 'ante', 'bajo', 'cabe', 'con', 'contra', 'de', 'desde', 'en', 'entre']
  usuarios =[
    {nombre: "Ruben", apellido: "Garcia", edad: 19},
      {nombre: "David", apellido: "Rebato", edad: 19},
    {nombre: "Kepa", apellido: "jamecho", edad: 43}
  ]
  dni: number = 0
  constructor() { }

  ngOnInit(): void {
  }

}
