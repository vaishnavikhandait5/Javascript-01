let n = 5;

for (let i = n; i >= 1; i--) {
    let row = "";

    if (i == 5) {
        row = "1 4 6 4 1";
    } 
    else if (i == 4) {
        row = "1 3 3 1";
    } 
    else if (i == 3) {
        row = "1 2 1";
    } 
    else if (i == 2) {
        row = "1 1";
    } 
    else {
        row = "1";
    }

    console.log(row);
}
