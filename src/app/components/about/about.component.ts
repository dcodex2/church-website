import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `

    <main class="px-4 py-12 max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold text-gray-900 mb-6">About Us</h1>
      <p class="text-lg text-gray-700 mb-4">
        Starter App is a modern Angular template built for speed and flexibility. Whether you're launching a business,
        portfolio, or blog — this template provides a clean foundation to scale your ideas.
      </p>
      <p class="text-lg text-gray-700 mb-4">
        With customizable components, Tailwind CSS styling, and a focus on responsiveness, it's never been easier to
        kick off a new project. We believe in simplicity, performance, and developer happiness.
      </p>
      <p class="text-lg text-gray-700">
        Got questions? Feel free to reach out or explore our documentation to learn more.
      </p>
    </main>
  `
})
export class AboutComponent { }