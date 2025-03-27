let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

// Your code below
function deletePerson(thing) {
    let newpeople = people.filter((element) => element != thing)
    return newpeople}
    
console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
