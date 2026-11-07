//User pass
const CLEAN_PASSWORD = "8886";
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
        description: "(All food items may Contain Dairy, Peanuts, Tree Nuts, Sesame, Barley and other allergens.)",
        itemDetailsDisplay: "No",
        base: ["Coconut Milk", "Brown Sugar", "Black Milk Tea"],
        products: [
            {
                name: "Rice Balls Brown Sugar",
                price: 10.25,
                description: "Glutinous rice balls sesame, floating rice cake, taro balls, sago, brown sugar.",
                image: "img/product/Rice Balls Brown Sugar.png"
            },
            {
                name: "Coconut Watermelon & Taro Balls",
                price: 8.99,
                description: "Watermelon, taro balls, sago, and coconut milk.",
                image: "img/product/Coconut Watermelon & Taro Balls.png"
            },
            {
                name: "Coconut Grass Jelly & Taro Balls",
                price: 9.50,
                description: "Grass jelly, sago, taro balls, and coconut milk.",
                image: "img/product/Coconut Grass Jelly & Taro Balls.png"
            },
            {
                name: "Fig Jelly Watermelon Brown Sugar",
                price: 10.75,
                description: "Fig jelly, watermelon, taro balls, chia seed, and brown sugar.",
                image: "img/product/Fig Jelly Watermelon Brown Sugar.png"
            },
            {
                name: "Camellia Milk Tea Grass Jelly",
                price: 8.75,
                description: "Grass jelly, tapioca, sago, and black milk tea.",
                image: "img/product/Camellia Milk Tea Grass Jelly.png"
            },
            {
                name: "Coconut Milk Taro Sago",
                price: 7.75,
                description: "Taro, sago, and coconut milk.",
                image: "img/product/Coconut Milk Taro Sago.png"
            }
        ]
    },

    c2: {
        title: "Coconut Milk Dessert Bowls",
        description: "(All food items may Contain Dairy, Peanuts, Tree Nuts, Sesame, Barley and other allergens.)",
        itemDetailsDisplay: "Yes",
        base: ["Coconut Milk"],
        products: [{
            name: "Watermelon Coconut Grass Jelly",
            price: 12.99,
            description: "Grass jelly, watermelon, coconut pudding, sago, taro balls, and coconut milk.",
            image: "img/product/Watermelon Coconut Grass Jelly.png"
        },
            {
                name: "Coconut Taro Taro Sago",
                price: 12.99,
                description: "Taro, taro balls, sago, floating rice cake, and coconut milk.",
                image: "img/product/Coconut Taro Taro Sago.png"
            },
            {
                name: "Cassava Coconut Grass Jelly",
                price: 13.50,
                description: "Grass jelly, cassava, taro balls, sago, red bean, peanuts, and coconut milk.",
                image: "img/product/Cassava Coconut Grass Jelly.png"
            },
            {
                name: "Cassava Coconut Mochi Grass Jelly",
                price: 14.25,
                description: "Grass jelly, cassava, coconut mochi, taro balls, and coconut milk.",
                image: "img/product/Cassava Coconut Mochi Grass Jelly.png"
            },
            {
                name: "Coconut Taro & Purple Mix",
                price: 13.99,
                description: "Taro, purple sticky rice, glutinous rice balls (sesame), sago, taro balls, and coconut milk.",
                image: "img/product/Coconut Taro & Purple Mix.png"
            },
            {
                name: "Banana Coconut Mochi",
                price: 14.25,
                description: "Coconut mochi, banana, taro balls, sago, red bean, and coconut milk.",
                image: "img/product/Banana Coconut Mochi.png"
            },
            {
                name: "Coconut Rainbow Mixed Balls",
                price: 13.25,
                description: "Taro balls, glutinous rice balls (sesame), floating rice cake, tapioca, popo, sago, and coconut milk.",
                image: "img/product/Coconut Rainbow Mixed Balls.png"
            }
        ]
    },

    c3: {
        title: "Brown Sugar Dessert Bowls",
        description: "(All food items may Contain Dairy, Peanuts, Tree Nuts, Sesame, Barley and other allergens.)",
        itemDetailsDisplay: "Yes",
        base: ["Brown Sugar"],
        products: [
            {
                name: "Grass Jelly Rice Balls Brown Sugar",
                price: 13.99,
                description: "Grass jelly, glutinous rice balls (sesame), floating rice cake, and brown sugar.",
                image: "img/product/Grass Jelly Rice Balls Brown Sugar.png"
            },
            {
                name: "Taro & Coconut Mochi Brown Sugar",
                price: 14.25,
                description: "Taro, coconut mochi, taro balls, sago, and brown sugar.",
                image: "img/product/Taro & Coconut Mochi Brown Sugar.png"
            },
            {
                name: "Cassava & Mixed Balls Brown Sugar",
                price: 14.25,
                description: "Cassava, glutinous rice balls (sesame), floating rice cake, taro balls, sago and brown sugar.",
                image: "img/product/Cassava & Mixed Balls Brown Sugar.png"
            }
        ]
    },

    c4: {
        title: "Camellia Milk Tea Dessert Bowls",
        description: "(All food items may Contain Dairy, Peanuts, Tree Nuts, Sesame, Barley and other allergens.)",
        itemDetailsDisplay: "Yes",
        base: ["Camellia Milk Tea"],
        products: [
            {
                name: "Grass Jelly Cassava & Mixed Balls",
                price: 14.99,
                description: "Grass jelly, cassava, glutinous rice balls(sesame), floating rice balls, sago, taro balls, and black milk tea.",
                image: "img/product/Grass Jelly Cassava & Mixed Balls.png"
            },
            {
                name: "Grass Jelly Taro Coconut Pudding Bowl",
                price: 14.25,
                description: "Grass jelly, taro, coconut pudding, taro balls, and black milk tea.",
                image: "img/product/Grass Jelly Taro Coconut Pudding Bowl.png"
            },
            {
                name: "Grass Jelly Cassava with Camellia Milk Tea",
                price: 13.50,
                description: "Grass Jelly, Cassava, Taro Balls, Sago, Red Bean, Peanuts, and Camellia Milk Tea.",
                image: "img/product/Grass Jelly Cassava with Camellia Milk Tea.png"
            },
            {
                name: "Banana Mochi with Camellia Milk Tea",
                price: 14.75,
                description: "Coconut Mochi, Banana, Taro Balls, Tapioca, Floating Rice Balls, and Camellia Milk Tea.",
                image: "img/product/Banana Mochi with Camellia Milk Tea.png"
            }
        ]
    },

    c5: {
        title: "Crystal Snow Fungus Dessert Bowls",
        description: "Crystal snow fungus products...",
        itemDetailsDisplay: "Yes",
        base: ["Plain Coconut Milk"],
        products: [
            {
                name: "Traditional Snow Fungus Sweet Soup",
                price: 10.50,
                description: "Snow Fungus, Chinese Red Dates, Goji Berries and Rock Sugar. Served with Ice. \n" +
                    "<br><br>Snow fungus is a soft, gelatinous Asian fungus with a mild, delicate flavour. Chinese red dates bring natural sweetness, goji berries add a subtle fruity note. This nourishing sweet soup has a lightly sweet taste and smooth, tender gelatinous texture.)",
                image: "img/product/Traditional Snow Fungus Sweet Soup.png"
            },
            {
                name: "Grass Jelly Watermelon with Snow Fungus",
                price: 14.75,
                description: "Grass Jelly, Watermelon, Sago, Floating Rice Cake, Traditional Snow Fungus Sweet Soup",
                image: "img/product/NO.jpg"
            },
            {
                name: "Grass Jelly Cassava with Snow Fungus",
                price: 15.50,
                description: "Grass Jelly, Cassava, Sago, Barley, and Traditional Snow Fungus Sweet Soup",
                image: "img/product/NO.jpg"
            },
            {
                name: "Taro Taro Snow Fungus",
                price: 15.50,
                description: "Taro, Taro Balls, Sago, Barley, Traditional Snow Fungus Sweet Soup, and Plain Coconut Milk",
                image: "img/product/Taro Taro Snow Fungus.png"
            },
            {
                name: "Banana Barley with Snow Fungus",
                price: 14.50,
                description: "Banana, Barley, Taro Balls, Traditional Snow Fungus Sweet Soup, and Plain Coconut Milk",
                image: "img/product/NO.jpg"
            }
        ]
    },

    c6: {
        title: "Custom Your Own Dessert Bowls",
        description: "New to build-your-own? Try our pre-set signature dessert bowls for a quick & delicious pick!",
        itemDetailsDisplay: "Yes",
        base: ["Coconut Milk", "Brown Sugar", "Black Milk Tea"],
        products: [
            {
                name: "Custom Your Own Bowl",
                price: 0.00,
                description: "Create your own dessert bowl by selecting adds-on, choose between 4 and 10.",
                image: "img/product/1.jpg"
            }
        ]
    }
};

