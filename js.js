// function myfunction() {
//     alert("Your sign up has been register successfully!");
//     window.location.href = "index.html"; 
// }
 // Function to generate a random integer between 0 and 9
 function getRandomInt() {
    return Math.floor(Math.random() * 10);
}

// Get the elements to display random numbers
let a = document.getElementById('p1');
let b = document.getElementById('p2');
let c = document.getElementById('p3');

// Display random numbers in the elements
a.innerHTML = getRandomInt();
b.innerHTML = getRandomInt();
c.innerHTML = getRandomInt();

// Concatenate the random numbers into a string for comparison
let c3 = String(a.innerHTML) + String(b.innerHTML) + String(c.innerHTML);

// Function to check if the input matches the concatenated random numbers
function myfunction() {
    // Get the value from the input field
    let int = document.getElementById('int').value;

    // Compare the input value with the concatenated random numbers (c3)
    if (int === c3) {
        alert(" Capture Validation and Registration is Success Go to Home Page");
        window.location.href = "index.html";
    } else {
        alert(" Capture is Not match Your Registration Failed");
        document.getElementById('int').value = '';
    }
}
