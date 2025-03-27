let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

// Your code here
let array = []
for (let i=0; i < mix.length; i++) {
    const item = mix[i];
    const type = typeof item
    array.push(type)

}
console.log(array)