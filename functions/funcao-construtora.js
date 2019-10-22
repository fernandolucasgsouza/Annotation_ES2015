function Carro(velocidadeMaxima = 200, delta = 5) {

   //atributo privado
   let velocidadeAtual = 0;

   //metodo public
   this.acelerar = function () {
      if (velocidadeAtual + delta <= velocidadeMaxima) {
         velocidadeAtual += delta;
      } else {
         velocidadeAtual = velocidadeMaxima;
      }
   }

   //metodo publico
   this.getVelocidadeAtual = function () {
      console.log(velocidadeAtual);
      return velocidadeAtual;
   }

}

const uno = new Carro();
uno.acelerar();
uno.getVelocidadeAtual(); // output : 5

const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
ferrari.getVelocidadeAtual(); // output : 60