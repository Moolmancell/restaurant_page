import burger from '../images/menu/burger1.jpg'
import spaghetti from '../images/menu/spaghetti1.jpg'
import fries from '../images/menu/Fries1.jpg'


let Foodmenu = [
    {
        categoryName: 'Best Sellers',
        foodSelection: [
            {
                foodImage: burger,
                foodName: "Food Name",
                foodPrice: "$0.99",
            },
            {
                foodImage: spaghetti,
                foodName: "Spaghetti",
                foodPrice: "$1.99",
            },
            {
                foodImage: fries,
                foodName: "Fries",
                foodPrice: "$0.50",
            }
        ]
    }
]

export function menu() {

    document.getElementById("content").innerHTML = "";

    Foodmenu.forEach(element => {
        
        const section = document.createElement("section");

        const category = document.createElement("h1");
        category.classList.add("category");
        category.textContent = element.categoryName;

        const foodFlex = document.createElement("div");
        foodFlex.classList.add("foodFlex");

        section.appendChild(category);
        section.appendChild(foodFlex)
        document.getElementById("content").appendChild(section)

        element.foodSelection.forEach(foodContent => {
            
            const foodDiv = document.createElement("div");
            foodDiv.classList.add("food");
            foodFlex.appendChild(foodDiv);

            const img = document.createElement("img");
            img.classList.add("food-img");
            img.src = foodContent.foodImage;

            const content = document.createElement("div");
            content.classList.add("contents");

            const foodName = document.createElement("h1");
            foodName.textContent = foodContent.foodName;
            content.appendChild(foodName);

            const price = document.createElement("p");
            price.textContent = foodContent.foodPrice;
            content.appendChild(price);

            const addToCart = document.createElement("button");
            addToCart.innerHTML = `<span class="material-symbols-outlined">
            shopping_cart
            </span><span>Add to Cart</span>`;
            content.appendChild(addToCart)

            foodDiv.appendChild(img);
            foodDiv.appendChild(content);
        })
    });

}

