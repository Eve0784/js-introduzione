// console.log('Hello World!');

//boolean
true;
false;

//number
3;
3.14;
-34.4;
Infinity;  // numero piu grande
-Infinity;
NaN;  // not a number

//string
'ciao mondo';
"ciao mondo";
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, porro dicta dolor repellat amet culpa autem, perspiciatis quaerat debitis velit labore ducimus odit fuga quibusdam! Autem ipsam earum tempore similique.";
'a';
'';


//tipi nulli
undefined; // non definito non è stata mai riempita
null; //nullo

//-------------------OPERATORI LOGICI-------------------------------
//NOT (!)
true; //vero
!true; // falso

false; //falso
!false; // vero
// console.log(!false);

//AND (&&)
true && true; //true
true && false; // false
false && true; // false
false && false; //false
// console.log(true&& true);
// console.log(true&&false);


//OR (||)
true ||true; //true
true || false; // true
false|| true; // true
false|| false; //false

// console.log(true||true);
// console.log(true||false);
// console.log(false||false);

//OPERATORI MATEMATICI
// somma (+)
5+10; //15

// sottrazione (-)
-3.1;
90-10; //80

// moltiplicazione (*) 
6*8; //48

// divisione(/) 
9/3; //3

// potenza(**)
2**3; //8
4**2; //16

// modulo(%) resto della divisione intera
10 % 3; //1
5 % 3; //2
12 % 7; //5
24 % 11; //2

// somma (concatenazione) di stringhe (+)
"ciao" + "mamma"; // "ciaomamma"
"ciao " + "mamma"; // "ciao mamma"
"ciao" + "mamma"; // "ciao mamma"

//  OPERATORI DI CONFRONTO
// uguaglianza (== o ===)
5 === 5; //true
7 === 2; // false
7 === '7' //false
7 == '7' // true -- il doppio uguale converte prima di confrontare
true === true; //true
true === false; //false
"pippo" === "pippo"; //true
"pippo" === "pluto"; //false

// diverso (!= o !==)
 5 !== 3; //true
 5 !== 5; //false
 !(7===7); //false
7 !== '7' //true
7 != '7' // false

true !== true; //false
true !== false; //true

"pippo" !== "pippo"; //false
"pippo" !== "pluto"; //true

//maggiore e maggiore o uguale (> o >=)
//minore e minore o uguale (< o <=)
7 > 6; //true
7 > 8; //false
7 > 7; // false
7 >= 7; //true

// PARENTESI (())
// ((3+2)*2-(4-3));// 13
// (7 * 2 - 1);
// (14-1);
// 13;

//ESERCIZI
//1)
!(true||true); // false
//2)
!(true || ("pippo" ==="pluto")); //false
//3)
!((12 % 5) === 3); //true
//4)
("ciao mondo" !== ("ciao"+"  "+"mondo")) ===false; //false
