import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ChuckNorrisService, Joke } from '../services/chuck-norris';

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage implements OnInit {
  private chuckNorrisService = inject(ChuckNorrisService);
  private router = inject(Router);

  categories = signal<string[]>([]);
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

  navigateToCategory(category: string) {
    this.router.navigate(['/category', category]);
  }
}
