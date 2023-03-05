let myMap = new Map();
myMap.set("apple", "green");
myMap.set("strawberry", "red");
myMap.set("lemon", "yellow");


for (let Map of myMap.keys()){
    console.log(myMap + " - " + myMap.get(Map));
}