const chooseToppingList = [
    { name: "Coconut Jelly", price: 1.25 },
    { name: "Tapioca", price: 1.25 },
    { name: "Popo", price: 1.25 },
    { name: "Red Bean", price: 1.25 },
    { name: "Raisins", price: 1.25 },
    { name: "Chia Seed", price: 1.25 },
    { name: "Peanut", price: 1.25 },
    { name: "Cereal Flakes", price: 1.25 },
    { name: "Coconut Milk", price: 2.75 },
];

//Category page initiate category content page data
const content = document.getElementById("cPage");
const main = document.getElementById("home");

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
                        <p class="p-price">$${product.price.toFixed(2)}</p>
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
        openPanel("topping");
    }else {
        calcQuantity();
        console.log("clicking add to cart Classical Dessert");
    }
});

/*topping page Display*/
const views = {
    topping: {
        actionText: "Add to cart",
        render: () => `
            <h2>(Optional) Choose your toppings</h2>
            <p>Choose up to 8 toppings</p>
            <div class="topping-list" id="toppingList"></div>
        `,
        afterRender: toppingListDisplay,
        onAction: addToCart
    },
    checkout: {
        actionText: "Place order",
        render: () => `<h2>Checkout</h2><div id="checkoutList"></div>`,
        afterRender: showOrderList,
        onAction: placeOrder
    }
}

