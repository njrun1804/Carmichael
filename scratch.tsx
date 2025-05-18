import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

function Chair(props: any) {
  const { width, height, depth } = props;
  const SCALE = 0.0254;
  return (
    <group
      scale={[width * SCALE, height * SCALE, depth * SCALE]}
      position={[0, (height * SCALE) / 2, 0]}
    >
      <primitive object={{}} />
    </group>
  );
}

export default function ScratchTest() {
  const cfg = { width: 1, height: 1, depth: 1 };
  return (
    <Canvas camera={{ position: [3, 2, 4], fov: 45 }} shadows>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={0.7} castShadow />
      <Suspense fallback={null}>
        <Chair {...cfg} />
      </Suspense>
    </Canvas>
  );
}
