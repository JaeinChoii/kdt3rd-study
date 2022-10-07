let no_1, no_2, no_3;

no_1 = 1;
no_2 = 2;
no_3 = 3;

console.log(`no_1 = ${no_1}`);
console.log(`no_2 = ${no_2}`);
console.log(`no_3 = ${no_3}`);


function add(x, y, z) {
    let add = x + y + z;
    alert(add);
    return (`no_1 + no_2 + no_3 = ${add}`);
}

console.log(add(no_1, no_2, no_3));

function sub(x, y) {
    let sub = x - y;
    alert(sub);
    return (`no_1 - no_2 = ${sub}`);
}

console.log(sub(no_1, no_2));

function devide(x, y) {
    let devide = x / y;
    alert(devide);
    return (`no_1 / no_2 = ${devide}`);
}

console.log(devide(no_1, no_2));


function mul(x, y) {
    let mul = x * y;
    alert(mul);
    return (`no_1 * no_2 = ${mul}`);
}

console.log(mul(no_1, no_2));