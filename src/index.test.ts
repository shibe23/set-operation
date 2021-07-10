import { difference } from "./index";

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

const expectDifference = [
  {
    name: "Bob",
    age: 23,
  },
  {
    name: "Nancy",
    age: 29,
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

test("ネストしたオブジェクトでは空配列を返す", () => {
  expect(difference<MockErrorUser>(errorObjA, errorObjB, "name")).toEqual([]);
});

test("差集合を求める", () => {
  expect(difference<MockUser>(a, b, "name")).toEqual(expectDifference);
});