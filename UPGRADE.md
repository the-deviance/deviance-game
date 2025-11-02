# Deviance Project Upgrade Guide

## Overview
This upgrade modernizes the Deviance board game project with:
- React 18 with modern patterns
- React Router v6
- TypeScript support
- Modern state management with useReducer
- Error boundaries
- Improved performance and maintainability

## Installation Steps

1. **Remove old dependencies and install new ones:**
```bash
rm -rf node_modules package-lock.json yarn.lock
npm install
```

2. **Key Changes Made:**

### Package Updates
- React 17 → React 18
- React Router v5 → v6
- Bootstrap 4 → Bootstrap 5
- Added TypeScript support
- Removed deprecated `react-input-range`

### Code Modernization
- Replaced Switch/Route with Routes/Route (React Router v6)
- Added proper TypeScript interfaces
- Implemented modern context with useReducer
- Added error boundaries
- Fixed typos (recieving → receiving)
- Improved error handling and validation

### New Architecture
- `/src/types/` - TypeScript interfaces
- `/src/contexts/` - Modern React context providers
- `/src/hooks/` - Custom hooks for game operations
- `/src/components/ErrorBoundary.tsx` - Error handling

### Breaking Changes
- `react-input-range` replaced with native HTML range input
- Context API restructured with proper TypeScript types
- Router syntax updated for v6

## Next Steps
After installation, you can continue refactoring:
1. Convert remaining .js files to .tsx
2. Add proper TypeScript types throughout
3. Implement component testing
4. Add form validation
5. Optimize performance with React.memo where needed

## Development Commands
```bash
npm start    # Start development server
npm build    # Build for production
npm test     # Run tests
```