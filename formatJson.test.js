/**
 * @param {string} input - 整形されていないJSON文字列
 * @returns {string} 整形されたJSON文字列 (インデントはスペース2つ)
 */
function formatJson(input) {
    // この実装を削除して書き換えてください
    const parsedObject = JSON.parse(input);
    return JSON.stringify(parsedObject, null, 2);
}


// --- ここから下はテストコードです ---

describe('JSON Formatter Game (Fixed Indent)', () => {

    // ケース1: シンプルなオブジェクト
    test('シンプルなオブジェクトを整形できる', () => {
        const input = '{"name":"Taro","age":30,"active":true}';
        const expectedOutput = `{
  "name": "Taro",
  "age": 30,
  "active": true
}`;
        expect(formatJson(input)).toBe(expectedOutput);
    });

    // ケース2: シンプルな配列（なし）

    // ケース3: ネストしたオブジェクト
    test('ネストしたオブジェクトを整形できる', () => {
        const input = '{"user":{"id":101,"name":"Jiro"},"items":["pen","note"]}';
        const expectedOutput = `{
  "user": {
    "id": 101,
    "name": "Jiro"
  },
  "items": [
    "pen",
    "note"
  ]
}`;
        expect(formatJson(input)).toBe(expectedOutput);
    });

    // ケース4: ネストした配列(なし)

    // ケース5: 空のオブジェクトと配列
    test('空のオブジェクトと配列を正しく扱う', () => {
        const input = '{"emptyObj":{},"emptyArray":[]}';
        const expectedOutput = `{
  "emptyObj": {},
  "emptyArray": []
}`;
        expect(formatJson(input)).toBe(expectedOutput);
    });

    // ケース6: 深くネストしたオブジェクト（追加ケース）
    test('3階層以上ネストしたオブジェクトを整形できる', () => {
        const input = '{"id":"abc","data":{"type":"user","details":{"name":"Saburo","tags":["A","B"],"address":{"city":"Tokyo","zip":null}}},"status":"active"}';
        const expectedOutput = `{
  "id": "abc",
  "data": {
    "type": "user",
    "details": {
      "name": "Saburo",
      "tags": [
        "A",
        "B"
      ],
      "address": {
        "city": "Tokyo",
        "zip": null
      }
    }
  },
  "status": "active"
}`;
        expect(formatJson(input)).toBe(expectedOutput);
    });
});
