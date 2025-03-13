const fruits = [
    {
        id: 1, 
        name: "Banán",
        fat: 0.33,
        fiber: 2.6,
        calory: 89,
        protein: 1.09,
        carbohydrate: 22.8
    },
    {
        id: 2, 
        name: "Alma",
        fat: 0.17,
        fiber: 1.3,
        calory: 52,	
        protein: 0.26,
        carbohydrate: 13.8
    },
    {
        id: 3, 
        name: "Narancs",	
        fat: 0.12,	
        fiber: 2,
        calory: 47, 	
        protein: 0.94,
        carbohydrate: 11.8
    },
];

function calculate() {
    const fruitSelect = document.getElementById("fruit");
    const quantity = document.getElementById("quantity").value;
    const selectedFruitId = fruitSelect.value;

    if (!selectedFruitId) {
        alert("Kérlek válassz egy gyümölcsöt!");
        return;
    }

    const selectedFruit = fruits.find(fruit => fruit.id == selectedFruitId);
    
    const totalCalories = selectedFruit.calory * quantity;
    const totalFat = selectedFruit.fat * quantity;
    const totalFiber = selectedFruit.fiber * quantity;
    const totalProtein = selectedFruit.protein * quantity;
    const totalCarbohydrate = selectedFruit.carbohydrate * quantity;
    document.getElementById("calories-text").innerText = `${totalCalories} kcal`;
    document.getElementById("fat-text").innerText = `${totalFat} g`;
    document.getElementById("fiber-text").innerText = `${totalFiber} g`;
    document.getElementById("protein-text").innerText = `${totalProtein} g`;
    document.getElementById("carbohydrate-text").innerText = `${totalCarbohydrate} g`;
}
