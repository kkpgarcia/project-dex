import { Component } from '@angular/core';
import Game from "../../webgl/Game"
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {
    new Game();
  }
}
