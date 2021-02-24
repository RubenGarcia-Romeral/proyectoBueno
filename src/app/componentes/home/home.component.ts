import { Component, OnDestroy, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  variable: string= "texto de prueba"
  num1: number = null
  usuarios = [
    {nombre: "Ruben", apellido: "garcia"},
    {nombre: "David", apellido: "Rebato"},
    {nombre: "Alberto", apellido: "Carlos Huevos"}
  ]
  usuarios2: Usuario[] =[
    {nombre: "Ruben", apellido: "Garcia"},
    {nombre: "Pepe", apellido: "Botella"},
    {nombre: "alin", apellido: "galben"}
  ]
  usuarioSel
  usuario3: Usuario = new Usuario("Ruben", "Garcia")
  selUser(entrada):void{
    this.usuarioSel=entrada
  }

  constructor() { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void{
    console.log("Hasta luego Maricarmen")
  }
}
