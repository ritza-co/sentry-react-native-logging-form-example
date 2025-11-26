# React Native Logging Demo

Simple React Native app demonstrating logging with:
- React Native's built-in `console` methods (info, warn, error)
- Sentry's Logging API

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a React Native project in Sentry and configure the local project with:

```bash
npx @sentry/wizard@latest -i reactNative --saas --org your-team-name --project your-project-name
```

## Run

```bash
npm start
```

Then press `i` for iOS, `a` for Android, or `w` for web.

## What it does

The app provides buttons to trigger different types of logs:
- Built-in React Native console logging
- Complex object logging