export type NodeWithChildren =
  | AST
  | H1Node
  | H2Node
  | H3Node
  | H4Node
  | H5Node
  | H6Node
  | BNode
  | INode
  | CodeNode
  | DivNode
  | SpanNode;
// | UlNode
// | OlNode
// | LiNode
// | ANode

export type NodeWithoutChildren = TextNode | ImgNode;

export type Node = NodeWithChildren | NodeWithoutChildren;

interface BaseNode {
  type: string;
}

export interface AST extends BaseNode {
  type: 'Program';
  children: Node[];
}

export interface TextNode extends BaseNode {
  type: 'Text';
  value: string;
}

export interface ImgNode extends BaseNode {
  type: 'img';
  src: string;
  alt?: string;
}

export interface H1Node extends BaseNode {
  type: 'h1';
  children: Node[];
}

export interface H2Node extends BaseNode {
  type: 'h2';
  children: Node[];
}

export interface H3Node extends BaseNode {
  type: 'h3';
  children: Node[];
}

export interface H4Node extends BaseNode {
  type: 'h4';
  children: Node[];
}

export interface H5Node extends BaseNode {
  type: 'h5';
  children: Node[];
}

export interface H6Node extends BaseNode {
  type: 'h6';
  children: Node[];
}

export interface UlNode extends BaseNode {
  type: 'ul';
  children: Node[];
}

export interface OlNode extends BaseNode {
  type: 'ol';
  children: Node[];
}

export interface LiNode extends BaseNode {
  type: 'li';
  children: Node[];
}

export interface DivNode extends BaseNode {
  type: 'div';
  children: Node[];
}

export interface SpanNode extends BaseNode {
  type: 'span';
  children: Node[];
}

export interface ANode extends BaseNode {
  type: 'a';
  children: Node[];
}

export interface BNode extends BaseNode {
  type: 'b';
  children: Node[];
}

export interface INode extends BaseNode {
  type: 'i';
  children: Node[];
}

export interface CodeNode extends BaseNode {
  type: 'code';
  children: Node[];
}
