/** Solution #1 */

module.exports = function reverse (n) {
    return Number(String(Math.abs(n)).split('').reverse().join(''));
};

/** Solution #2 */

module.exports = function reverse2 (n) {
    const numberString = String(Math.abs(n));
    const tepmArray = [];
    for (let i = numberString.length - 1; i >= 0; i--) {
        tepmArray.push(numberString[i])
    }
    return Number(tepmArray.join(''));
};
