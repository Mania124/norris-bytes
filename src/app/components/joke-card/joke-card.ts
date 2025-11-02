import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Joke } from '../../services/chuck-norris';

@Component({
  selector: 'app-joke-card',
  imports: [CommonModule],
  templateUrl: './joke-card.html',
})
export class JokeCard {
  joke = input.required<Joke>();
  category = input<string>();
  showCategory = input<boolean>(true);
  jokeClicked = output<Joke>();
}
