import { Component, signal, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChuckNorrisService, Joke } from '../services/chuck-norris';
import { JokeCard } from '../components/joke-card/joke-card';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';

@Component({
  selector: 'app-category',
  imports: [CommonModule, JokeCard, Footer],
  templateUrl: './category.html',
})
export class Category implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private chuckNorrisService = inject(ChuckNorrisService);

  categoryName = signal<string>('');
  jokes = signal<Joke[]>([]);
  loading = signal(false);
  error = signal<string>('');

  ngOnInit() {
    const categoryName = this.route.snapshot.paramMap.get('categoryName');
    if (categoryName) {
      this.categoryName.set(categoryName);
      this.loadJokes(categoryName);
    }
  }

  loadJokes(category: string) {
    this.loading.set(true);
    this.error.set('');
    this.jokes.set([]);

    // Load multiple jokes for the category (let's say 5 for now)
    const jokePromises: Promise<Joke>[] = [];
    for (let i = 0; i < 10; i++) {
      jokePromises.push(
        new Promise((resolve, reject) => {
          this.chuckNorrisService.getRandomJoke(category).subscribe({
            next: (joke) => resolve(joke),
            error: (err) => reject(err)
          });
        })
      );
    }

    Promise.all(jokePromises).then((jokes) => {
      this.jokes.set(jokes);
      this.loading.set(false);
    }).catch((err) => {
      this.error.set('Failed to load jokes');
      this.loading.set(false);
      console.error('Error loading jokes:', err);
    });
  }

  loadMoreJokes() {
    const category = this.categoryName();
    if (category) {
      this.loadJokes(category);
    }
  }

  onJokeClick(joke: Joke) {
    // Navigate to single joke page with the joke data
    // Since we can't pass objects in routes, we'll pass an index or use a different approach
    // For now, let's navigate with a simple ID (we can use the joke's index in the array)
    const jokeIndex = this.jokes().indexOf(joke);
    if (jokeIndex !== -1) {
      this.router.navigate(['/joke', this.categoryName(), jokeIndex]);
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
