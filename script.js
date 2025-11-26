let age = 20;

function displayAge() {
    console.log("Current Age:", age);
}

function changeAge() {
    age = 25;
    console.log("Updated Age inside function:", age);
}

displayAge();
changeAge();
displayAge();
