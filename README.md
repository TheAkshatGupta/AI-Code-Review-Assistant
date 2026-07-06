# AI Code Review Assistant

An AI-powered full-stack web application that helps developers improve code quality using Static Code Analysis and Artificial Intelligence.

---

# Project Status

| Phase | Status |
|--------|--------|
| ✅ Day 1 - Project Planning & Setup | Completed |
| ✅ Day 2 - Authentication & Database | Completed |
| ✅ Day 3 - Dashboard & Navigation | Completed |
| ⏳ Day 4 - Code Submission | Pending |
| ⏳ Day 5 - Static Code Analysis | Pending |
| ⏳ Day 6 - AI Code Review | Pending |
| ⏳ Day 7 - Testing & Deployment | Pending |

---

# Project Overview

The AI Code Review Assistant enables developers to analyze source code by either:

- Pasting code snippets
- Uploading source code files

The application performs:

- Static Code Analysis
- AI-Based Code Review
- Complexity Analysis

The generated review reports are stored for future reference and displayed in a clean dashboard.

---

# Features

## Authentication

- User Registration
- Login
- Logout
- Forgot Password
- Profile Management

## Code Submission

- Paste Code
- Upload Source Code Files

## Static Code Analysis

- Syntax Error Detection
- Unused Variables
- Formatting Issues
- Code Style Violations
- Missing Imports

## AI Review

- Bug Detection
- Code Smell Detection
- Performance Suggestions
- Security Recommendations
- Best Practices
- Refactoring Suggestions
- Code Explanation
- Documentation Generation

## Complexity Analysis

- Cyclomatic Complexity
- Function Complexity
- File Complexity
- Lines of Code
- Number of Functions
- Number of Classes

## Review Dashboard

- Previous Reviews
- Search Reviews
- Filter Reviews
- Delete Reviews
- Detailed Reports

---

# Tech Stack

## Frontend

- Next.js 16
- React.js
- Tailwind CSS
- shadcn/ui

## Backend

- Node.js
- Express.js

## Database

- PostgreSQL (Supabase)

## Authentication

- Supabase Authentication

## AI Integration

- Google Gemini API

## Static Code Analysis

- ESLint
- Pylint

## File Upload

- Multer

## Deployment

- Vercel
- Render / Railway

---

# Project Structure

```text
AI-Code-Review-Assistant/
│
├── frontend/
│
├── backend/
│
├── docs/
│
├── assets/
│
├── README.md
│
└── .gitignore
```

---

# Development Progress

## ✅ Day 1 - Project Planning & Setup

### Completed

- Requirement Analysis
- Finalized Project Features
- Selected Tech Stack
- Planned Application Architecture
- Designed Folder Structure
- Initialized Git Repository
- Created Initial Documentation

---

## ✅ Day 2 - Authentication & Database

### Completed

- Created Supabase Project
- Configured Environment Variables
- Integrated Supabase with Next.js
- Created Reusable Supabase Client
- Built Authentication Architecture
- Created Authentication Route Structure
- Implemented User Registration
- Implemented User Login
- Created Profile Database Table
- Implemented Authentication Service Layer
- Organized Public & Protected Route Groups

### Authentication Testing

- Successfully connected Frontend with Supabase
- Successfully registered users
- Successfully verified user creation
- Successfully tested Login API

### Notes

- Authentication module successfully integrated.
- Email verification testing was temporarily limited due to Supabase free-tier email rate limits.

---

## ✅ Day 3 - Dashboard & Navigation

### Completed

- Built Dashboard Layout
- Created Reusable Sidebar
- Created Reusable Navbar
- Integrated shadcn/ui
- Built Reusable Statistics Cards
- Built Quick Actions Component
- Built Recent Reviews Component
- Organized Dashboard into Reusable Components
- Created Middleware Foundation for Protected Routes

### UI Components

- Sidebar
- Navbar
- StatsCard
- QuickActions
- RecentReviews

### Notes

- Dashboard architecture is fully component-based.
- UI built using reusable React components.
- Middleware foundation prepared for protected routes.
- Session validation and logout will be integrated in the next development phase.

---

# Upcoming Development

## ⏳ Day 4 - Code Submission

- Paste Code
- Upload Source Code Files
- File Preview
- Store Submitted Code
- Review Submission Workflow

## ⏳ Day 5 - Static Code Analysis

- ESLint Integration
- Pylint Integration
- Complexity Analysis
- Code Quality Metrics

## ⏳ Day 6 - AI Code Review

- Google Gemini Integration
- AI Code Review
- Bug Detection
- Optimization Suggestions
- Documentation Generation

## ⏳ Day 7 - Testing & Deployment

- End-to-End Testing
- Error Handling
- Performance Optimization
- Deployment
- Final Documentation

---

# Future Improvements

- Multi-language Support
- Interactive Analytics Dashboard
- Dark Mode
- Code Quality Score
- Docker Support
- Team Workspaces
- CI/CD Pipeline
- Admin Dashboard

---

# Screenshots

> Screenshots will be added as development progresses.

- Authentication
- Dashboard
- Code Submission
- AI Review
- Review History

---

# Author

**Akshat Gupta**

B.Tech Computer Science (Data Science)

Internship Assessment Project