import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `

    <main class="px-4 py-12 max-w-3xl mx-auto">
      <h1 class="text-3xl font-bold text-gray-900 mb-6">Contact Us</h1>
      <p class="text-lg text-gray-700 mb-8">
        We'd love to hear from you! Whether you have a question about features, pricing, demo, or anything else, our
        team is ready to answer all your questions.
      </p>

      <form class="grid grid-cols-1 gap-6">
        <div>
          <label class="block mb-2 text-sm font-semibold text-gray-700">Name</label>
          <input type="text" class="border-solid border-2 w-full border-gray-300 rounded px-4 py-2 focus:ring focus:ring-blue-200" />
        </div>

        <div>
          <label class="block mb-2 text-sm font-semibold text-gray-700">Email</label>
          <input type="email" class="border-solid border-2 w-full border-gray-300 rounded px-4 py-2 focus:ring focus:ring-blue-200" />
        </div>

        <div>
          <label class="block mb-2 text-sm font-semibold text-gray-700">Message</label>
          <textarea rows="4" class="border-solid border-2 w-full border-gray-300 rounded px-4 py-2 focus:ring focus:ring-blue-200"></textarea>
        </div>

        <button type="submit" class="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition cursor-pointer">
          Send Message
        </button>
      </form>
    </main>
  `
})
export class ContactComponent { }
