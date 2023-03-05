let arr = [1, 5, 3, 9, 0, 2, 5 ];

let Same = true;
for (let i = 0; i < arr.length - 1; i++){
    for (let j = i + 1; j < arr.length; j++){
        if (typeof(arr[i]) !== typeof(arr[j])){
            Same = false;
        }
    }
}

if (Same) {
    console.log("True, the same");
} else {
    console.log("False, isn't the same");
}