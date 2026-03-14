let n = 5;

for (let i = n; i >= 1; i--) {
    let row = "";

    // Left side numbers
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }

    // Right side numbers
    for (let j = i - 1; j >= 1; j--) {
        row += j + " ";
    }

    console.log(row);
}
