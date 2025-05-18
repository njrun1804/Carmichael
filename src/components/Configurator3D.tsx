import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF, useTexture } from "@react-three/drei";
import { useConfig } from "@/store/useConfig";
import { fabricMeta } from "@/components/StepFabric";
import { Suspense, useMemo } from "react";
// @ts-expect-error: DRACOLoader is not typed for import in Next.js/R3F context
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

function Chair(props: {
  shape: string;
  width: number;
  depth: number;
  height: number;
  fabric: string;
}) {
  const { shape, width, depth, height, fabric } = props;
  // load model & fabric texture
  const { scene } = useGLTF(`/models/${shape}.glb`, true, undefined, loader => {
    // attach draco if model compressed
    const draco = new DRACOLoader();
    draco.setDecoderPath("/"); // root path since Next serves public/
    (loader as unknown as { setDRACOLoader: (draco: DRACOLoader) => void }).setDRACOLoader(draco);
  });

  const tex = useTexture(fabricMeta[fabric as keyof typeof fabricMeta].tex);

  // apply texture once loaded
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

  // convert inches → meters (~0.0254) & center model
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
  const cfg = useConfig();

  return (
    <Canvas camera={{ position: [3, 2, 4], fov: 45 }} shadows>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={0.7} castShadow />

      <Suspense fallback={null}>
        <Stage environment="city" shadows adjustCamera={false} intensity={0.4}>
          <Chair {...cfg} />
        </Stage>
      </Suspense>

      <OrbitControls makeDefault enablePan={false} />
    </Canvas>
  );
}

// cache models
useGLTF.preload("/models/lounge.glb");
useGLTF.preload("/models/club.glb");
useGLTF.preload("/models/adirondack.glb");
useGLTF.preload("/models/chaise.glb");
