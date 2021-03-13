
exports.min = function min (array) {
  if (typeof(array) == "object" && array.length != 0) {
    return Math.min(...array);
  }
  return 0;
}

exports.max = function max (array) {
  if (typeof(array) == "object" && array.length != 0) {
    return Math.max(...array);
  } 
  return 0;
}

exports.avg = function avg (array) {
  if (typeof(array) == "object" && array.length != 0) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum/array.length;
}
return 0;
}
