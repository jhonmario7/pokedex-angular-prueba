import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pokemasseq';
  // ngOnInit(): void {
  //   this.playMusic();
  // }

  // pauseMusic() {
  //   const audio = document.getElementById('backgroundMusic') as HTMLAudioElement;
  //   audio.pause();
  // }

  // playMusic() {
  //   console.log("Música empieza")
  //   const audio = document.getElementById('backgroundMusic') as HTMLAudioElement;
  //   audio.volume = 0.10
  //   audio.play();
  // }

}
