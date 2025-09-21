# Soonkers Project

A modern Next.js application with Tailwind CSS and Radix UI components.

## 🚀 Production Deployment

This project is optimized for deployment on Netlify with static site generation.

### Deploy to Netlify

1. **Push to GitHub** (already done)
2. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account
   - Select the `rokon24960/project` repository
   - Netlify will automatically detect the build settings from `netlify.toml`

3. **Build Settings (Auto-configured):**
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: 18

### Manual Deployment

If you prefer to deploy manually:

```bash
# Install dependencies
npm install

# Build for production
npm run build

# The static files will be in the 'out' directory
# Upload the 'out' folder to any static hosting service
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
├── app/                 # Next.js app directory
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   └── ...             # Page-specific components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── public/             # Static assets
├── styles/             # Global styles
├── netlify.toml        # Netlify configuration
└── next.config.mjs     # Next.js configuration
```

## 🔧 Technologies

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod
- **Deployment:** Netlify (Static Export)

## 📝 Features

- ✅ Static Site Generation (SSG)
- ✅ Responsive Design
- ✅ Dark/Light Theme Support
- ✅ Form Validation
- ✅ Accessible UI Components
- ✅ Optimized for Production
- ✅ SEO Friendly

## 🌐 Live Demo

Once deployed, your site will be available at: `https://your-site-name.netlify.app`