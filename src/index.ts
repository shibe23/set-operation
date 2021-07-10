/**
 * オブジェクトが格納された配列の差集合を求める
 * @returns Object[]
 */
export function difference<T>(base: T[], target: T[], key: string) {
  const arr: T[] = [];
  const baseKeys = extractKeys(base, key);
  target.forEach((x) => {
    // 配列の値が、あらかじめObject抽出したObjectのkeyに格納されているか確認する
    // @ts-expect-error: result[`${x[key]}`]型について直す
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    if (!baseKeys[`${x[key]}`]) {
      arr.push(x);
    }
  });
  return arr;
}

function extractKeys<T>(base: T[], key: string) {
  const result: Record<string, unknown> = {};
  // @ts-expect-error: result[`${x[key]}`]型について直す
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  base.forEach((x: T) => (result[`${x[key]}`] = true));
  return result;
}
