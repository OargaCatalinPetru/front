// 1. O functie "getDigits" care primeste un sir de caractere si returneaza cifrele din sirul respectiv


function getDigits(car){
    let carDigits = car.replace(/\D/g, "");

    if (carDigits !== null){
    return carDigits;
    }else{
    return "No number in the string";
    }
}
    

// 2. O functie "getLetters" care primeste un sir de caractere si returneaza doar literele din sirul respectiv

function getLetters(x){
    let letters = x.replace(/[^a-zA-Z]+/g, '');

    if (letters !== null){
    return letters;
    }else{
    return "No letters in the string";
    }
}

// 3. O functie "getFirst5Letters" care primeste un sir de caractere si returneaza primele 5 litere(daca exista)

function getFirst5Letters(sirC){
    let letters = sirC.replace(/[^a-zA-Z]+/g, '');
    let fiveLet = letters.slice(0, 5);
    if (letters !== null){
        return fiveLet;
    }return "No letters in the string";
}


// 4. O functie "concatenate" care primeste o lista de siruri de caractere si returneaza sirurile concatenate

function concatenate([]){
    let concStr =  [...arguments].join('');
    let result = concStr.replace(/\,/g, '');
    return result;
}

// 5. O functie "getAllDigits" care primeste o lista de siruri de caractere si returneaza cifrele din toate sirurile

function getAllDigits([]){
    let digits = [].replace(/\D/g, "").join('');
    return digits
}



// 6. O functie "invertAllStrings" care primeste o lista de siruri de caractere si returneaza lista de siruri de caractere inversate

function invertAllStrings(arr) {
    for(let idx in arr) { 
      arr[idx] = arr[idx].split('').reverse().join('');
    }
    return arr;
 }

// 7. Calculeaza factorialul unui numar ("factorial")

function factorial(num){
    if (num === 0 || num === 1)
    return 1;
    for (var i = num-1; i >= 1; i--){
        num *= i;
    }
    return num;
}


//8.  Calculeaza cel mai mare divizor comun al 2 numere ("cmmdc")
function cmmdc(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
  
//9. Calculeaza cel mai mic multiplu comun al 2 numere ("cmmmc")

function cmmmc(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
     return false;
   return (!x || !y) ? 0 : Math.abs((x * y) / cmmdc(x, y));
 }

 function cmmdc(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }


//10.  Returneaza un array care sa contina toti divizorii unui numar (ex pentru 64: trebuie sa returneze [2,4,8,16,32]) ("divizori")

function divizori(num){
        let arr = [];
        for (let i=1; i <= num/2; i++){
           if(num % i === 0){
               arr.push(num);
        }else {
            return null;
        }
        return arr;
    }
  }



//11. O functie care verifica daca un numar este palindrom (ex: 121, 1234321) ("palindrom")
function palindrom(num) {
  var len = num.length;
  if (num.length > 3){
  for (var i = 0; i < len/2; i++) {
    if (num[i] !== num[len - 1 - i]) {
        return false;
    }
  }}
  return true;
 }

//12.  O functie care sorteaza numerele pare dintr-un sir de numere primit ca parametru. ("sort")
//13.  O functie care primeste ca parametru un array de numere. Aceasta sorteaza ascendent numerele pare si descendent numerele impare, in cadrul aceluiasi array primit ca parameru. ("sortAscDesc")
//14.  O functie care primeste 2 parametri(un array si un numar). Folosind binary search verificati daca numarul primit ca parametru se gaseste in array. ("binarySearch")
//15.  O functie care implementeaza binary search pentru a verifica daca un numar se regaseste intr-un array. Dupa ce se termina executia functiei trebuie sa returnati de cate ori s-a apelat functia recursiv ("countBinarySearch")