import { create } from "zustand";
import { shallow } from "zustand/shallow";

export type Shape = "lounge" | "club" | "adirondack" | "chaise";
export type Fabric = "poly" | "canvas" | "lux";

export interface ConfigState {
  shape: Shape;
  width: number;
  depth: number;
  height: number;
  fabric: Fabric;
  options: {
    vents: boolean;
    tieDowns: boolean;
    monogram: boolean;
  };
  set: <K extends keyof ConfigState>(key: K, value: ConfigState[K]) => void;
}

const useConfigBase = create<ConfigState>((set) => ({
  shape: "lounge",
  width: 30,
  depth: 32,
  height: 34,
  fabric: "poly",
  options: { vents: false, tieDowns: false, monogram: false },
  set: (key, value) => set({ [key]: value } as Partial<ConfigState>),
}));

// Generic selector type for Zustand (fixes infinite loop with React 19)
export function useConfig<T = ConfigState>(
  selector: (s: ConfigState) => T = (s) => s as T,
  equality: (a: T, b: T) => boolean = shallow
) {
  // @ts-expect-error Zustand selector type mismatch workaround
  return useConfigBase(selector, equality);
}

export default useConfig;
