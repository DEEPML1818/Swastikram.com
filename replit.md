# Overview

This is a personal portfolio website built as a full-stack TypeScript application showcasing a blockchain developer's skills and projects. The application features a modern, animated single-page website with sections for about, skills, projects, media, and contact information. It's designed to be a professional portfolio for a 16-year-old blockchain developer specializing in Web3 technologies.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Client-side routing with Wouter for lightweight navigation
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Comprehensive component library using Radix UI primitives with shadcn/ui styling
- **Animations**: Framer Motion for smooth animations and transitions
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Design System**: Dark theme-focused design with emerald green accents and professional typography

## Backend Architecture
- **Server Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Development Setup**: Hot module replacement with Vite integration
- **API Structure**: RESTful API with `/api` prefix for all endpoints
- **Storage Layer**: Abstracted storage interface with in-memory implementation for development

## Database Design
- **Primary Database**: PostgreSQL configured through Drizzle
- **Schema Management**: Type-safe schema definitions with Zod validation
- **Migrations**: Drizzle Kit for database migrations and schema evolution
- **Current Schema**: Basic user management with username/password authentication

## Development Environment
- **Build System**: Vite for frontend bundling and development server
- **TypeScript**: Strict type checking across frontend, backend, and shared modules
- **Code Organization**: Monorepo structure with client, server, and shared directories
- **Path Aliases**: Configured path mapping for clean imports (@/, @shared/)

## Deployment Strategy
- **Production Build**: Separate builds for client (Vite) and server (esbuild)
- **Static Assets**: Frontend built to dist/public directory
- **Server Bundle**: Node.js compatible ESM bundle with external dependencies
- **Environment**: Designed for cloud deployment with database URL configuration

# External Dependencies

## Core Technologies
- **Neon Database**: Serverless PostgreSQL database provider (@neondatabase/serverless)
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect
- **React Query**: Server state management and data fetching
- **Framer Motion**: Animation library for smooth UI transitions

## UI and Styling
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Shadcn/ui**: Pre-built component library built on Radix and Tailwind
- **Lucide React**: Icon library for consistent iconography

## Development Tools
- **Vite**: Fast development server and build tool
- **PostCSS**: CSS processing with Tailwind integration
- **TypeScript**: Type safety across the entire application stack
- **ESBuild**: Fast JavaScript bundler for production builds

## Authentication and Session Management
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **Express Session**: Server-side session management

## Form Handling and Validation
- **React Hook Form**: Performant form library with validation
- **Hookform Resolvers**: Integration layer for various validation schemas
- **Zod**: TypeScript-first schema validation library
- **Drizzle Zod**: Integration between Drizzle ORM and Zod validation