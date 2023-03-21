import { tokenizer } from '../src';

describe('testing for tokenizer', () => {
  it('normal test', () => {
    const inputString = `<h1>hello</h1><div><b>加粗</b><i>斜体</i><span>文本</span></div>`;
    const expectOutput = [
      { type: 'StartTag', value: 'h1', properties: {} },
      { type: 'Text', value: 'hello' },
      { type: 'EndTag', value: 'h1' },
      { type: 'StartTag', value: 'div', properties: {} },
      { type: 'StartTag', value: 'b', properties: {} },
      { type: 'Text', value: '加粗' },
      { type: 'EndTag', value: 'b' },
      { type: 'StartTag', value: 'i', properties: {} },
      { type: 'Text', value: '斜体' },
      { type: 'EndTag', value: 'i' },
      { type: 'StartTag', value: 'span', properties: {} },
      { type: 'Text', value: '文本' },
      { type: 'EndTag', value: 'span' },
      { type: 'EndTag', value: 'div' },
    ];
    const token = tokenizer(inputString);
    expect(token).toEqual(expectOutput);
  });

  it('testing for element properties', () => {
    const inputString = `<div id="test"></div>`;
    const expectOutput = [
      {
        type: 'StartTag',
        value: 'div id="test"',
        properties: { id: 'test' },
      },
      { type: 'EndTag', value: 'div' },
    ];
    const token = tokenizer(inputString);
    expect(token).toEqual(expectOutput);
  });

  it('testing for self closing tag, i.e <img />', () => {
    const inputString = `<img src="example.png" alt="picture" />`;
    const expectOutput = [
      {
        type: 'SelfClosingTag',
        value: 'img',
        properties: { src: 'example.png', alt: 'picture' },
      },
    ];
    const token = tokenizer(inputString);
    expect(token).toEqual(expectOutput);
  });
});
