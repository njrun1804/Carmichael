"use client";
import { useConfig } from "@/store/useConfig";

const ranges = {
  width:  { min: 20, max: 48 },
  depth:  { min: 20, max: 48 },
  height: { min: 24, max: 48 },
};

export default function StepSize() {
  // Use stable selectors for React 19 compatibility
  const width  = useConfig(s => s.width);
  const depth  = useConfig(s => s.depth);
  const height = useConfig(s => s.height);
  const set    = useConfig(s => s.set); // set is already stable

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
            onChange={(e) => (set as import("@/store/useConfig").ConfigState["set"])(dim, Number(e.target.value))}
            className="w-full accent-terracotta"
          />
        </div>
      ))}
    </section>
  );
}
