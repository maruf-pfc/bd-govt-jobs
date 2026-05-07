# 🇧🇩 Bangladesh Govt Jobs Portal

A modern, high-fidelity recruitment information portal for the Government of the People's Republic of Bangladesh. This platform centralizes job notices, circulars, and comprehensive career preparation guidelines in a neutral, official design language.

## ✨ Key Features

- **Official Branding**: Adheres to the official Government of Bangladesh design system, using the official seal and a formal green-red palette.
- **Job Circular Hub**: Centralized repository of active government job notices with metadata (Ministry, Circular Date, Application Link).
- **Advanced Filtering**: Filter jobs by Division, Job Type (Full-time/Part-time), and Status (Active/Expired).
- **Preparation Hub**: Comprehensive guidelines for major competitive exams:
  - **BCS Preparation**: Detailed marks distribution, subject-wise strategies, and recommended booklists.
  - **Govt Bank Preparation**: Strategic guides for Sr. Officer and Assistant Director (AD) positions.
  - **Private Bank Preparation**: Insights into the private banking recruitment process and required skills.
- **Quick Access Action Bar**: One-click access to official "Online Application" forms and "PDF Circulars" from the Job Detail view.
- **Print-Optimized**: Job notices are optimized for printing directly from the browser.

## 🛠 Tech Stack

- **Framework**: [Vue 3](https://vuejs.org/) (Composition API)
- **Build Tool**: [Vite 6](https://vite.dev/)
- **State Management**: [Pinia](https://pinia.vuejs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Package Manager**: [Bun](https://bun.sh/)

## 📁 Project Structure

```text
src/
├── assets/          # Static assets (Official Logo, CSS)
├── components/      # Reusable UI components (JobCard, FilterBar)
├── router/          # Vue Router configuration (Multi-page guidelines)
├── stores/          # Pinia stores (Job State Management)
└── views/           # Page views (Home, Preparation, Job Details)
public/
└── jobs.json        # Centralized recruitment data source
```

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your system.

### Installation

1. Clone the repository
2. Install dependencies:
   ```sh
   bun install
   ```
3. Run the development server:
   ```sh
   bun dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📄 License

This project is intended for informational and educational purposes. All job data is sourced from official government portals (`teletalk.com.bd`, `bpsc.gov.bd`, etc.).

---

**Developed for the betterment of job seekers in Bangladesh.**
