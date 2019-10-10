const broke = (x) => x > 100 ? 100 : x < 0 ? 0 : x
const woke = (x) => Math.min(100, Math.max(0, x))
// by simpling this down to a single codepath, we make it faster!
const bespoke = (x) => [0, x][+(!!((x/0)+(1/0)))] - ((x % 100) * ((x / 100)>>0))

// yes, +(true) is 1 and +(false) is 0
// NaN is false, as is 0
// Inf - Inf is NaN, -Inf - Inf is -Inf and vice-versa

const vals = [ -10, -1, 0, 1, 10, 25, 55, 99, 100, 110 ]

var bstart = process.hrtime()
for(const val of vals) {
        console.log(`${val} => ${broke(val)}`)
}
var bend = process.hrtime(bstart)

var wstart = process.hrtime()
for(const val of vals) {
        console.log(`${val} => ${woke(val)}`)
}
var wend = process.hrtime(wstart)

var tstart = process.hrtime()
for(const val of vals) {
        console.log(`${val} => ${bespoke(val)}`)
}
var tend = process.hrtime(tstart)

console.log("broke: %ds %dms", bend[0], bend[1]/1000000)
console.log("woke: %ds %dms", wend[0], wend[1]/1000000)
console.log("bespoke: %ds %dms", tend[0], tend[1]/1000000)

// oops
console.log("oops: bespoke(%d) = %d", 250, bespoke(250))
