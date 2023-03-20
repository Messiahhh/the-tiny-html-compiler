import { tokenizer } from '../src';

describe('testing for tokenizer', () => {
  it('test3', () => {
    const inputString = `<h1>hello</h1><div><b>加粗</b><i>斜体</i><span>文本</span></div>`;
    const expectOutput = [
      { type: 'StartTag', value: 'h1' },
      { type: 'Text', value: 'hello' },
      { type: 'EndTag', value: 'h1' },
      { type: 'StartTag', value: 'div' },
      { type: 'StartTag', value: 'b' },
      { type: 'Text', value: '加粗' },
      { type: 'EndTag', value: 'b' },
      { type: 'StartTag', value: 'i' },
      { type: 'Text', value: '斜体' },
      { type: 'EndTag', value: 'i' },
      { type: 'StartTag', value: 'span' },
      { type: 'Text', value: '文本' },
      { type: 'EndTag', value: 'span' },
      { type: 'EndTag', value: 'div' },
    ];
    const token = tokenizer(inputString);
    expect(token).toEqual(expectOutput);
  });
});
