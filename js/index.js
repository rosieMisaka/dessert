//intro-------------------------------------------------
const intro = document.getElementById("intro");

//listener for intro page
intro.addEventListener("click", () => {
    intro.classList.add("hide");
});

//Category content page Data-----------------
const categoryData = {
    c1: {
        title: "Classic Dessert Bowls",
        description: "Top sale products...",
        itemDetailsDisplay: "No",
        products: [
            {
                name: "Rice Balls Brown Sugar",
                price: "$12.75",
                description: "Glutinous rice balls sesame, floating rice cake, taro balls, sago, brown sugar.",
                image: "img/product/1.jpg"
            },
            {
                name: "Coconut Watermelon & Taro Balls",
                price: "$11.25",
                description: "Watermelon, taro balls, sago, and coconut milk.",
                image: "img/product/1.jpg"
            },
            {
                name: "Coconut Grass Jelly & Taro Balls",
                price: "$10.75",
                description: "Grass jelly, sago, taro balls, and coconut milk.",
                image: "img/product/1.jpg"
            },
            {
                name: "Fig Jelly Watermelon Brown Sugar",
                price: "$13.25",
                description: "Fig jelly, watermelon, taro balls, chia seed, and brown sugar.",
                image: "img/product/1.jpg"
            },
            {
                name: "Milk Tea Grass Jelly",
                price: "$10.99",
                description: "Grass jelly, tapioca, sago, and black milk tea.",
                image: "img/product/1.jpg"
            },
            {
                name: "Coconut Milk Taro Sago",
                price: "$9.50",
                description: "Taro, sago, and coconut milk.",
                image: "img/product/1.jpg"
            }
        ]
    },

    c2: {
        title: "Coconut Milk Dessert Bowls",
        description: "Coconut milk products...",
        itemDetailsDisplay: "Yes",
        products: [{
            name: "Watermelon Coconut Grass Jelly",
            price: "$16.50",
            description: "Grass jelly, watermelon, coconut pudding, sago, taro balls, and coconut milk.",
            image: "img/product/1.jpg"
        },
            {
                name: "Coconut Taro Sago",
                price: "$15.99",
                description: "Taro, taro balls, sago, floating rice cake, and coconut milk.",
                image: "img/product/1.jpg"
            },
            {
                name: "Cassava Coconut Grass Jelly",
                price: "$16.99",
                description: "Grass jelly, cassava, taro balls, sago, red bean, peanuts, and coconut milk.",
                image: "img/product/1.jpg"
            },
            {
                name: "Cassava Coconut Mochi Grass Jelly",
                price: "$17.50",
                description: "Grass jelly, cassava, coconut mochi, taro balls, and coconut milk.",
                image: "img/product/1.jpg"
            },
            {
                name: "Coconut Taro & Purple Mix",
                price: "$17.25",
                description: "Taro, purple sticky rice, glutinous rice balls sesame, sago, taro balls, and coconut milk.",
                image: "img/product/1.jpg"
            },
            {
                name: "Banana Coconut Mochi",
                price: "$17.75",
                description: "Coconut mochi, banana, taro balls, sago, red bean, and coconut milk.",
                image: "img/product/1.jpg"
            },
            {
                name: "Coconut Rainbow Mixed Balls",
                price: "$16.99",
                description: "Taro balls, glutinous rice balls sesame, floating rice cake, tapioca, popo, sago, and coconut milk.",
                image: "img/product/1.jpg"
            }
        ]
    },

    c3: {
        title: "Brown Sugar Dessert Bowls",
        description: "Brown sugar products...",
        itemDetailsDisplay: "Yes",
        products: [
            {
                name: "Grass Jelly Rice Balls Brown Sugar",
                price: "$16.99",
                description: "Grass jelly, glutinous rice balls sesame, floating rice cake, and brown sugar.",
                image: "img/product/1.jpg"
            },
            {
                name: "Taro & Coconut Mochi Brown Sugar",
                price: "$17.25",
                description: "Taro, coconut mochi, taro balls, sago, and brown sugar.",
                image: "img/product/1.jpg"
            },
            {
                name: "Cassava & Mixed Balls Brown Sugar",
                price: "$17.25",
                description: "Cassava, glutinous rice balls sesame, floating rice cake, taro balls, sago and brown sugar.",
                image: "img/product/1.jpg"
            }
        ]
    },

    c4: {
        title: "Black Milk Tea Dessert Bowls",
        description: "Black milk tea products...",
        itemDetailsDisplay: "Yes",
        products: [
            {
                name: "Grass Jelly Cassava Mixed Balls",
                price: "$18.25",
                description: "Grass jelly, cassava, glutinous rice balls(sesame), floating rice balls, sago, taro balls, and black milk tea.",
                image: "img/product/1.jpg"
            },
            {
                name: "Grass Jelly Taro Coconut Pudding Bowl",
                price: "$17.50",
                description: "Grass jelly, taro, coconut pudding, taro balls, and black milk tea.",
                image: "img/product/1.jpg"
            },
            {
                name: "Grass jelly Cassava Milk Tea Bowl",
                price: "$16.99",
                description: "Grass jelly, cassava, taro balls, sago, red bean, peanuts, and black milk tea.",
                image: "img/product/1.jpg"
            }
        ]
    },

    c5: {
        title: "Crystal Snow Fungus Dessert Bowls",
        description: "Crystal snow fungus products...",
        itemDetailsDisplay: "Yes",
        products: [
            {
                name: "Crystal Snow Fungus Desserts Bowl (16oz)",
                price: "$12.99",
                description: "Snow fungus, Chinese red date and Chinese goji berry, rock sugar.",
                image: "img/product/1.jpg"
            }
        ]
    },

    c6: {
        title: "Custom Your Own Dessert Bowls",
        description: "Create your own dessert bowl by selecting adds-on, choose between 4 and 10.",
        itemDetailsDisplay: "Yes",
        products: [
            {
                name: "Sago",
                price: "+$2.75",
                description: "",
                image: "img/product/1.jpg"
            }
        ]
    }
};

