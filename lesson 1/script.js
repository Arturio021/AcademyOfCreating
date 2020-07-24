var budget = prompt(`Enter your budget`);
var nameYourShop = prompt("Enter a name your Shop");
var arr = [];
for (var i = 0; i < 3; i++) {
    arr[i] = prompt("Enter goods");
}
var emploers = {
    workerOne: "Max",
    workerTwo: "Victor",
    workerThree: "Jhon",
};
console.log(emploers);

function allAboutShop() {
    var mainList = {
        budget,
        nameYourShop,
        arr,
        emploers,
    };
    console.log(mainList);
}

allAboutShop();

var btn = document.querySelector(".btn");
btn.addEventListener('click', function budgetForOneDa() {
    alert(budget / 30)

})

budgetForOneDa()