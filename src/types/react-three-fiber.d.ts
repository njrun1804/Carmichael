import { ThreeElements } from '@react-three/fiber';

declare global {
  namespace JSX {
    // Remove empty interface extension to fix ESLint error
    type IntrinsicElements = ThreeElements;
  }
}

// Ensure this file is included in tsconfig.json under "include" or "files".
// If not, add "src/types/react-three-fiber.d.ts" to the "include" array in tsconfig.json.

export {}; // Ensure this file is treated as a module
