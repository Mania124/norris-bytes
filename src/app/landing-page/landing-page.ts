import { Component, signal, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';

interface Joke {
  value: string;
}

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage implements OnInit {
  private http = inject(HttpClient);

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
    this.http.get<string[]>(`${environment.apiUrl}/jokes/categories`).subscribe({
      next: (categories) => {
        this.categories.set(categories);
        console.log(categories)
        this.loading.set(false);
      },
      error: (err) => {
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

    this.http.get<Joke>(`${environment.apiUrl}/jokes/random?category=${category}`).subscribe({
      next: (joke) => {
        this.currentJoke.set(joke);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Failed to load joke');
        this.loading.set(false);
        console.error('Error loading joke:', err);
      }
    });
  }
}
