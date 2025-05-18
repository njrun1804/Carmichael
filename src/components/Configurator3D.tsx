// Configurator3D.tsx
// 3D chair configurator for Castaway Covers
// Uses R3F, Drei, Zustand, and dynamic asset loading
// Maintainer note: All asset/model paths and branding are up to date as of 2025-05-18

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF, useTexture } from "@react-three/drei";
import { useConfig } from "@/store/useConfig";
import { fabricMeta } from "@/lib/fabricMeta";
import { Suspense, useMemo } from "react";
// @ts-expect-error: DRACOLoader is not typed for import in Next.js/R3F context
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

// Chair props for type safety and clarity
interface ChairProps {
  shape: string;
  width: number;
  depth: number;
  height: number;
  fabric: string;
}

function Chair({ shape, width, depth, height, fabric }: ChairProps) {
  // Load model & fabric texture
  const { scene } = useGLTF(`/models/${shape}.glb`, true, undefined, loader => {
    // Attach DRACO if model compressed
    const draco = new DRACOLoader();
    draco.setDecoderPath("/"); // Next.js serves public/
    (loader as unknown as { setDRACOLoader: (draco: DRACOLoader) => void }).setDRACOLoader(draco);
  });

  // Fallback to a default texture if fabric is missing
  const tex = useTexture(fabricMeta[fabric as keyof typeof fabricMeta]?.tex || "/textures/fabrics/canvas_albedo.jpg");

  // Apply texture once loaded
  useMemo(() => {
    scene.traverse(obj => {
      // @ts-expect-error: three.js types do not guarantee isMesh property
      if (obj.isMesh) {
        // @ts-expect-error: three.js material type is not guaranteed
        obj.material.map = tex;
        // @ts-expect-error: three.js material type is not guaranteed
        obj.material.needsUpdate = true;
      }
    });
  }, [scene, tex]);

  // Convert inches → meters (~0.0254) & center model
  const SCALE = 0.0254;
  return (
    <group
      scale={[width * SCALE, height * SCALE, depth * SCALE]}
      position={[0, (height * SCALE) / 2, 0]}
    >
      <primitive object={scene} />
    </group>
  );
}

export default function Configurator3D() {
  // Use stable selectors for each primitive value
  const shape = useConfig(s => s.shape);
  const width = useConfig(s => s.width);
  const depth = useConfig(s => s.depth);
  const height = useConfig(s => s.height);
  const fabric = useConfig(s => s.fabric);

  return (
    <Canvas camera={{ position: [3, 2, 4], fov: 45 }} shadows>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={0.7} castShadow />

      <Suspense fallback={null}>
        <Stage environment="city" shadows adjustCamera={false} intensity={0.4}>
          <Chair shape={shape} width={width} depth={depth} height={height} fabric={fabric} />
        </Stage>
      </Suspense>

      <OrbitControls makeDefault enablePan={false} />
    </Canvas>
  );
}

// Preload all supported chair models for snappy UX
useGLTF.preload("/models/lounge.glb");
useGLTF.preload("/models/club.glb");
useGLTF.preload("/models/adirondack.glb");
useGLTF.preload("/models/chaise.glb");
