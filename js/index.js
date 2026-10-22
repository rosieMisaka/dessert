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
        description: "Top sale products...",
        itemDetailsDisplay: "No",
        products: [
            {
                name: "Rice Balls Brown Sugar",
                price: 12.75,
                description: "Glutinous rice balls sesame, floating rice cake, taro balls, sago, brown sugar.",
                image: "img/product/1.jpg"
            },
            {
                name: "Coconut Watermelon & Taro Balls",
                price: 11.25,
                description: "Watermelon, taro balls, sago, and coconut milk.",
                image: "img/product/1.jpg"
            },
            {
                name: "Coconut Grass Jelly & Taro Balls",
                price: 10.75,
                description: "Grass jelly, sago, taro balls, and coconut milk.",
                image: "img/product/1.jpg"
            },
            {
                name: "Fig Jelly Watermelon Brown Sugar",
                price: 13.25,
                description: "Fig jelly, watermelon, taro balls, chia seed, and brown sugar.",
                image: "img/product/1.jpg"
            },
            {
                name: "Milk Tea Grass Jelly",
                price: 10.99,
                description: "Grass jelly, tapioca, sago, and black milk tea.",
                image: "img/product/1.jpg"
            },
            {
                name: "Coconut Milk Taro Sago",
                price: 9.50,
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
            price: 16.50,
            description: "Grass jelly, watermelon, coconut pudding, sago, taro balls, and coconut milk.",
            image: "img/product/1.jpg"
        },
            {
                name: "Coconut Taro Sago",
                price: 15.99,
                description: "Taro, taro balls, sago, floating rice cake, and coconut milk.",
                image: "img/product/1.jpg"
            },
            {
                name: "Cassava Coconut Grass Jelly",
                price: 16.99,
                description: "Grass jelly, cassava, taro balls, sago, red bean, peanuts, and coconut milk.",
                image: "img/product/1.jpg"
            },
            {
                name: "Cassava Coconut Mochi Grass Jelly",
                price: 17.50,
                description: "Grass jelly, cassava, coconut mochi, taro balls, and coconut milk.",
                image: "img/product/1.jpg"
            },
            {
                name: "Coconut Taro & Purple Mix",
                price: 17.25,
                description: "Taro, purple sticky rice, glutinous rice balls sesame, sago, taro balls, and coconut milk.",
                image: "img/product/1.jpg"
            },
            {
                name: "Banana Coconut Mochi",
                price: 17.75,
                description: "Coconut mochi, banana, taro balls, sago, red bean, and coconut milk.",
                image: "img/product/1.jpg"
            },
            {
                name: "Coconut Rainbow Mixed Balls",
                price: 16.99,
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
                price: 16.99,
                description: "Grass jelly, glutinous rice balls sesame, floating rice cake, and brown sugar.",
                image: "img/product/1.jpg"
            },
            {
                name: "Taro & Coconut Mochi Brown Sugar",
                price: 17.25,
                description: "Taro, coconut mochi, taro balls, sago, and brown sugar.",
                image: "img/product/1.jpg"
            },
            {
                name: "Cassava & Mixed Balls Brown Sugar",
                price: 17.25,
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
                price: 18.25,
                description: "Grass jelly, cassava, glutinous rice balls(sesame), floating rice balls, sago, taro balls, and black milk tea.",
                image: "img/product/1.jpg"
            },
            {
                name: "Grass Jelly Taro Coconut Pudding Bowl",
                price: 17.50,
                description: "Grass jelly, taro, coconut pudding, taro balls, and black milk tea.",
                image: "img/product/1.jpg"
            },
            {
                name: "Grass jelly Cassava Milk Tea Bowl",
                price: 16.99,
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
                price: 12.99,
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
                price: 2.75,
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
    { name: "Coconut Milk (4oz)", price: 2.99 },
    { name: "Chia Seed", price: 1.85 },
    { name: "Peanut", price: 1.85 },
    { name: "Cereal Flakes", price: 1.85 },
    { name: "Coconut Milk (4oz)", price: 2.99 }
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

    document.querySelector(".itemDetails-panel").scrollTop = 0;
}


//listener for topping page display - addToCard/X button
function closePanel() {
    toppingPage.classList.add("hidden");
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
