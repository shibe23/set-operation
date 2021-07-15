# set-operations
Lightweight Set Operation Library for Objects in Array.

# install

```
npm install @shibe23/set-operations
```

# Usage

```js
const a = [{name: "Jack", age: 10}, {name: "Tom", age: 38}];
const b = [{name: "Bob", age: 23}, {name: "Tom", age: 38}, {name: "Nancy", age: 29}];
```

## difference()

```typescript
difference(a, b, "name")

// [{name: "Bob",age: 23}, {name: "Nancy", age: 29}];
```

## intersection()

```typescript
intersection(a, b, "name")

// [{name: "Tom",age: 38}];
```
