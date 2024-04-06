const content = document.querySelector('#content');

function CreateDish (name, ingredients, image) {
    this.name = name,
    this.ingredients = ingredients,
    this.image = image
}

const myDishes = [];

const dish1 = new CreateDish('Thuyen Salad', 'Lettuce, peppers, pea shoots, cucumber, chicken, croutons and yogurt sauce', 'c1b15ca73599f975a448.jpg');
myDishes.push(dish1);

const dish2 = new CreateDish('Luisa Brimble Salad', 'Tomato, basil and croutons', '817ff9a99d824d47bef7.jpg');
myDishes.push(dish2);

const dish3 = new CreateDish('Victoria Shes Salad', 'Lettuce, tomato, chicken, quail egg and parmesan shavings', '83db9369c6c0cc8f7b5c.jpg');
myDishes.push(dish3);

const dish4 = new CreateDish('Main Salad', 'Potato, tomato, quail egg, clams, pesto sauce', '53eabc5e0cb82c7c3bdc.jpg');
myDishes.push(dish4);

const dish5 = new CreateDish('Mads Eneqvist Salad', 'Arugula, courgette, figs', '22b772100bd6e404f448.jpg');
myDishes.push(dish5);

const dish6 = new CreateDish('Monika Grabkowska', 'Tomato, capers, yellow pepper, basil, burrata, crotons', '06f38247871d2bdcdcfb.jpg');
myDishes.push(dish6);


export function displayMenu() {

    content.innerHTML = '';

    const menuArea = document.createElement('div');
    menuArea.setAttribute('id', 'menuArea');
    content.appendChild(menuArea);

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
        image.setAttribute('id', 'image')
        image.innerHTML = `<img src="${dishes.image}">`;

        dish.appendChild(name);
        dish.appendChild(ingredients);
        dish.appendChild(image);
        menuArea.appendChild(dish);
        content.appendChild(menuArea);
    })

}