export const fabricMeta = {
  poly:   { up: 0.8, tex: "/textures/fabrics/poly_albedo.jpg" },
  canvas: { up: 1.0, tex: "/textures/fabrics/canvas_albedo.jpg" },
  lux:    { up: 1.2, tex: "/textures/fabrics/lux_albedo.jpg" },
} as const;

export type Fabric = keyof typeof fabricMeta;
