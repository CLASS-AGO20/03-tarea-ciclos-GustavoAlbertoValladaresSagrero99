export default class App {

    sumatoriaSerieUno(numero) {
        let suma = 1;
        for (let i = 2; i <= numero; i++) {
          suma = suma + 1 / i;
        }
        return suma;
      }


      sumatoriaSerieDos(numero) {
        let suma = 1;
    
        let i = 2;
    
        while(i <= numero)
        {
          if (i % 2 === 0) {
            suma = suma + 1 / i;
          } else {
            suma = suma - 1 / i;
          }
            i++;
        }
    
        return suma;
      }

      esPrimo(numero)
      {
          let i = 0;

        do
        {
            if (numero%2 !=0)
            {
                return true;
            }else{
                return false;
            }

            i++;
        }while(i<=numero);

      }

      obtenerMultiplos(inicio, fin)
      {

        let cadena = "";

          do
          {
            if(inicio%3==0)
            {
                cadena +=inicio;
            }

            inicio++;
          }while(inicio<=fin);

          return cadena;
      }

}



let app = new App();

console.log(app.sumatoriaSerieUno(10));
console.log(app.sumatoriaSerieDos(12));
console.log(app.esPrimo(43));
console.log(app.obtenerMultiplos(3,21));