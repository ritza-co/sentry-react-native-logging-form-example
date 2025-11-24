# React Native Logging Demo

Simple React Native app demonstrating logging with:
- React Native's built-in `console` methods (info, warn, error)
- Sentry's Logging API

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure Sentry DSN in `App.js`
   - Replace the DSN value with your own Sentry project DSN
   - Get your DSN from your Sentry project settings

## Run

```bash
npm start
```

Then press `i` for iOS, `a` for Android, or `w` for web.

## What it does

The app provides buttons to trigger different types of logs:
- Built-in React Native console logging
- Complex object logging