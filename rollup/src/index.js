import cloneDeep from "lodash.clonedeep";

const obj = () => {
  const cloneObj = cloneDeep({ foo: 1, bar: "a", baz: true });
  console.log(JSON.stringify(cloneObj));
};

export { obj };