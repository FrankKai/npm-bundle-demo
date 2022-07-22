// test case
const kleur = require("kleur");
const success = (tip) => kleur.green(tip);

const muskClone = require("../dist/muskClone.cjs");

const cases = [
  ["foo", 1, true],
  { foo: "str", bar: 1, val: true },
  [
    { foo: "str", bar: 1, val: true },
    { foo: "str1", bar: 2, val: false },
  ],
  [{ foo: "str", bar: 1, val: true, nest: { baz: 2 } }],
  [{ foo: "str", bar: 1, val: true, nest: [{ baz: 2 }] }],
];

const res = muskClone(cases);
const formatRes = success(JSON.stringify(res, null, 2));

console.log(formatRes);

// [
//   [
//     "foo-Qm9YTAJQMZcjMZP5BbAhj",
//     30,
//     true
//   ],
//   {
//     "foo": "str-LHjs6b5zFbGd0qsda1XLB",
//     "bar": 58,
//     "val": true
//   },
//   [
//     {
//       "foo": "str-79Kgb8qVMBum-cT-UMrYS",
//       "bar": 37,
//       "val": false
//     },
//     {
//       "foo": "str1-vXlbtP0MmjBx9iu0qT7WT",
//       "bar": 86,
//       "val": false
//     }
//   ],
//   [
//     {
//       "foo": "str-IV9t6Ejs1X4BYWDd86qGa",
//       "bar": 42,
//       "val": false,
//       "nest": {
//         "baz": 41
//       }
//     }
//   ],
//   [
//     {
//       "foo": "str-AAhboycvK6qRNPLoIgogQ",
//       "bar": 74,
//       "val": true,
//       "nest": [
//         {
//           "baz": 29
//         }
//       ]
//     }
//   ]
// ]
