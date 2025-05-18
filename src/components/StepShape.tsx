"use client";
import { RadioGroup } from "@headlessui/react";
import { useConfig, type ConfigState } from "@/store/useConfig";

type Shape = "lounge" | "club" | "adirondack" | "chaise";
const SHAPES: Shape[] = ["lounge", "club", "adirondack", "chaise"];

export default function StepShape() {
  // Use stable selectors for each value
  const shape = useConfig(s => s.shape);
  const set = useConfig(s => s.set);

  return (
    <>
      <div className="mb-2 font-medium">1 · Pick Shape</div>
      <RadioGroup
        value={shape}
        onChange={val => (set as ConfigState["set"])("shape", val as Shape)}
        className="grid grid-cols-2 gap-3"
      >
        {SHAPES.map(s => (
          <RadioGroup.Option key={s} value={s} className="rounded border p-2">
            {({ checked }) => <span className={checked ? "font-semibold" : ""}>{s}</span>}
          </RadioGroup.Option>
        ))}
      </RadioGroup>
    </>
  );
}
