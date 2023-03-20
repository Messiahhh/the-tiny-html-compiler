import type { Node } from '../types';
import { neverThrow } from './utils';
// 直接根据原本ast进行生成
export function generator(node: Node): string {
  switch (node.type) {
    case 'Program': {
      return node.children.map(generator).join('');
    }

    case 'h1': {
      const level = ''.padStart(1, '#');
      return `\n${level} ${node.children.map(generator).join('')}\n`;
    }

    case 'h2': {
      const level = ''.padStart(2, '#');
      return `\n${level} ${node.children.map(generator).join('')}\n`;
    }

    case 'h3': {
      const level = ''.padStart(3, '#');
      return `\n${level} ${node.children.map(generator).join('')}\n`;
    }

    case 'h4': {
      const level = ''.padStart(4, '#');
      return `\n${level} ${node.children.map(generator).join('')}\n`;
    }

    case 'h5': {
      const level = ''.padStart(5, '#');
      return `\n${level} ${node.children.map(generator).join('')}\n`;
    }

    case 'h6': {
      const level = ''.padStart(6, '#');
      return `\n${level} ${node.children.map(generator).join('')}\n`;
    }

    case 'b': {
      return `**${node.children.map(generator).join('')}**`;
    }

    case 'i': {
      return `*${node.children.map(generator).join('')}*`;
    }

    case 'code': {
      return `\`${node.children.map(generator).join('')}\``;
    }

    // case 'ul': {
    //   return `\n- ${}`
    // }

    case 'div': {
      return `\n${node.children.map(generator).join('')}\n`;
    }
    case 'span': {
      return node.children.map(generator).join('');
    }

    case 'img': {
      return `![${node.alt || ''}](${node.src})`;
    }
    case 'Text': {
      return node.value;
    }

    default: {
      return neverThrow(node);
    }
  }
}
