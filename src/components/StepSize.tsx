"use client";
import { shallow } from "zustand/shallow";
import { useConfig, type ConfigState } from "@/store/useConfig";

export default function StepSize() {
  // Defensive: ensure only numbers are passed to value, fallback to 36 if not
  const [widthRaw, depthRaw, heightRaw, set] = useConfig(
    (s) => [s.width, s.depth, s.height, s.set],
    shallow
  );
  const width = typeof widthRaw === "number" ? widthRaw : 36;
  const depth = typeof depthRaw === "number" ? depthRaw : 36;
  const height = typeof heightRaw === "number" ? heightRaw : 36;

  return (
    <>
      <div className="mb-2 font-medium">2 · Adjust Size</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Width (in)</label>
          <input
            type="range"
            min={20}
            max={60}
            value={width}
            onChange={(e) => (set as ConfigState["set"])("width", Number(e.target.value))}
            className="w-full"
          />
          <div className="text-xs text-gray-500">{width} in</div>
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Depth (in)</label>
          <input
            type="range"
            min={20}
            max={60}
            value={depth}
            onChange={(e) => (set as ConfigState["set"])("depth", Number(e.target.value))}
            className="w-full"
          />
          <div className="text-xs text-gray-500">{depth} in</div>
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Height (in)</label>
          <input
            type="range"
            min={20}
            max={60}
            value={height}
            onChange={(e) => (set as ConfigState["set"])("height", Number(e.target.value))}
            className="w-full"
          />
          <div className="text-xs text-gray-500">{height} in</div>
        </div>
      </div>
    </>
  );
}
