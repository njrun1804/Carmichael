"use client";
import { RadioGroup } from "@headlessui/react";
import { useConfig, Fabric } from "@/store/useConfig";
import type { ConfigState } from "../store/useConfig";
import { shallow } from "zustand/shallow";

const FABRICS: Fabric[] = ["poly", "canvas", "lux"];

export default function StepFabric() {
  // Use object destructure for clarity
  const [fabric, set] = useConfig(
    s => [s.fabric, s.set],
    shallow
  );

  return (
    <section className="mb-8">
      <h3 className="mb-2 font-medium">3 · Choose Fabric</h3>
      <RadioGroup
        value={fabric}
        onChange={(val) => (set as ConfigState["set"])("fabric", val as Fabric)}
        className="space-y-3"
      >
        {FABRICS.map((f) => (
          <RadioGroup.Option key={f} value={f}>
            {({ checked }) => (
              <div
                className={`flex items-center gap-3 rounded-lg border px-4 py-3
                  ${checked ? "border-terracotta bg-sandshell" : "hover:bg-sandshell"}`}
              >
                <span className="flex-1 text-sm">{f}</span>
              </div>
            )}
          </RadioGroup.Option>
        ))}
      </RadioGroup>
    </section>
  );
}

// Restore fabricMeta for 3D and Sidebar usage
export const fabricMeta = {
  poly: { up: 0, tex: "/textures/fabrics/poly_albedo.jpg" },
  canvas: { up: 20, tex: "/textures/fabrics/canvas_albedo.jpg" },
  lux: { up: 40, tex: "/textures/fabrics/lux_albedo.jpg" },
};
