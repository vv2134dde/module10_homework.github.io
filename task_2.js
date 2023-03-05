let num;

// let num = 5; - number
// let num = "5"; - string

if ((typeof(num) == 'number')&&(!isNaN(num))) {
    console.log("X - Number");
} else if (typeof(num) == 'string') {
    console.log("X - String");
} else if (typeof(num) == 'boolean') {
    console.log("X - Boolean");
} else {
    console.log("Тип X не определён");
}