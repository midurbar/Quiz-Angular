import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  /**
   * Esta variable contendra la pregunta que se estara mostrando por
   * pantalla
   */
  preguntaActual = undefined;


  colores=['red','yellow','blue','green'];

  /**
   * En el momento de cargar el componente, se elegira una pregunta
   * a mostrar de entre todas los disponibles en preguntas.
   */
  ngOnInit(): void {
    this.preguntaActual = this.preguntas[0];
  }

  title = 'quiz';

  preguntas = [
    {
      pregunta: "De que color es el caballo blanco de santiago",
      respuestas: [
        "Blanco",
        "Negro",
        "Rojo",
        "Isabelino"
      ],
      correcta: 3
    },
    {
      pregunta: "En que se año se celebraron los juegos olimpicos de tokio 2020",
      respuestas: [
        "2020",
        "2021",
        "2019",
        "Ninguna de las anteriores"
      ],
      correcta: 1
    },
  ];

}
