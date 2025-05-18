// Remove all imports from this file to ensure it is a pure global augmentation
// (TypeScript will not merge if there are any imports, even type-only)

declare global {
  namespace JSX {
    // Use type alias for IntrinsicElements to avoid empty interface lint error
    type IntrinsicElements = import('@react-three/fiber').ThreeElements;
  }
}
