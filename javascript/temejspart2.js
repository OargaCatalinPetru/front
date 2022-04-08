// 1. O functie "getDigits" care primeste un sir de caractere si returneaza cifrele din sirul respectiv


function getDigits(string) {
  let numArray = string.split('').map(item => {
    if (typeof +item === 'number' && !isNaN(+item)) return +item
  })
  return numArray.join('')
}

    

    

// 2. O functie "getLetters" care primeste un sir de caractere si returneaza doar literele din sirul respectiv

function getLetters(a) {
  let b = '';
  for (let i = 0; i < a.length; i++) {
      if (a[i] >= 'A' && a[i] <= 'z' && a[i] !== '^') b += a[i];
  }
  return b;
}



// 3. O functie "getFirst5Letters" care primeste un sir de caractere si returneaza primele 5 litere(daca exista)

function getFirst5Letters(a) {
  let b = '';
  for (let i = 0; i < a.length; i++) {
      if (a[i] >= 'A' && a[i] <= 'z' && a[i] !== '^') b += a[i];
  }
  return b.slice(0,5);
}




// 4. O functie "concatenate" care primeste o lista de siruri de caractere si returneaza sirurile concatenate

function concatenate(arr){
    let result= [];
    for (let i = 0; i<arr.length; i++){
      result += arr[i];
    }
    return result;
}

// 5. O functie "getAllDigits" care primeste o lista de siruri de caractere si returneaza cifrele din toate sirurile

function getAllDigits(a) {
  let b = "";
  for (let i = 0; i < a.length; i++) {
      if (a[i] >= '0' && a[i] <= '9') b += a[i];
  }
  return b;
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
    for (let i = num-1; i >= 1; i--){
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
      let t = y;
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
      let t = y;
      y = x % y;
      x = t;
    }
    return x;
  }


//10.  Returneaza un array care sa contina toti divizorii unui numar (ex pentru 64: trebuie sa returneze [2,4,8,16,32]) ("divizori")

function divizori(integer) {

  let result = [];
  for(let i = 0; i < integer; i++) {
    if(i !== 1 && i !== integer && integer % i == 0) {
      result.push(i)
    }
  }
   return result;
  };
        




//11. O functie care verifica daca un numar este palindrom (ex: 121, 1234321) ("palindrom")
const palindrom = (number) => {
  const string = number.toString();
  for (let i = 0, j = string.length - 1; i < j; ++i, --j) {
  if (string[i] !== string[j]) {
        return false;
      }
  }
  return true;
};

//12.  O functie care sorteaza numerele pare dintr-un sir de numere primit ca parametru. ("sort")


function compareNumbers(a, b) {
  return a - b;
}

function sort(a){
  let ar = [];  
  for (let i = 0; i < a.length; i++)
  {

    if((a[i]%2)==0)
    ar.push(a[i]);  
    ar.sort(compareNumbers);

  }
return ar;
}
  


//13.  O functie care primeste ca parametru un array de numere. Aceasta sorteaza ascendent numerele pare si descendent numerele impare, in cadrul aceluiasi array primit ca parameru. ("sortAscDesc")
function compareNumbers1(a, b) {
  return a - b;
}
function compareNumbers2(a, b) {
  return b - a;
}

function sortAscDesc(a){
  let evens = [];  
  let odds = [];
  for (let i = 0; i < a.length; i++)
  {
    if((a[i]%2)==0){
    evens.push(a[i]);  
    evens.sort(compareNumbers1);
  }
  else {
    odds.push(a[i]);
    odds.sort(compareNumbers2);
  }
  }
return evens.concat(odds);
}
  

//14.  O functie care primeste 2 parametri(un array si un numar). Folosind binary search verificati daca numarul primit ca parametru se gaseste in array. ("binarySearch")
function binarySearch(arr, a) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
  if (arr[i] == a)
   return true;
  }
  return false;
 }
//15.  O functie care implementeaza binary search pentru a verifica daca un numar se regaseste intr-un array. Dupa ce se termina executia functiei trebuie sa returnati de cate ori s-a apelat functia recursiv ("countBinarySearch")

function countBinarySearch(array, element) {
    let startIndex = 0;
    let endIndex = array.length - 1;
    let count = 0;
    let occurrence = 0;

    const result = {}

   while(startIndex <= endIndex){
        let middle = Math.floor((startIndex + endIndex)/2); 
            let guessElement = array[middle];
            count++;
        if(guessElement === element){
                occurrence++;

          while(startIndex <= endIndex){

              if(guessElement > element){
                  endIndex = middle - 1;
                  occurrence++;
                  break;

              } else {
                  startIndex = middle + 1;
                  occurrence++;
                  break;
              } 
          } 

        } else if (guessElement > element) {
                endIndex = middle - 1;

        } else {
                startIndex = middle + 1;
        }
    }
        result.occurrence = occurrence;
        result.count = count;
        return result;
} 