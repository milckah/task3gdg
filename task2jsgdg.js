function startProgram() {

    let evenCount = 0;
    let oddCount = 0;
    let sum = 0;

    for (let i = 5; i <= 15; i++) {

        console.log("Number: " + i);

        if (i % 2 === 0) {
            console.log("Even");
            evenCount++;
        } else {
            console.log("Odd");
            oddCount++;
        }

        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Divisible by both 3 and 5");
        } else if (i % 3 === 0) {
            console.log("Divisible by 3");
        } else if (i % 5 === 0) {
            console.log("Divisible by 5");
        } else {
            console.log("Not divisible by 3 or 5");
        }

        sum += i;
    }

    console.log("Total even numbers: " + evenCount);
    console.log("Total odd numbers: " + oddCount);
    console.log("Sum of numbers: " + sum);

    alert("Check the console for results!");
}
