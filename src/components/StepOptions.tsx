"use client";
import { Switch } from "@headlessui/react";
import { useConfig } from "@/store/useConfig";
import { shallow } from "zustand/shallow";

const OPTS = [
  { key: "vents",     label: "Side Vents (+$5)" },
  { key: "tieDowns",  label: "Tie-Down Straps (+$8)" },
  { key: "monogram",  label: "Monogram (+$12)" },
] as const;

export default function StepOptions() {
  // Use array selector and shallow for stability
  const [rawOptions, rawSet] = useConfig(
    s => [s.options, s.set],
    shallow
  );
  const options = rawOptions as { vents: boolean; tieDowns: boolean; monogram: boolean };
  const set = rawSet as <K extends keyof import("../store/useConfig").ConfigState>(key: K, value: import("../store/useConfig").ConfigState[K]) => void;

  return (
    <section className="mb-8">
      <h3 className="mb-2 font-medium">4 · Add Options</h3>
      {OPTS.map((o) => (
        <Switch.Group key={o.key} as="div" className="mb-4 flex items-center justify-between">
          <Switch.Label className="text-sm">{o.label}</Switch.Label>
          <Switch
            checked={options[o.key]}
            onChange={(val) => set("options", { ...options, [o.key]: val })}
            className={`${options[o.key] ? "bg-terracotta" : "bg-gray-300"}
                       relative inline-flex h-5 w-10 items-center rounded-full`}
          >
            <span
              className={`${options[o.key] ? "translate-x-5" : "translate-x-1"} inline-block h-3 w-3 transform rounded-full bg-white transition`}
            />
          </Switch>
        </Switch.Group>
      ))}
    </section>
  );
}

export const optCosts: Record<string, number> = {
  vents: 5,
  tieDowns: 8,
  monogram: 12,
};