const toppingPage = document.querySelector(".itemDetails");

function openPanel(viewName) {
    const v = views[viewName];
    document.getElementById("panelContent").innerHTML = v.render();
    if (v.afterRender) v.afterRender();

    const btn = document.getElementById("panelAction");
    btn.textContent = v.actionText;
    btn.onclick = v.onAction;
    toppingPage.classList.remove("hidden");
    main.classList.add("no-scroll");
    document.querySelector(".itemDetails-panel").scrollTop = 0;

    document.querySelector(".itemDetails-panel").scrollTop = 0;
}


//listener for topping page display - addToCard/X button
function closePanel() {
    toppingPage.classList.add("hidden");
    main.classList.remove("no-scroll");
}

function addToCart() {
    console.log("Add to cart clicked");
    calcQuantity(chosenProduct);
    closePanel();
}

function placeOrder() {
    console.log("place order clicked");
    closePanel();
    completeCycle();
}


toppingPage.addEventListener("click", e => {
    if (e.target.closest('.itemDetails-close')) {
        closePanel();
    }
});


//calculate order quantity
function calcQuantity(){
    const selected = [...document.querySelectorAll('.topping-check:checked')]
        .map(box => chooseToppingList[box.value]);

    const toppKey = selected.map(t => t.name).join(',');

    const existing = cart.find(item => item.name === chosenProduct.name &&  (item.extraTopp || []).map(t => t.name).join(',') === toppKey);

    if(existing){
        existing.qty++;
    }else{
        cart.push({...chosenProduct, extraTopp: selected, qty: 1});
    }
    updateCardButton();
    console.log("Cart: ", cart);
}

//show topping list in topping page
function toppingListDisplay() {
    console.log("generating topping list");
    document.getElementById("toppingList").innerHTML = chooseToppingList.map((t, index) => `
        <label class="topping-row">
            <div class="topping-info">
                <span class="topping-name">${t.name}</span>
                <span class="topping-price">+$${t.price.toFixed(2)}</span>
            </div>
            <input type="checkbox" class="topping-check" value="${index}">
        </label>
    `).join('');

    main.querySelector('.itemDetails').classList.remove('hidden');
}

//cart show-up
function updateCardButton() {
    const cartBtn = document.getElementById("cart");
    const cartText = document.getElementById("cartText");

    const totalQ = cart.reduce((sum, item) => sum + item.qty, 0);

    cartBtn.classList.toggle("hidden", totalQ === 0);
    cartText.textContent = `Cart • ${totalQ}`;
}

main.addEventListener("click", e => {
    if (e.target.closest('.viewCart')) {
        console.log("clicking view cart button");
        openPanel("checkout");
    }
});

