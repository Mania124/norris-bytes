import { Component, signal, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChuckNorrisService } from '../services/chuck-norris';

interface JokeData {
  value: string;
}

@Component({
  selector: 'app-joke',
  imports: [CommonModule],
  templateUrl: './joke.html',
})
export class JokeComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private chuckNorrisService = inject(ChuckNorrisService);

  joke = signal<JokeData | null>(null);
  category = signal<string>('');
  loading = signal(false);
  error = signal<string>('');

  ngOnInit() {
    const category = this.route.snapshot.paramMap.get('category');
    const index = this.route.snapshot.paramMap.get('index');

    if (category && index) {
      this.category.set(category);
      this.loadJokeFromCategory(category, parseInt(index));
    }
  }

  loadJokeFromCategory(category: string, index: number) {
    this.loading.set(true);
    this.error.set('');

    // Get a random joke from the category (since we can't store the exact joke)
    // In a real app, you might want to store jokes in a service or use local storage
    this.chuckNorrisService.getRandomJoke(category).subscribe({
      next: (joke) => {
        this.joke.set(joke);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Failed to load joke');
        this.loading.set(false);
        console.error('Error loading joke:', err);
      }
    });
  }

  goBack() {
    // Try to go back in history, fallback to home if not possible
    if (window.history.length > 1) {
      this.router.navigate(['..']);
    } else {
      this.router.navigate(['/']);
    }
  }

  shareJoke() {
    if (this.joke() && navigator.share) {
      navigator.share({
        title: 'Chuck Norris Joke',
        text: this.joke()!.value,
        url: window.location.href
      });
    } else if (this.joke()) {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(this.joke()!.value);
    }
  }
}
