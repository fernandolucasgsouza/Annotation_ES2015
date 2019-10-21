function soma() {
   let soma = 0
   for (const key in arguments) {
      soma += arguments[key]
   }
   console.log(`total: ${soma}`);
}
soma();           // output = total: 0
soma(5);          // output = total: 5
soma(2, 10);      // output = total: 12
soma(2, 10, 5);   // output = total: 17