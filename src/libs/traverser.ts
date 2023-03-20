import { Node, Visitors } from '../types';

export function traverser(ast: Node, visitors: Visitors) {
  traverseNode(ast, null);
  function traverseNode(node: Node, parent: Node | null) {
    const visitor = visitors[node.type];

    visitor?.enter?.(node as any, parent as any);

    switch (node.type) {
      case 'Program': {
        traverseArray(node.children, node);
        break;
      }

      case 'img':
      case 'Text': {
        break;
      }

      default: {
        traverseArray(node.children, node);
      }
    }

    visitor?.exit?.(node as any, parent as any);
  }

  function traverseArray(children: Node[], parent: Node) {
    children.forEach(node => {
      traverseNode(node, parent);
    });
  }
}

// TODO
// html -> markdown
export function transform(ast: Node) {
  const newAst = {
    type: 'Program',
    body: [],
  };
  (ast as any)._context = newAst.body;

  traverser(ast, {
    h1: {
      enter(node, parent) {
        const expression = {
          type: 'h1',
          children: [],
        };

        (node as any)._context = expression.children;
        (parent as any)._context.push(expression);
      },
    },
    Text: {
      enter(node, parent) {
        (parent as any)._context.push({
          type: 'Text',
          value: node.value,
        });
      },
    },
  });

  return newAst;
}
