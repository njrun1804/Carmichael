"use client";
import { useConfig } from "@/store/useConfig";
import { shallow } from "zustand/shallow";

const ranges = {
  width:  { min: 20, max: 48 },
  depth:  { min: 20, max: 48 },
  height: { min: 24, max: 48 },
};

export default function StepSize() {
  // Use array selector and shallow for stability
  const arr = useConfig(
    s => [s.width, s.depth, s.height, s.set],
    shallow
  );
  const [width, depth, height, rawSet] = arr;
  const set = rawSet as <K extends keyof import("../store/useConfig").ConfigState>(key: K, value: import("../store/useConfig").ConfigState[K]) => void;

  const getValue = (dim: "width" | "depth" | "height") => {
    if (dim === "width") return width as number;
    if (dim === "depth") return depth as number;
    if (dim === "height") return height as number;
    return 0;
  };

  return (
    <section className="mb-8">
      <h3 className="mb-2 font-medium">2 · Dial In Size (inches)</h3>
      {(["width", "depth", "height"] as const).map((dim) => (
        <div key={dim} className="mb-4">
          <label className="flex justify-between text-xs mb-1 capitalize">
            <span>{dim}</span>
            <span>{Math.round(getValue(dim))}&quot;</span>
          </label>
          <input
            type="range"
            min={ranges[dim].min}
            max={ranges[dim].max}
            value={getValue(dim)}
            onChange={(e) => set(dim, Number(e.target.value))}
            className="w-full accent-terracotta"
          />
        </div>
      ))}
    </section>
  );
}
