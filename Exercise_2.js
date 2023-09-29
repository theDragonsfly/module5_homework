var x = !123;
var y = typeof x;
switch (y) {
    case "number":
        console.log("x - Number")
        break;
    case "boolean":
        console.log("x - Boolean")
        break;
    case "string":
        console.log("x - String")
        break;
    default:
        console.log("Тип x не определён")
}