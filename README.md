# set-operation
Lightweight Set Operation Library for Objects in Array.

# Usage

```js
const a = [{name: "Jack", age: 10}, {name: "Tom", age: 38}];
const b = [{name: "Bob", age: 23}, {name: "Tom", age: 38}, {name: "Nancy", age: 29}];
```

## diffence()

```typescript
difference(a, b, "name")

// [{name: "Bob",age: 23}, {name: "Nancy", age: 29}];
```