const chooseToppingList = [
    { name: "Coconut Jelly", price: 1.85 },
    { name: "Tapioca", price: 1.85 },
    { name: "Popo", price: 1.85 },
    { name: "Red Bean", price: 1.85 },
    { name: "Raisins", price: 1.85 },
    { name: "Chia Seed", price: 1.85 },
    { name: "Peanut", price: 1.85 },
    { name: "Cereal Flakes", price: 1.85 },
    { name: "Coconut Milk (4oz)", price: 2.99 }
];

//Category page initiate category content page data
const content = document.getElementById("cPage");

function showCategory(catId) {

    const data = categoryData[catId];

    content.innerHTML = `
        <div class="cPage-head">
            <h2 class="cPage-title">${data.title}</h2>
            <p class="cPage-dsp">${data.description}</p>
       </div>
        
        <div class="product-grid">
            ${data.products.map((product, index) => `
                <div class="product-row">
                    <img src="${product.image}" alt="${product.name}">

                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p class="p-price">${product.price}</p>
                        <p class="p-description">${product.description}</p>
                    </div>
                    
                    <button class="add-button" data-index="${index}">+</button>
                </div>
            `).join('')}
        </div>
    `;
}

//Category Menu & Category content page show/hide -------------------------------------------------
let activeCat = "c1";

//listener for category menu
document.getElementById("category").addEventListener('click', e => {

    const chosenCat = e.target.closest('.cat');

    if (!chosenCat) {
        return;
    }

    document.querySelectorAll('.cat').forEach(c => {
        c.classList.remove('active');
    });

    chosenCat.classList.add('active');

    activeCat = chosenCat.dataset.cat;
    showCategory(activeCat);
});


//add button to open sub-page
const cart = [];
let chosenProduct = null;
//listener for dessert add button
content.addEventListener('click', e => {
    const btn = e.target.closest('.add-button');
    if(!btn) return;

    chosenProduct = categoryData[activeCat].products[btn.dataset.index];

    if(categoryData[activeCat].itemDetailsDisplay === "Yes"){
        toppingPageDisplay();
    }else {
        calcQuantity();
        console.log("clicking add to cart Classical Dessert");
    }
});

/*topping page Display*/
const toppingPage = document.querySelector(".itemDetails");
//listener for topping page display - addToCard/X button
toppingPage.addEventListener("click", e => {

    if (e.target.closest('.itemDetails-close')) {
        toppingPage.classList.add("hidden");
        return;
    }

    if (e.target.closest('.topping-add')) {
        calcQuantity(chosenProduct);
        console.log("clicking add to cart");
        toppingPage.classList.add("hidden");
    }
});

function toppingPageDisplay() {
    toppingPage.classList.remove("hidden");
    toppingListDisplay();
}

//calculate order quantity
function calcQuantity(){
    const existing = cart.find(item => item.name === chosenProduct.name);
    if(existing){
        existing.qty++;
    }else{
        cart.push({...chosenProduct, qty: 1});
    }
    updateCardButton();
    console.log("Cart: ", cart);
}

//show topping list in topping page
function toppingListDisplay() {
    document.getElementById("toppingList").innerHTML = chooseToppingList.map((t, index) => `
        <label class="topping-row">
            <div class="topping-info">
                <span class="topping-name">${t.name}</span>
                <span class="topping-price">+$${t.price.toFixed(2)}</span>
            </div>
            <input type="checkbox" class="topping-check" value="${index}">
        </label>
    `).join('');

    document.querySelector('.itemDetails').classList.remove('hidden');
}

//cart show-up
function updateCardButton() {
    const cartBtn = document.getElementById("cart");
    const cartText = document.getElementById("cartText");

    const totalQ = cart.reduce((sum, item) => sum + item.qty, 0);

    cartBtn.classList.toggle("hidden", totalQ === 0);
    cartText.textContent = `Cart • ${totalQ}`;
}

//initiate page calling method
updateCardButton();
showCategory(activeCat);
