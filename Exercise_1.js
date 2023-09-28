let x = prompt('Enter your value');
x = +x;
if(!isNaN(x)){
    if (x%2 === 0) console.log("It is Even");
    else if (x%2 === 1) console.log("it is Odd");
} else console.log("Упс, кажется, вы ошиблись");