# Nuanu

Nuanu is an administrator application repository designed for managing Nuanu services. The goal of this repository is to provide a centralized platform for administrators to control and monitor various services related to Nuanu.

## Project Details

- **Node Version:** v18.19.0
- **Package Manager:** pnpm 8.15.1
- **Build Tool:** Webpack 5.93.0

## Usage

1. Clone shared repository:
```bash
     npm run init-shared
```
2. Install dependencies:
```bash
     pnpm install --frozen-lockfile
```
3. Build the project:
    - Production build:
      
     ```bash
     npm run build:prod
     ```
    - Development build:

     ```bash
     npm run build:dev
     ```

4. Start the development server:
     ```bash
     npm run start
     ```