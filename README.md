# bEasy Landing Page (React + Vite)

A modern, responsive landing page for bEasy - a comprehensive cleaning and moving services platform. Built with React and featuring smooth animations, mobile-first design, and professional UI components.


- **Frontend**: React 18+ with Hooks
- **Styling**: Pure CSS3 with CSS Grid & Flexbox
- **Animations**: CSS Animations + Intersection Observer API
- **Icons**: Custom SVG icons and PNG assets
- **Build Tool**: Vite
- **Package Manager**: npm

## 📁 Project Structure

```
landingpage/
├── public/
│   ├── image.png              # Hero section mockup
│   ├── image1.png             # Office moving service
│   ├── image2.png             # Home cleaning service
│   ├── image3.png             # Deep cleaning service
│   ├── image4.png             # Sofa & carpet service
│   ├── image5.jpg             # Pest control service
│   ├── download.png           # Download section mockup
│   └── logo.png               # Company logo
├── src/
│   ├── assets/
│   │   ├── components/
│   │   │   ├── navbar/
│   │   │   │   ├── navbar.jsx
│   │   │   │   └── navbar.css
│   │   │   ├── section/
│   │   │   │   ├── sectionA.jsx    # Hero section
│   │   │   │   ├── sectionA.css
│   │   │   │   ├── sectionB.jsx    # Services section
│   │   │   │   ├── sectionB.css
│   │   │   │   ├── sectionC.jsx    # Download section
│   │   │   │   ├── sectionC.css
│   │   │   │   └── global.css      # Shared animations
│   │   │   ├── button/
│   │   │   │   ├── button.jsx
│   │   │   │   ├── button.css
│   │   │   │   ├── downloadButtons.jsx
│   │   │   │   └── downloadButtons.css
│   │   │   ├── footer/
│   │   │   │   ├── footer.jsx
│   │   │   │   └── footer.css
│   │   │   └── styles.css          # Global styles
│   │   └── utils/
│   │       └── smartDownload.js    # Device detection utility
│   ├── App.jsx                     # Main app component
│   └── main.jsx                    # Entry point
├── package.json
└── README.md
```

## 🚀 Installation

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/bEasy_LandingPage.git
   cd bEasy_LandingPage/landingpage
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open browser**
   Navigate to `http://localhost:5173`

## 💻 Usage

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

```

## 🧩 Components

### **Navbar Component**
- Responsive navigation with logo
- Mobile-friendly hamburger menu (if implemented)
- Smooth scroll to sections

### **Section A - Hero Section**
- Animated headline and description
- Call-to-action button
- App mockup with drop shadow
- Responsive image positioning

### **Section B - Services Showcase**
- 5 service categories with alternating layouts
- Smooth scroll animations
- Responsive grid system
- Professional service descriptions

### **Section C - App Download**
- Smart device detection
- Platform-specific download buttons
- App preview mockup
- Responsive button layout

### **Footer Component**
- Company information
- Contact details
- Copyright notice

## 📱 Responsive Design

### Breakpoints
- **375px**: Small phones
- **480px**: Large phones
- **640px**: Small tablets
- **768px**: Tablets
- **840px**: Large tablets
- **1024px+**: Desktop

### Key Responsive Features
- **Progressive Font Scaling**: Using `clamp()` for fluid typography
- **Adaptive Layouts**: Grid to single-column transitions
- **Touch-Friendly**: Minimum 44px touch targets
- **Performance**: Optimized images and CSS


### Colors
```css
:root {
  --primary-blue: #1964AD;
  --text-dark: #1A1A1A;
  --text-light: #3D3D3D;
  --text-muted: #707070;
  --accent-red: #FF0000;
  --background: #ffffff;
}
```

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 400 (Regular), 500 (Medium), 700 (Bold)
- **Responsive Sizing**: `clamp()` functions for fluid scaling

## Acknowledgments

- **Design Inspiration**: Modern cleaning service websites
- **Icons**: Custom designed SVG icons
- **Images**: Professional service photography
- **Fonts**: Google Fonts (Inter family)

---
