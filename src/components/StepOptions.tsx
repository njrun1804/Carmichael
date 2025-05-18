"use client";
import { Switch } from "@headlessui/react";
import { shallow } from "zustand/shallow";
import { useConfig, type ConfigState } from "@/store/useConfig";

type OptKey = "vents" | "tieDowns" | "monogram";
const OPTIONS: { key: OptKey; label: string }[] = [
  { key: "vents", label: "Side vents" },
  { key: "tieDowns", label: "Tie‑downs" },
  { key: "monogram", label: "Monogram" },
];

export default function StepOptions() {
  // Use stable selectors for each value
  const options = useConfig(s => s.options);
  const set = useConfig(s => s.set);

  return (
    <>
      <div className="mb-2 font-medium">4 · Extras</div>
      {OPTIONS.map(o => (
        <div key={o.key} className="flex items-center gap-3 mb-3">
          <span>{o.label}</span>
          <Switch
            checked={options[o.key]}
            onChange={val =>
              (set as ConfigState["set"])("options", { ...options, [o.key]: val })
            }
            className={`relative inline-flex h-5 w-10 items-center rounded-full ${
              options[o.key] ? "bg-terracotta" : "bg-gray-300"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                options[o.key] ? "translate-x-5" : "translate-x-1"
              }`}
            />
          </Switch>
        </div>
      ))}
    </>
  );
}

export const optCosts: Record<string, number> = {
  vents: 5,
  tieDowns: 8,
  monogram: 12,
};
