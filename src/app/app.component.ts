import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quiz';

  preguntas = [
    {
      pregunta: "De que color es el caballo blanco de santiago",
      respuestas: [
        "Blanco",
        "Negro",
        "Rojo",
        "Azul"
      ],
      correcta: 3
    },
    
  ]
}
