import { compiler } from '../src';
describe('testing for the compiler', () => {
  it('test1', () => {
    const inputString = `
      <h1>一级标题</h1>
      <h2>二级标题</h2>
      <div>hello world, i"m <i>akara</i>.   <span>so who you are?</span></div>
      <h3><b>加粗三级标题</b></h3>
      <code>console.log("hello world")</code>
    `;

    const expectOutput = ` \n# 一级标题\n \n## 二级标题\n \nhello world, i"m *akara*. so who you are?\n \n### **加粗三级标题**\n \`console.log("hello world")\` `;
    const output = compiler(inputString);
    expect(output).toEqual(expectOutput);
  });
});
