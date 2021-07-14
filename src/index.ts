/**
 * オブジェクトが格納された配列の差集合を求める
 * @param {Array.<T>} base
 * @param {Array.<T>} target
 * @param {string} key
 * @returns {Array.<T>}
 */
export function difference<T>(base: T[], target: T[], key: string): T[] {
  const result: T[] = [];
  const baseKeys = extractKeys<T>(base, key);
  target.forEach((x: Record<string, any>) => {
    if (typeof x[key] !== "string" && typeof x[key] !== "number") {
      return;
    }

    // ObjectのValueをKeyとして抽出したものとマッチするか確認する
    if (!baseKeys[String(x[key])]) {
      result.push(x as T);
    }
  });
  return result;
}

/**
 * オブジェクトが格納された配列の積集合を求める
 * @param {Array.<T>} base
 * @param {Array.<T>} target
 * @param {string} key
 * @returns {Array.<T>}
 */
export function intersection<T>(base: T[], target: T[], key: string): T[] {
  const result: T[] = [];
  const baseKeys = extractKeys<T>(base, key);
  target.forEach((x: Record<string, any>) => {
    if (typeof x[key] !== "string" && typeof x[key] !== "number") {
      return;
    }

    // ObjectのValueをKeyとして抽出したものとマッチするか確認する
    if (baseKeys[String(x[key])]) {
      result.push(x as T);
    }
  });
  return result;
}

/**
 * オブジェクトから指定したvalueを抽出し、keyに変換する
 * @param {Array.<T>} base
 * @param {string} key
 * @returns {Object.<string, unknown>>}
 */
function extractKeys<T>(base: T[], key: string) {
  const lookupRecord: Record<string, unknown> = {};
  base.forEach((x: Record<string, any>) => {
    if (typeof x[key] !== "string" && typeof x[key] !== "number") {
      return;
    }
    lookupRecord[`${String(x[key])}`] = true;
  });
  return lookupRecord;
}
