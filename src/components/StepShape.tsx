"use client";
import { useConfig } from "@/store/useConfig";
import { RadioGroup } from "@headlessui/react";
import { shallow } from "zustand/shallow";
import type { ConfigState } from "../store/useConfig";

const SHAPES: { id: string; label: string }[] = [
  { id: "lounge",     label: "Lounge" },
  { id: "club",       label: "Club" },
  { id: "adirondack", label: "Adirondack" },
  { id: "chaise",     label: "Chaise" },
];

export default function StepShape() {
  // Use an array selector and Zustand's shallow compare to avoid infinite loops in React 19
  const [shape, set] = useConfig(
    s => [s.shape, s.set],
    shallow
  );

  return (
    <section className="mb-8">
      <h3 className="mb-2 font-medium">1 · Pick Shape</h3>
      <RadioGroup
        value={shape}
        onChange={(val) => (set as ConfigState["set"])("shape", val as ConfigState["shape"])}
        className="grid grid-cols-2 gap-3"
      >
        {SHAPES.map((s) => (
          <RadioGroup.Option
            key={s.id}
            value={s.id}
            className={({ checked }) =>
              `rounded-lg border px-4 py-3 text-sm text-center cursor-pointer\n               ${checked ? "border-terracotta bg-sandshell" : "hover:bg-sandshell"}`
            }
          >
            {s.label}
          </RadioGroup.Option>
        ))}
      </RadioGroup>
    </section>
  );
}
