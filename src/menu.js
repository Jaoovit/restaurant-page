const content = document.querySelector('#content');

function CreateDish (name, ingredients, image) {
    this.name = name,
    this.ingredients = ingredients,
    this.image = image
}

const myDishes = [];

const dish1 = new CreateDish('Thuyen Salad', 'lettuce, peppers, pea shoots, cucumber, chicken, croutons and yogurt sauce', 'image');
myDishes.push(dish1);

const dish2 = new CreateDish('Thuyen Salad', 'lettuce, peppers, pea shoots, cucumber, chicken, croutons and yogurt sauce', 'image');
myDishes.push(dish2);

const dish3 = new CreateDish('Thuyen Salad', 'lettuce, peppers, pea shoots, cucumber, chicken, croutons and yogurt sauce', 'image');
myDishes.push(dish3);

const dish4 = new CreateDish('Thuyen Salad', 'lettuce, peppers, pea shoots, cucumber, chicken, croutons and yogurt sauce', 'image');
myDishes.push(dish4);

const dish5 = new CreateDish('Thuyen Salad', 'lettuce, peppers, pea shoots, cucumber, chicken, croutons and yogurt sauce', 'image');
myDishes.push(dish5);

const dish6 = new CreateDish('Thuyen Salad', 'lettuce, peppers, pea shoots, cucumber, chicken, croutons and yogurt sauce', 'image');
myDishes.push(dish6);


export function displayMenu() {

    content.innerHTML = '';

    const menuTitle = document.createElement('h1');
    menuTitle.setAttribute('id', 'menuTitle');
    menuTitle.textContent = 'Menu';
    content.appendChild(menuTitle);

    myDishes.forEach((dishes) => {
        let dish = document.createElement('div');
        dish.setAttribute('id', 'dish');

        let name = document.createElement('h3');
        name.textContent = dishes.name;

        let ingredients = document.createElement('p');
        ingredients.textContent = dishes.ingredients;

        let image = document.createElement('div');
        image.innerHTML = dishes.image;

        dish.appendChild(name);
        dish.appendChild(ingredients);
        dish.appendChild(image);
        content.appendChild(dish);
    })

}