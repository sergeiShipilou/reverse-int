module.exports = function reverse (n) {
  if (n < 0) return n.toString().split('').slice(1, n.length).reverse().join('');
  else return n.toString().split('').reverse().join('');
}

