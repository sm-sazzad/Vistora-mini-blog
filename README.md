# Vistora

### A Modern Editorial Blog Platform

**Vistora** is a modern editorial blog platform built with **Next.js and TypeScript**. It fetches real article data from **The Guardian Open Platform API** and allows users to explore stories through different categories, browse paginated articles, and read complete article details.

🔗 **Live Site:** [**Visit Vistora**](https://vistora-sm-sazzad.vercel.app/)

---

## ✨ Features

- Explore stories across different categories
- Browse all available categories
- Category-based article listing
- Pagination for browsing articles
- Detailed article pages
- Article thumbnail, title, description, author, and publication date
- Full article content
- Link to the original Guardian article
- Dynamic routing for article details
- Loading UI with skeleton states
- Custom `not-found` page
- Responsive and clean editorial-style UI

---

## 🛠️ Tech Stack

- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- **React Icons**
- **The Guardian Open Platform API**

---

## 🔌 API

Vistora uses the **The Guardian Open Platform API** to fetch article data.

The API provides information such as:

- Article title
- Thumbnail
- Category
- Author
- Description
- Publication date
- Full article content
- Original article URL

---

## 📂 Project Structure

```text
app/
├── page.tsx
├── categories/
│   ├── page.tsx
│   └── loading.tsx
├── blogs/
│   └── [category]/
│       └── page.tsx
├── blog/
│   └── [...id]/
│       ├── page.tsx
│       └── loading.tsx
├── loading.tsx
└── not-found.tsx

components/
├── Navbar.tsx
├── Banner.tsx
├── CategoryCard.tsx
├── BlogCard.tsx
└── Footer.tsx

lib/
├── DataType.ts
└── CategoryName.ts
```

---

## 📌 Main Concepts Used

While building Vistora, I worked with several Next.js concepts, including:

- Server Components
- Dynamic Routes
- Catch-all Routes
- `params`
- `searchParams`
- Server-side data fetching
- Pagination
- Loading UI
- `not-found.tsx`
- Metadata
- Dynamic article pages
- Environment variables

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/sm-sazzad/Vistora-mini-blog.git
```

```bash
cd Vistora-mini-blog
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add environment variable

Create a `.env.local` file in the root directory:

```env
GUARDIAN_API_KEY=your_guardian_api_key
```

You can get an API key from **The Guardian Open Platform**.

### 4. Run the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🌐 Live Demo

**Vistora:**
https://vistora-sm-sazzad.vercel.app/

---

## 👨‍💻 Author

**Sazzad Hossain**

- GitHub: https://github.com/sm-sazzad
- LinkedIn: https://linkedin.com/in/sm-sazzad/

---

## 📄 License

This project was created for learning and portfolio purposes.
