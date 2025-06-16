let num = [5, 4, 3, 1]

num.push(2)
num.sort()

console.log(num)
console.log(num.length)
console.log(num[0])

/*
for (let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}
*/

for (let pos in num) {
    console.log(num[pos])
}

let pos = num.indexOf(4)

console.log(pos)