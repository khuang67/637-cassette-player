# 637-cassette-player

## Project Description

Cassettefy is a web app that reimagines music streaming through the nostalgic charm of a vintage cassette player. Instead of the uniform interfaces seen across Spotify, YouTube Music, and Apple Music, Cassettefy brings personality back into digital listening with playful animations—spinning reels, cassette door movements, and a transparent aesthetic inspired by Nothing's minimalist hardware design.

In a time when 81% of Gen Z reports digital fatigue and craves emotional tech experiences, Cassettefy blends retro tactility with modern convenience, making simple actions like play and pause feel warm, satisfying, and alive.

## Project Rationale

I created Cassettefy for my Programming User Interfaces class to show how digital products can feel human, tactile, and expressive. With cassettes experiencing a 200%+ sales jump in early 2025 and a resurgence of analog culture, there's a real desire for interfaces that engage our senses—not just our screens.

**Cassettefy is aimed at:**
- Gen Z users who crave emotional, distinctive digital experiences
- Nostalgia-driven users who miss the feeling of pressing real buttons

By merging the design philosophies of Nothing (transparency, simplicity) with classic Sony hardware cues, Cassettefy demonstrates how UI design can honor both innovation and emotional value.

## Live Demo

The project is deployed on Netlify and can be viewed here:  
**[https://info637-cassette-player.netlify.app/](https://info637-cassette-player.netlify.app/)**

## File Structure

```
project/
├── src/
│   ├── components/
│   │   ├── Cassette.tsx
│   │   ├── PlayerBody.tsx
│   │   ├── Buttons.tsx
│   │   └── ...other UI components
│   ├── App.tsx
│   ├── main.tsx
│   └── styles/
│       ├── app.css
│       └── ...other css files
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

## Key Features

- Interactive cassette player UI
- Cassette insert and eject animation
- Toggle playback controls
- Retro styling with custom textures
- React + TypeScript component architecture
- Lightweight Vite development environment
- Mobile-responsive layout
- Smooth UI animations

## Technologies Used

- **React** (components, hooks)
- **TypeScript**
- **Vite** (bundler, dev server)
- **CSS Modules / CSS** for component-level styling
- **HTML + JavaScript**

## How to Run the Project Locally

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The app will run on your local machine (typically at `http://localhost:5173/`).
