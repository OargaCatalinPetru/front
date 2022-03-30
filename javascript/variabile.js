let numar = 1;
let numarCuVirgula = 1.5;
let sirDeCaractere = "Ana are mere";
let sirDeCaractere2 = 'Ana are mere';
let boolTrue = true;
let boolFalse = false;

//matematice
numar = 1 + 2;
numar = numar * 2;
numarCuVirgula = 1 +2 * 3 - 7;
numar *= 2;
numar += 2;
numar -= 2;
numar /= 2;
numar++;
numar--;

numar = numar % 2; //restul impartirii;
numar = numar ** 3; //ridicare la putere;
numar = Math.pow(numar,3); //numar la puterea 3

//sir de caractere (string)

let sir = "A" + "B";
sir += "Mergee";

let nuFaceAsta = 3 + "A"; // "3A" face concatenare
let nuFaceAsta2 = 2+3+"A"; //5A
let nuFaceAsta3 = "b" + 2 + 3 + "A"; //"b23A"

//boolean
// true si false
// !true => false
// !false => true // ! = not semnul exclamarii inseamna e not true

//AND && true este 1 si false este 0 
// AND && este inmultire
let x = true && false;

// oR || este ca si adunarea

let y = true || false;

if(conditia){
    // in cazul in care conditia este adevarata
    //sa fie boolean
    // intre acolade se executa
}

else{
    //instructiun care se excuta daca conditia este falsa
}




//========================================================

let ghiciNumarul = 5;
let numarIncercari = 3;
let xx = "5";

let yy = xx + ghiciNumarul;

if(ghiciNumarul === 6){
    numarIncercari --;
}
else{
    alert("bravo ai ghicit")
}

// == browserul incearca sa faca acelasi tip de date si
// compara ca sir de caractere; se foloseste === pentru egal

// !== inseamna diferit 
// mai mare >
// mai mic <
// mai mic sau egal <=
// mai mare sau egal >=
//negare !

if(ghiciNumarul%2===0){
    alert("Numarul " + ghiciNumarul + " este par");
 `
 Ana are meree
 Mama spala vase
 Tata roade oase
 ${ghiciNumarul}
 `
}
else if(ghiciNumarul%3 === 1){
    alert(`Numarul ${ghiciNumarul} este par`);
}
else{
    alert(`Numarul ${ghiciNumarul} este par`);
}


let t = undefined; // atunci cand nu am asignat nimic
let t2 = null; // atunci cand vreau sa golesc var respectiva


// `` - template string literal - poti scrie pe mai multe linii

function getText(parametrii){
    // sparg oua
    // pun faina
    // le bat
    //

    return clatita;
}

function par(nr){
    let rezultat;
    if (nr % 2 ===0){
        return "par"
    }else{
        rezultat = "impar";
    }
    return rezultat;
}

function par(nr){
    let rezultat;
    if (nr % 2 ===0){
        return "par"
    }else{
        rezultat = "impar";
    }
    return rezultat;
}