export type Token = SelfClosingToken | StartToken | EndToken | TextToken;

export interface SelfClosingToken {
  type: 'SelfClosingTag';
  value: string;
}

export interface StartToken {
  type: 'StartTag';
  value: string;
}

export interface EndToken {
  type: 'EndTag';
  value: string;
}

export interface TextToken {
  type: 'Text';
  value: string;
}
