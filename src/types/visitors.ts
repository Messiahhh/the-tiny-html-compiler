import type { Node } from './ast';

type UnionToIntersection<T> = (T extends any ? (x: T) => any : never) extends (x: infer R) => any ? R : never;

type Helper<T> = T extends {
  type: infer K;
}
  ? {
      [k in K & string]?: {
        enter?: (node: T, parent: Node) => void;
        exit?: (node: T, parent: Node) => void;
      };
    }
  : never;

export type Visitors = UnionToIntersection<Helper<Node>>;
