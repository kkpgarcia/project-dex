import { Component, ElementRef, ViewChild } from '@angular/core';
import Game from "../../webgl/Game"
import Sandbox from "../../webgl/Sandbox";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  private _game: Game;

  private ngOnInit(): void
  {
      this._game = new Game(this.canvas.nativeElement);
      new Sandbox();
  }
}
