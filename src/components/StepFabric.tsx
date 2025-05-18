"use client";
import { RadioGroup } from "@headlessui/react";
import { useConfig } from "@/store/useConfig";
import { type Fabric } from "@/lib/fabricMeta";

const FABRICS: Fabric[] = ["poly", "canvas", "lux"];

export default function StepFabric() {
  // Use stable selectors for React 19 compatibility
  const fabric = useConfig(s => s.fabric);
  const set    = useConfig(s => s.set); // set is already stable

  return (
    <section className="mb-8">
      <h3 className="mb-2 font-medium">3 · Choose Fabric</h3>
      <RadioGroup
        value={fabric}
        onChange={(val) => (set as import("@/store/useConfig").ConfigState["set"])("fabric", val as Fabric)}
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
