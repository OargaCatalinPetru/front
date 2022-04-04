//1. O functie "equals" care primeste 2 parametrii si returneaza daca cei 2 parametrii sunt egali, strict
"use strict";
function  equals(a, b){
    if (a === b){
        return true;
    }
    else{
        return false;
    }
}
console.log(equals(1,1));


// 2. O functie "compare" care primeste 2 parametrii si returneaza -1 daca primul e mai mic ca al doilea, 0 daca sunt egale si 1 daca primul e mai mare ca al doilea
function compare(a, b){
    if (a < b){
        return -1;
    }
   if (a===b){
        return 0;
    }
    if (a>b){
        return 1;
    }

}
console.log(compare(1,2));

// 3. O functie "max" care primeste 2 parametrii si returneaza maximul dintre cele 2

function max(a, b){
    if (a>b){
        return a;
    } else{
        return b;
    }
    
}
console.log(max(2,15));

// 4. O functie "min" care primeste 2 parametrii si returneaza minimul dintre cele 2

function min(a, b){
    if (a<b){
        return a;
    } (b<a)
    {
        return b;
    }
}
    

// 5. O functie "suma" care primeste 1 parametru, numar intreg si returneaza suma primelor N numere naturale pozitive (exemplu: daca N este 3, trebuie sa returneze 6)


    function suma(N) {
        var total = 0;
          for(var i = 1; i <= N; i++){
            total += i;
          }
          return total;
      }

// 6. O functie "prim" care primeste 1 parametru si returneaza true/false daca N este numar prim sau nu (restul impartirii la 1 si la N ==0)
 
function prim(N){
        var prime = N != 1;
        for (let i = 2; i * i <= N; i++)
        if (N % i === 0)
        return false;
        return N > 1;
        }
    

// 7. O functie "sumaPrime" care primeste 1 parametru si returneaza suma primelor N numere prime (pentru N=5 trebuie sa returneze 2+3+5+7+11=28)

function sumaPrime(num) {
  
    var prime = []; 
    for(var i = 2; i <= num; i++) {
      if(isPrime(i)) {
          prime.push(i);
      }      
    }
  
    function isPrime(num2) {
      for (var j = 2; j < num2; j++) {
        if (num2% j === 0) {
          return false;
        }
      }
      return true;
    }  

  return prime;
}
  
 


  // 8. O functie "invers" care primeste un parametru de tip numar si intoarce inversul acestuia (ca numar) (123 => 321)

  function invers(num){
    return (
        parseFloat(
          num 
          .toString()
            .split('')
            .reverse()
            .join('')
        ) * Math.sign(num)
    )
        }

 // 9. O functie "produsImpare" care primeste 1 parametru si returneaza produsul primelor N numere impare pozitive (pentru N=5; returneaza 1*3*5*7*9=945)

 function produsImpare(num){
        let produsOdd = 1;
          for(var i = 1; i <= 2*num-1; i+=2){
         
            produsOdd *= i;
        
      }
      return produsOdd;
    }                    

// 10. O functie "contains" care primeste 2 parametri(arr - array de nr intregi si x - numar) si verifica daca x exista in array (rezultatul este true/false)

function contains(_array, x){
    if(_array.includes(x)){
        return true;
    }else return false;
}

// 11. O functie "maxArray" care primeste un array si returneaza valoarea maxima (ar trebui sa functioneze si pentru numere si pentru stringuri)

function maxArray(arr) {
    var len = arr.length, max = -Infinity;
    while (len--) {
      if (Number(arr[len]) > max) {
        max = Number(arr[len]);
      }
    }
    return max;
  };


// 12. O functie "sumMinMax" care primeste un array de numere si returneaza suma dintre valoare maxima si valoare minima


function maxArray(arr){
    return Math.max.apply(null, arr);
}
function minArray(arr){
    return Math.min.apply(null, arr);
}

function sumMinMax(arr){
    let result = maxArray(arr) + minArray(arr);
    return result;
}



// 13. O functie "hasDuplicates" care primeste un array si returneaza daca exista duplicate intr-un array primit ca parametru (true/false)

function hasDuplicates(arr) {
    if (arr.some(x => arr.indexOf(x) !== arr.lastIndexOf(x))){
        return true;
    }else 
        return false;
}
console.log(hasDuplicates(([1,2,3,4,5])));
 

// 14. O functie "produsPozitive" care primeste un array si returneaza produsul numerelor pozitive intr-un array primit ca parametru
function produsPozitive(arr) {
    let total = 1;
    for (var i = 0; i< arr.length; i++){
        if ((arr[i]) > 0){
        total = total * arr[i];
    }}
    return total;
    }


// 15. O functie "palindrom" care primeste un string si returneaza daca este palindrom (inversul == originalul, ex: "1234321", "55", "787") (true/false)

function palindrom(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }


