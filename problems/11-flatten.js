/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// function flatten(items) {
//   const flat = [];

//   items.forEach(item => {
//     if (Array.isArray(item)) {
//       flat.push(...flatten(item));
//     } else {
//       flat.push(item);
//     }
//   });

//   return flat;
// }


function flatten(arr) {
  return arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flatten(cur) : cur), []);
};
  
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
  