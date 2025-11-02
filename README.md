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

- 🧠 Browse all joke categories from the ChuckNorris.io API.
- ⚡ Click any category to instantly load a random fact.
- 💅 Styled with Tailwind for speed and simplicity.
- 🔄 Randomized jokes keep every click fresh and funny.
- 📱 Responsive design for all devices.

---

## 🖼️ Preview (Example UI Concept)

```
[ Categories:  ]  [ animal ] [ career ] [ science ] [ dev ] [ sport ]

💬 Category: Science
"All arrays Chuck Norris declares are of infinite size, because Chuck Norris knows no bounds."
```

---

## 🌐 API

This project uses the free **Chuck Norris API** — no API keys or secrets are required.
Base URL:
```
https://api.chucknorris.io
```

Example endpoints:
- Get categories: `/jokes/categories`
- Get random joke: `/jokes/random?category={category}`

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

## 🧪 Possible Enhancements

- Add search functionality using `/jokes/search?query=<term>`.
- Save favorite jokes locally.
- Introduce light/dark theme toggling (Chuck Norris works in all lighting conditions).

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
