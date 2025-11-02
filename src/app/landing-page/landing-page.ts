import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChuckNorrisService, Joke } from '../services/chuck-norris';

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage implements OnInit {
  private chuckNorrisService = inject(ChuckNorrisService);

  categories = signal<string[]>([]);
  selectedCategory = signal<string>('');
  currentJoke = signal<Joke | null>(null);
  loading = signal(false);
  error = signal<string>('');

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.loading.set(true);
    this.error.set('');
    this.chuckNorrisService.getCategories().subscribe({
      next: (categories: string[]) => {
        this.categories.set(categories);
        this.loading.set(false);
      },
      error: (err: any) => {
        this.error.set('Failed to load categories');
        this.loading.set(false);
        console.error('Error loading categories:', err);
      }
    });
  }

  loadJoke(category: string) {
    this.selectedCategory.set(category);
    this.loading.set(true);
    this.error.set('');
    this.currentJoke.set(null);

    this.chuckNorrisService.getRandomJoke(category).subscribe({
      next: (joke: Joke) => {
        this.currentJoke.set(joke);
        this.loading.set(false);
      },
      error: (err: any) => {
        this.error.set('Failed to load joke');
        this.loading.set(false);
        console.error('Error loading joke:', err);
      }
    });
  }
}
