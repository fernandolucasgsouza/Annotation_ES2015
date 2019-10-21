
//Antes ES2015
let dobro = function (a) {
   return a * 2;
}

let saudacao = function () {
   return 'Olá';
}

//Depois ES2015
let dobro2 = (a) => {
   return a * 2;
}
console.log(dobro2(5));

let dobro3 = a => a * 2; // return implícito
console.log(dobro3(5));

let saudacao2 = () => 'Olá 2';
console.log(saudacao2());

let saudacao3 = _ => 'Olá 3';
console.log(saudacao3());