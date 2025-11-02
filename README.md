# 🥋 NorrisBytes

A simple Angular single-page application that consumes the legendary [ChuckNorris.io API](https://api.chucknorris.io/).
Users can browse joke categories, view random jokes, and enjoy some legendary Chuck Norris humor.

**🔗 Live Demo:** [https://norris-bytes.vercel.app/](https://norris-bytes.vercel.app/)

---

## ⚡ Project Overview

This app demonstrates how to:

- Build a **modern Angular SPA** integrating with a public REST API.
- Use **Tailwind CSS** for styling and responsive design.
- Dynamically **load categories and facts** from the ChuckNorris.io API.
- Handle user interaction — click a category, get a fresh Chuck Norris fact.

> Example:
> _Category: Science →_
> _"All arrays Chuck Norris declares are of infinite size, because Chuck Norris knows no bounds."_

---

## 🧰 Tech Stack

| Tool                                          | Purpose                           |
| --------------------------------------------- | --------------------------------- |
| [Angular 20](https://angular.dev/)            | Frontend framework                |
| [Tailwind CSS](https://tailwindcss.com/)      | Utility-first styling             |
| [ChuckNorris.io](https://api.chucknorris.io/) | Public API for Chuck Norris facts |
| [TypeScript](https://www.typescriptlang.org/) | Strongly typed JavaScript         |
| [Node.js](https://nodejs.org/)                | Runtime environment               |

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Mania124/norris-bytes.git
cd norris-bytes
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
ng serve
```

Visit [http://localhost:4200](http://localhost:4200) — Chuck Norris is waiting.

---

## 🧩 Features

- 🏠 **Landing Page**: Welcome screen with category selection grid
- 📂 **Category Pages**: Browse all joke categories from the ChuckNorris.io API
- 🃏 **Multiple Jokes**: View 5 random jokes per category with grid layout
- 🔍 **Single Joke View**: Click any joke card to view it individually
- 📤 **Share Functionality**: Share jokes using Web Share API or clipboard
- 🔄 **Load More**: Get additional jokes within categories
- 🧭 **Navigation**: Seamless routing between landing, categories, and jokes
- 💅 Styled with Tailwind for speed and simplicity
- 🔄 Randomized jokes keep every click fresh and funny
- 📱 Responsive design for all devices
- 🌙 Dark theme with gradient accents

---

## 🖼️ User Journey

### Landing Page
Browse and select from all available Chuck Norris joke categories.

### Category Pages
View multiple jokes (5 at a time) for your selected category in a responsive grid layout.

### Single Joke View
Click any joke card to view it individually with sharing options and navigation controls.

### Example Flow:
```
🏠 Landing Page → 📂 Category Selection → 🃏 Multiple Jokes → 🔍 Single Joke View
```

---

## 🌐 API Integration

This project uses the free **Chuck Norris API** — no API keys or secrets are required.

**Base URL:** `https://api.chucknorris.io`

**Endpoints Used:**
- `GET /jokes/categories` - Retrieve all available joke categories
- `GET /jokes/random?category={category}` - Get random joke from specific category

**Service Architecture:**
- `ChuckNorrisService` handles all API communication
- Environment-based configuration for API URLs
- Proper error handling and loading states

---

## 🧱 Environment Configuration

| File | Purpose |
|------|----------|
| `src/environments/environment.ts` | Development settings |
| `src/environments/environment.prod.ts` | Production settings (used during build) |

Example:
```ts
// environment.ts
export const environment = {
  production: false,
  apiUrl: 'https://api.chucknorris.io'
};
```

Use it in your services:
```ts
import { environment } from '../environments/environment';
this.http.get(`${environment.apiUrl}/jokes/categories`);
```

---

## 🗺️ Vercel Deployment

1️⃣ **Build for production**
```bash
ng build --configuration production
```

2️⃣ **Add `vercel.json`** (for Angular routing support)
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

3️⃣ **Deploy**
```bash
vercel --prod
```

That's it!
Vercel will serve the built Angular app with proper browser navigation enabled.

---

## 🧪 Future Enhancements

- 🔍 **Search Functionality**: Add search using `/jokes/search?query=<term>`
- ❤️ **Favorites System**: Save favorite jokes locally with localStorage
- 🎨 **Theme Toggle**: Light/dark theme switching (Chuck Norris works in all lighting conditions)
- 📱 **PWA Features**: Add service worker and offline capabilities
- 📊 **Analytics**: Track popular categories and joke engagement
- 🎯 **Social Sharing**: Enhanced sharing with category context

---

## 👨‍💻 Developer

**Hezborn Achido Shikuku**
Full Stack Developer | Angular • Go • Node.js • TypeScript
📧 [shikukuhezborn@gmail.com](mailto:shikukuhezborn@gmail.com)
🌐 [Portfolio](http://shikuku-aws-portfolio.s3-website-us-east-1.amazonaws.com/)

---

## 🧾 License

This project is licensed under the [MIT License](LICENSE).

---

## 💡 Fun Fact

Chuck Norris doesn't use Angular Lifecycle Hooks — **the components simply fear to be destroyed.**

---

**Made with Angular, Tailwind, and roundhouse kicks.**
