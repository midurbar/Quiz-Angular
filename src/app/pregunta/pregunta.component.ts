import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {

  @Input()
  titulo : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
