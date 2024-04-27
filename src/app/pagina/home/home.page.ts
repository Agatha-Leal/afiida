import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  peso: any;
  altura: any;
  resultado: any;

  constructor() { }

  ngOnInit() {
  }

  calcular() {
    let p = parseFloat(this.peso);
    let a = parseFloat(this.altura);

    let imc = p / (a*a);
    this.resultado = imc; 
  }

}
