# Career Cruise Control

A comprehensive career management platform to help professionals navigate their career paths effectively.

## Repository Structure

This is the official monorepo for the Career Cruise Control project, containing both frontend and backend code.

- **Frontend**: Next.js application (in the root directory)
- **Backend**: API service (in the `/api` directory)

## Deployment

- **Frontend**: Deployed on Vercel at [career-cruise-control.vercel.app](https://career-cruise-control.vercel.app)
- **Backend**: Deployed on Render at [api.careercruisecontrol.com](https://api.careercruisecontrol.com)

## Development

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Setup
1. Clone this repository:
   ```
   git clone https://github.com/HardHatOptional/career-cruise-control.git
   cd career-cruise-control
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app

### Environment Variables

Create a `.env.local` file in the root directory with:

```
NEXT_PUBLIC_API_URL=https://api.careercruisecontrol.com
# Add other environment variables as needed
```

## Deployment Process

### Frontend (Vercel)
The frontend is automatically deployed from the `main` branch via Vercel integration.

### Backend (Render)
Backend deployment is managed via Render's GitHub integration.

## Repository Notes

This is the consolidated repository for Career Cruise Control. Previous repositories have been archived:
- careercruisecontrol-frontend (archived)
- careercruisecontrol-backend (archived)

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Submit a pull request
4. Use the `essential-push.bat` script if you encounter GitHub file size issues

## License

Copyright © HardHatOptional, 2024