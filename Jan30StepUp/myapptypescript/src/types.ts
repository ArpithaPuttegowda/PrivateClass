// export type AppProps = {
//   name: string;
//   fn: () => string;
//   loc?: string;
// };

export interface AppProps {
  name: string;
  fn: () => string;
  loc?: string;
}

export type Vector = {
  x: number;
  y: number;
};

export type Vector1 = {
  x: number;
  y: number;
  z: number;
};
export type Vector2 = Vector & { z: number };

// OR

export interface V {
  x: number;
  y: number;
}

export interface V2 extends V {
  z: number;
}
