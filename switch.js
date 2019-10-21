
function imprimirNota(value) {

   switch (Math.floor(value)) {
      case 10: case 9:
         console.log('Nota de honra!');
         break;
      case 8: case 7:
         console.log('Aprovado');
         break;
      case 6: case 5: case 4:
         console.log('Recuperação');
         break;
      case 3: case 2: case 1: case 0:
         console.log('Reprovado');
         break;
      default:
         console.log('Nota inválida');
         break;
   }
}

imprimirNota(10);