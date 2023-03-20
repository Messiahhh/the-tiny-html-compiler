import { Token } from '../types';

export function tokenizer(str: string) {
  let current = 0;
  const tokens: Token[] = [];
  while (current < str.length) {
    let char = str[current];

    switch (char) {
      case '<': {
        let value = '';
        const status = {
          /**
           * 自闭合标签，如<a />, <img />, <br />
           */
          isSelfClosing: false,
          /**
           * 区分开始标签和结束标签，如<div>和</div>
           */
          isEndMark: false,
        };

        char = str[++current];

        while (char !== '>') {
          if (/\s/.test(char)) {
            char = str[++current];
            continue;
          } else if (char === '/') {
            const nextChar = str[current + 1];
            if (nextChar === '>') {
              status.isSelfClosing = true;
            } else {
              status.isEndMark = true;
            }

            char = str[++current];
            continue;
          } else {
            value += char;
            char = str[++current];
          }
        }

        if (status.isSelfClosing) {
          tokens.push({
            type: 'SelfClosingTag',
            value,
          });
        } else if (!status.isEndMark) {
          tokens.push({
            type: 'StartTag',
            value,
          });
        } else {
          tokens.push({
            type: 'EndTag',
            value,
          });
        }
        char = str[++current];
        break;
      }

      default: {
        let value = '';
        value += char;
        char = str[++current];

        while (char && char !== '<') {
          value += char;
          char = str[++current];
        }

        tokens.push({
          type: 'Text',
          value: value.replace(/\s\s+/, ' '), // HTML多个空格转化为一个
        });
        continue;
      }
    }
  }

  return tokens;
}
