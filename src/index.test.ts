import { difference, intersection } from "./index";

interface MockUser {
  name: string;
  age: number;
}

const a: MockUser[] = [
  {
    name: "Jack",
    age: 10,
  },
  {
    name: "Tom",
    age: 38,
  },
];
const b: MockUser[] = [
  {
    name: "Bob",
    age: 23,
  },
  {
    name: "Tom",
    age: 38,
  },
  {
    name: "Nancy",
    age: 29,
  },
];

const c: MockUser[] = [
  {
    name: "Kate",
    age: 20,
  },
  {
    name: "Sum",
    age: 51,
  },
];

interface MockErrorUser {
  name: {
    a: string;
    b: string;
  };
  age: number;
}
const errorObjA = [
  {
    name: {
      a: "Bob",
      b: "Tom",
    },
    age: 23,
  },
];

const errorObjB = [
  {
    name: {
      a: "Bob",
      b: "Tom",
    },
    age: 23,
  },
];

describe("差集合", () => {
  test("該当しない場合はtargetをそのまま返す", () => {
    expect(difference<MockUser>(a, c, "name")).toEqual(c);
  });

  test("ネストしたオブジェクトでは空配列を返す", () => {
    expect(difference<MockErrorUser>(errorObjA, errorObjB, "name")).toEqual([]);
  });

  test("差集合を求める", () => {
    expect(difference<MockUser>(a, b, "name")).toEqual([
      {
        name: "Bob",
        age: 23,
      },
      {
        name: "Nancy",
        age: 29,
      },
    ]);
  });
});

describe("積集合", () => {
  test("該当しない場合は空配列を返す", () => {
    expect(intersection<MockUser>(a, c, "name")).toEqual([]);
  });

  test("ネストしたオブジェクトでは空配列を返す", () => {
    expect(intersection<MockErrorUser>(errorObjA, errorObjB, "name")).toEqual(
      []
    );
  });

  test("積集合を求める", () => {
    expect(intersection<MockUser>(a, b, "name")).toEqual([
      {
        name: "Tom",
        age: 38,
      },
    ]);
  });
});
