# Changelog

All notable changes to the Feedback App will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned
- Admin dashboard for viewing submitted feedback
- Server-side validation and rate limiting
- Email notifications for new submissions
- Enhanced documentation and testing

## [0.1.0] - 2025-01-24

### Added
- Initial project setup with Next.js 16, React 19, and TypeScript
- Feedback submission form with name (optional), 1-5 star rating, and message fields
- Client-side form validation with loading and error states
- POST `/api/feedback` endpoint for submitting feedback to Supabase
- Supabase integration with PostgreSQL database
- `feedback` table schema with Row Level Security (RLS) for anonymous inserts
- Responsive UI with Tailwind CSS 4
- Success message with option to submit another response
- Error handling with user-friendly messages
- Environment variable configuration for Supabase credentials
- Supabase client utility for database operations
- React Compiler integration for optimized rendering
- Comprehensive README.md with setup instructions, features, and architecture
- CLAUDE.md technical guide for AI assistants and developers
- ROADMAP.md with project milestones and future features
- CHANGELOG.md for version history tracking

### Technical Details
- Next.js App Router architecture with Server and Client Components
- TypeScript for type safety across the codebase
- ESLint configuration for code quality
- Tailwind CSS with modern responsive design patterns
- Anonymous feedback collection without authentication requirement

---

## Version History

- **0.1.0** (2025-01-24) - Initial MVP release with core feedback collection features

## How to Update This Changelog

When making changes to the project, update this file by adding entries under the `[Unreleased]` section using these categories:

- **Added** - New features
- **Changed** - Changes to existing functionality
- **Deprecated** - Soon-to-be removed features
- **Removed** - Removed features
- **Fixed** - Bug fixes
- **Security** - Security vulnerability fixes

When releasing a new version:
1. Create a new version section (e.g., `## [0.2.0] - YYYY-MM-DD`)
2. Move relevant items from `[Unreleased]` to the new version section
3. Update the version number in `package.json`
4. Update ROADMAP.md to reflect completed milestones
5. Create a git tag for the release

## Semantic Versioning Guide

- **MAJOR** (X.0.0) - Breaking changes that require user action
- **MINOR** (0.X.0) - New features that are backward compatible
- **PATCH** (0.0.X) - Bug fixes and minor improvements

Example version progression:
- `0.1.0` → `0.1.1` (bug fix)
- `0.1.1` → `0.2.0` (new feature: admin dashboard)
- `0.2.0` → `1.0.0` (breaking change: authentication required)
