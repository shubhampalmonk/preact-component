# Preact Component Library

A lightweight component library built with Preact and TypeScript.

## Installation

```bash
npm install preact-component-library
```

## Usage

```tsx
import { Button, Card } from 'preact-component-library';

function App() {
  return (
    <Card title="Welcome" subtitle="This is a demo">
      <Button variant="primary" onClick={() => alert('Hello!')}>
        Click me
      </Button>
    </Card>
  );
}
```

## Components

### Button

A versatile button component with multiple variants and sizes.

#### Props

- `children`: Button content (string or VNode)
- `variant`: 'primary' | 'secondary' | 'outline' (default: 'primary')
- `size`: 'small' | 'medium' | 'large' (default: 'medium')
- `onClick`: Click handler function
- `disabled`: Boolean to disable the button
- `className`: Additional CSS classes

#### Examples

```tsx
<Button variant="primary" size="large">Large Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline" disabled>Disabled Outline</Button>
```

### Card

A container component for content with optional title and subtitle.

#### Props

- `children`: Card content (string or VNode)
- `title`: Optional card title
- `subtitle`: Optional card subtitle
- `padding`: 'small' | 'medium' | 'large' (default: 'medium')
- `shadow`: 'none' | 'small' | 'medium' | 'large' (default: 'small')
- `className`: Additional CSS classes

#### Examples

```tsx
<Card title="My Card" subtitle="Card description">
  <p>Card content goes here</p>
</Card>

<Card padding="large" shadow="large">
  <h3>Custom styled card</h3>
</Card>
```

## Development

### Build Scripts

```bash
# Build the library (development)
npm run build

# Build the library (production with minification)
npm run build:prod

# Clean build directory
npm run clean

# Build library (alias for build)
npm run build:lib
```

### Development Scripts

```bash
# Start demo app with webpack dev server
npm start

# Watch mode for library development (rebuilds on file changes)
npm run dev

# Watch mode for library development (alias for dev)
npm run watch

# Type checking
npm run type-check

# Type checking in watch mode
npm run type-check:watch
```

### Code Quality Scripts

```bash
# Run tests in watch mode
npm test

# Run tests with coverage
npm run test:ci

# Lint and fix code
npm run lint

# Check linting without fixing
npm run lint:check

# Format code with prettier
npm run format

# Check code formatting
npm run format:check
```

### Publishing Scripts

```bash
# Prepare for publishing (runs automatically on npm install)
npm run prepare

# Pre-publish checks (runs automatically before npm publish)
npm run prepublishOnly
```

## Building

The library is built using Rollup and outputs:
- CommonJS format (`dist/index.js`)
- ES Module format (`dist/index.esm.js`)
- TypeScript declarations (`dist/*.d.ts`)

### Build Process

1. **Clean**: Removes previous build artifacts
2. **Type Check**: Validates TypeScript types
3. **Bundle**: Creates optimized bundles with Rollup
4. **Minify**: Compresses code for production builds

### Watch Mode

The watch mode (`npm run dev` or `npm run watch`) automatically:
- Monitors all source files in the `src/` directory
- Rebuilds the library when files change
- Updates TypeScript declarations
- Provides real-time feedback during development

## License

ISC
