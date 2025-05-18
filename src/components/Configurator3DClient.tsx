"use client";
import dynamic from "next/dynamic";

// Dynamically import Configurator3D with SSR disabled for client-side rendering
const Configurator3D = dynamic(() => import("@/components/Configurator3D"), { ssr: false });

export default function Configurator3DClient() {
  return <Configurator3D />;
}
