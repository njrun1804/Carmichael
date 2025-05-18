"use client";
import { RadioGroup } from "@headlessui/react";
import { useConfig } from "@/store/useConfig";
import type { ConfigState } from "@/store/useConfig";

type Fabric = "poly" | "canvas" | "lux";
const FABRICS: Fabric[] = ["poly", "canvas", "lux"];

export const fabricMeta = {
  poly: { up: 5, tex: "/textures/fabrics/poly_albedo.jpg" },
  canvas: { up: 0, tex: "/textures/fabrics/canvas_albedo.jpg" },
  lux: { up: -5, tex: "/textures/fabrics/lux_albedo.jpg" },
} as const;

export default function StepFabric() {
  // Use stable selectors for each value
  const fabric = useConfig(s => s.fabric);
  const set = useConfig(s => s.set);

  return (
    <>
      <div className="mb-2 font-medium">3 · Choose Fabric</div>
      <RadioGroup
        value={fabric}
        onChange={val => (set as ConfigState["set"])("fabric", val as Fabric)}
        className="space-y-3"
      >
        {FABRICS.map(f => (
          <RadioGroup.Option key={f} value={f} className="flex items-center gap-3">
            {({ checked }) => (
              <>
                <span
                  className="h-6 w-6 rounded-full border"
                  style={{ backgroundImage: `url(${fabricMeta[f].tex})` }}
                />
                <span className={checked ? "font-semibold" : ""}>{f}</span>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </RadioGroup>
    </>
  );
}
