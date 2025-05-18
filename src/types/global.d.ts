import { ThreeElements } from '@react-three/fiber';

declare global {
  namespace JSX {
    // Remove empty interface extension to fix ESLint error
    type IntrinsicElements = ThreeElements;
  }
}

export {}; // Ensure this file is treated as a module
