# Portfolio Website

A modern, fully responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features a clean design with smooth animations, contact form integration, and project showcases.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, TypeScript, and Tailwind CSS
- **Fully Responsive**: Mobile-first design approach ensuring optimal viewing on all devices
- **Smooth Animations**: Scroll-reveal animations and interactive UI elements
- **Contact Form**: Integrated email service with Brevo API for contact form submissions
- **Rate Limiting**: Built-in protection against spam (3 emails per hour per IP)
- **Project Showcase**: Dynamic project cards with live demo and GitHub links
- **Skills Section**: Animated skill bars with percentage indicators
- **Experience Timeline**: Professional experience displayed in an elegant timeline
- **SEO Optimized**: Meta tags and structured data for better search engine visibility
- **Font Optimization**: Custom fonts (Playfair Display & DM Sans) with Next.js font optimization

## 📋 Prerequisites

- Node.js 18+
- npm, yarn, or pnpm
- Brevo account (for contact form email service)
- Google reCAPTCHA account (optional, for spam protection)

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Dinesh-Kumar143/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   # Brevo Email Service
   BREVO_API_KEY=your_brevo_api_key_here
   RECIPIENT_EMAIL=your_email@example.com
   BREVO_SENDER_EMAIL=noreply@yourdomain.com
   BREVO_SENDER_NAME=Portfolio Contact Form
   ```

   **Note:** Never commit `.env.local` to version control. It's already in `.gitignore`.

4. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [https://dinesh-kumar-n-portfolio.vercel.app/](https://dinesh-kumar-n-portfolio.vercel.app/) to view the site.

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── projects/          # Project screenshots
│   ├── resume.pdf         # Your resume file
│   └── Profile.jpeg       # Profile image
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/   # Contact form API route
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/
│   │   ├── layout/        # Navbar, Footer, MobileDrawer
│   │   ├── sections/      # Hero, About, Skills, Projects, etc.
│   │   └── ui/            # Reusable UI components
│   ├── data/
│   │   ├── experience.ts  # Work experience data
│   │   ├── personal.ts    # Personal information
│   │   ├── projects.ts    # Project data
│   │   └── skills.ts      # Skills data
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   └── types/             # TypeScript type definitions
├── .env.local             # Environment variables (not in git)
├── .env.example           # Example environment variables
└── SETUP_EMAIL.md         # Email service setup guide
```

## 🎨 Customization

### Update Personal Information

Edit `src/data/personal.ts` to update your personal details:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... more fields
};
```

### Add Projects

Edit `src/data/projects.ts` to add or modify projects:

```typescript
{
  id: 1,
  title: "Project Name",
  description: "Project description",
  tags: ["React", "Node.js"],
  liveUrl: "https://...",
  githubUrl: "https://github.com/...",
  imageUrl: "/projects/screenshot.png"
}
```

### Update Skills

Edit `src/data/skills.ts` to modify your skill set:

```typescript
{
  id: "frontend",
  label: "Frontend",
  skills: [
    { name: "React / Next.js", percentage: 95 }
  ]
}
```

### Update Experience

Edit `src/data/experience.ts` to add work experience.

## 📧 Contact Form Setup

The contact form uses Brevo (formerly Sendinblue) for email delivery. Follow these steps:

1. Sign up at [Brevo](https://www.brevo.com/)
2. Get your API key from Settings → API Keys
3. Verify your sender email address
4. Add credentials to `.env.local`

For detailed setup instructions, see `SETUP_EMAIL.md`.

## 🔒 Security Features

- **Environment Variables**: Sensitive data stored securely in `.env.local`
- **Rate Limiting**: Prevents spam (3 emails/hour per IP)
- **Input Validation**: Server-side validation for all form inputs
- **CORS Protection**: API routes protected by Next.js defaults
- **reCAPTCHA Ready**: Optional spam protection (add keys to enable)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Deploy to Other Platforms

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🛠️ Built With

- [Next.js 15](https://nextjs.org/) - React framework
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Brevo API](https://www.brevo.com/) - Email service
- [Google Fonts](https://fonts.google.com/) - Typography

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

Made with ❤️ using Next.js
