# BHE UNI - Educational Platform

BHE UNI is a modern educational platform built with Next.js and Bootstrap, designed to provide a seamless learning experience for students and educators.

## Features

- **Course Management**: Browse and search through a wide range of courses
- **Responsive Design**: Fully responsive interface that works on all devices
- **Modern UI**: Built with Bootstrap 5 for a clean and professional look
- **Fast Performance**: Optimized with Next.js for quick loading and navigation
- **Interactive Components**: Dynamic search, filtering, and course cards

## Tech Stack

- Next.js 14.0.4
- React 18.2.0
- Bootstrap 5.3.2
- TypeScript
- SASS
- React Icons

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bhe-new
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add necessary environment variables:
```env
NEXT_PUBLIC_API_URL=your_api_url
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Project Structure

```
bhe-new/
├── public/          # Static files
├── src/
│   ├── app/        # Next.js app directory
│   ├── components/ # React components
│   └── styles/     # SCSS styles
├── package.json
└── tsconfig.json
```

## Deployment

This project is configured for deployment on Vercel. The `vercel.json` file includes the necessary configuration for deployment.

To deploy:

1. Push your changes to the main branch
2. Vercel will automatically build and deploy your application

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## UI Design

Below are screenshots showcasing the modern interface and key components of BHE UNI:

### Homepage Hero Section
![Homepage Hero Section](/public/hero-image.png)

### Student Profile
![Student Profile](/public/student-1.jpg)

### University Partner
![University Partner](/public/uni-logo-1.png)

## License

This project is licensed under the MIT License.