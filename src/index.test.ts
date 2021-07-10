import { difference } from "./index";

interface Itest {
  name: string;
  age: number;
}

const a: Itest[] = [
  {
    name: "Jack",
    age: 10,
  },
  {
    name: "Tom",
    age: 38,
  },
];

const b: Itest[] = [
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

const expectResult = [
  {
    name: "Bob",
    age: 23,
  },
  {
    name: "Nancy",
    age: 29,
  },
];

test("差集合を求める", () => {
  expect(difference<Itest>(a, b, "name")).toEqual(expectResult);
});
