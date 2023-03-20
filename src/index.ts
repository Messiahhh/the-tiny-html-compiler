import { tokenizer } from './libs/tokenizer';
import { parser } from './libs/parser';
import { traverser, transform } from './libs/traverser';
import { generator } from './libs/generator';

function compiler(input: string): string {
  const tokens = tokenizer(input);
  const ast = parser(tokens);
  // implement transform later
  const output = generator(ast);
  return output;
}

export { tokenizer, parser, traverser, transform, generator, compiler };