function showOrderList() {
    document.getElementById("checkoutList").innerHTML = cart.map((item, index) => `
        <div class="product-grid">
        <div class="order-item" data-index="${index}">
            <img class="order-item-img" src="${item.image}">
            <div class="order-item-info">
                <h3 class="order-item-name">${item.name}</h3>
                <span class="order-item-price">$${item.price.toFixed(2)}</span>
                <p class="extra-ingredient">Extra topping: ${item.extraTopp.map(t => t.name).join(', ')}</p>
            </div>
            <span class="order-item-qty">x${item.qty}</span>
        </div>
        </div>
    `).join('');
}

function completeCycle() {
    console.log("Customer has complete an order!");
    sendActiveOrder();
    cart.length = 0;
    updateCardButton();
    closePanel();
    //hide all subpage
    //clear all data: viewCart amount, and all necessary variables
}

const activeOrderPage = document.getElementById("active-order");

function switchPageMode(name) {
    main.classList.toggle("hidden", name !== "home");
    activeOrderPage.classList.toggle("hidden", name !== "active-order");

    if (name === "active-order") {
        renderActiveOrders();
    }
}

document.querySelector(".ownerPage-btn").addEventListener("click", () => {
    switchPageMode("active-order");
});

document.querySelector(".customer-btn").addEventListener("click", () => {
    switchPageMode("home");
});

// *****    local storage functions     *****
const ORDERS_KEY = "orders";

// 从 localStorage 读出所有订单
function loadOrders() {
    try {
        return JSON.parse(localStorage.getItem(ORDERS_KEY)) || [];
    } catch (e) {
        return [];
    }
}

// 把订单数组写回 localStorage
function saveOrders(orders) {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}

function sendActiveOrder() {
    if (cart.length === 0) return;

    const total = cart.reduce((sum, item) => {
        const price = item.price;
        const toppings = (item.extraTopp || []).reduce((s, t) => s + t.price, 0);
        return sum + (item.price + toppings) * item.qty;
    }, 0);

    const order = {
        customerName: "Rosie", //这里需要让用户有地方写自己的名字
        time: new Date().toLocaleString(),
        items: cart.map(item => ({
            name: item.name,
            price: item.price,
            qty: item.qty,
            extraTopp: (item.extraTopp || []).map(t => ({
                name: t.name,
                price: t.price
            }))
        })), // 深拷贝，清空 cart 不会影响订单
        total: Math.round(total * 100) / 100,
        status: "active"
    };

    const orders = loadOrders();
    orders.push(order);
    saveOrders(orders);
}


function renderActiveOrders() {
    const list = document.getElementById("orderList");
    const orders = loadOrders();

    if (orders.length === 0) {
        list.innerHTML = `<p class="no-order">No orders yet.</p>`;
        return;
    }

    // 新订单排前面
    list.innerHTML = [...orders].reverse().map(order => `
        <div class="order-card" data-id="${order.customerName}">
            <div class="order-card-head">
                <span class="order-card-name">Customer: ${order.customerName}</span>
                <span class="order-card-time">${order.time}</span>
            </div>

            <div class="order-card-items">
                ${order.items.map(item => `
                    <div class="order-card-item">
                        <div class="order-card-line">
                            <span>${item.name} x${item.qty}</span>
                            <span>$${item.price.toFixed(2)}</span>
                        </div>
                        ${item.extraTopp.length > 0 ? `
                            <p class="extra-ingredient">
                                Extra topping: ${item.extraTopp.map(t => t.name).join(', ')}
                            </p>
                        ` : ''}
                    </div>
                `).join('')}
            </div>

            <div class="order-card-foot">
                <span class="order-card-status">${order.status}</span>
                <span class="order-card-total">Total: $${order.total.toFixed(2)}</span>
            </div>
        </div>
    `).join('');
}

//clear all order history

document.querySelector(".clean-storage").addEventListener("click", () => {
    const input = prompt("Enter password to clear all orders:");

    if (input === null) return;              // 点了取消

    if (input !== CLEAN_PASSWORD) {
        alert("Wrong password.");
        return;
    }

    localStorage.removeItem(ORDERS_KEY);
    renderActiveOrders();
});
//initiate page calling method
updateCardButton();
showCategory(activeCat);
