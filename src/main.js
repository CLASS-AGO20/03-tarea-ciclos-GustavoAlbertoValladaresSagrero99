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
      
      obtenerImpares(numero1, numero2)
      {

        let impares = "";

        
        if(numero1>numero2)
        {
          for(let i= numero1; i >= numero2; i--)
          {
            if (i%2 != 0)
            {
              impares+=i+",";
            }
          }
        }else if (numero2>numero1)
        {
          for(let i= numero2; i >= numero1; i--)
          {
            if (i%2 != 0)
            {
              impares+=i+",";
            }
          }         
        }else{
          if(numero1%2 !=0 && numero2%2 !=0)
          {
            impares+=numero1;
          }
        }

        if (impares.endsWith(','))
        {
          impares = impares.slice(0,-1);
        }

        return impares;

      }

}



let app = new App();

console.log(app.sumatoriaSerieUno(10));
console.log(app.sumatoriaSerieDos(12));
console.log(app.esPrimo(9));
console.log(app.obtenerMultiplos(3,21));
console.log(app.obtenerImpares(2,10));
console.log(app.obtenerImpares(11,1));