import { Node, AST, TextNode, Token, NodeWithChildren, NodeWithoutChildren } from '../types';
import { neverThrow } from './utils';

export function parser(tokens: Token[]) {
  let current = 0;
  const ast: AST = {
    type: 'Program',
    children: [],
  };

  while (current < tokens.length) {
    ast.children.push(walk());
  }

  return ast;

  function walk(): Node {
    let token = tokens[current];
    switch (token.type) {
      case 'StartTag': {
        const tag = token.value as string;

        if (isValidateTag(tag)) {
          const node = {
            type: tag,
            children: [] as Node[],
          } as NodeWithChildren;

          token = tokens[++current];

          while (token.type !== 'EndTag') {
            node.children.push(walk());
            token = tokens[current];
          }

          current++;
          return node;
        } else {
          throw new Error('what happened');
        }
      }

      case 'SelfClosingTag': {
        const tag = token.value as string;
        if (isValidateTag(tag)) {
          const node = {
            type: tag,
          } as NodeWithoutChildren;
          current++;

          return node;
        } else {
          throw new Error('what happened');
        }
      }

      case 'Text': {
        current++;
        return {
          type: 'Text',
          value: token.value,
        } as TextNode;
      }

      case 'EndTag': {
        throw new Error('what happened');
      }

      default: {
        return neverThrow(token);
      }
    }
  }
}

const supportedTags = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'ul',
  'ol',
  'li',
  'img',
  'a',
  'b',
  'i',
  'code',
  'div',
  'span',
] as const;
function isValidateTag(tag: string): tag is (typeof supportedTags)[number] {
  if (!supportedTags.includes(tag as any)) {
    throw new Error('不支持标签：' + tag);
  }
  return true;
}
