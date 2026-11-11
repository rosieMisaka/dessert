//User pass
const CLEAN_PASSWORD = "8886";
//intro-------------------------------------------------
const intro = document.getElementById("intro");

//listener for intro page
intro.addEventListener("click", () => {
    setLang("en");
    intro.classList.add("hide");
    // console.log("Now the activeCat is: ",activeCat);
    showCategory(activeCat);
    //set category menu to default
    document.querySelectorAll('.cat').forEach(c => {
        c.classList.remove('active');
    });
    const btn = document.querySelector('[data-cat="c1"]');
    btn.classList.add("active");

    updateCardButton();
});

//language default
let lang = localStorage.getItem("lang") || "en";
let currentCat = null;

function L(obj, field) {
    // console.log("L called:", obj, field);
    // console.log("lang =", lang, "| zh字段 =", obj[field + "_zh"]);
    return (lang === "zh" && obj[field + "_zh"]) || obj[field];
}

//Category content page Data-----------------
const categoryData = {
    c1: {
        title: "Classic Dessert Bowls",
        title_zh: "经典甜品碗",
        description: "(All food items may Contain Dairy, Peanuts, Tree Nuts, Sesame, Barley and other allergens.)",
        description_zh: "（所有食品可能含有乳制品、花生、坚果、芝麻、大麦及其他过敏原。）",
        itemDetailsDisplay: "No",
        base: [],
        products: [{
            name: "Rice Balls Brown Sugar",
            name_zh: "黑糖汤圆",
            price: 10.25,
            description: "Glutinous rice balls sesame, floating rice cake, taro balls, sago, brown sugar.",
            description_zh: "芝麻汤圆、浮水年糕、芋圆、西米、黑糖。",
            image: "img/product/Rice Balls Brown Sugar.png"
        }, {
            name: "Coconut Watermelon & Taro Balls",
            name_zh: "椰乳西瓜芋圆",
            price: 8.99,
            description: "Watermelon, taro balls, sago, and coconut milk.",
            description_zh: "西瓜，芋圆，西米，和椰乳",
            image: "img/product/Coconut Watermelon & Taro Balls.png"
        }, {
            name: "Coconut Grass Jelly & Taro Balls",
            price: 9.50,
            description: "Grass jelly, sago, taro balls, and coconut milk.",
            description_zh: "仙草，西米，芋圆，和椰乳",
            image: "img/product/Coconut Grass Jelly & Taro Balls.png"
        }, {
            name: "Fig Jelly Watermelon Brown Sugar",
            price: 10.75,
            description: "Fig jelly, watermelon, taro balls, chia seed, and brown sugar.",
            description_zh: "爱玉冻，西瓜，芋圆，奇亚籽，和红糖",
            image: "img/product/Fig Jelly Watermelon Brown Sugar.png"
        }, {
            name: "Camellia Milk Tea Grass Jelly",
            price: 8.75,
            description: "Grass jelly, tapioca, sago, and black milk tea.",
            image: "img/product/Camellia Milk Tea Grass Jelly.png"
        }, {
            name: "Coconut Milk Taro Sago",
            price: 7.75,
            description: "Taro, sago, and coconut milk.",
            image: "img/product/Coconut Milk Taro Sago.png"
        }]
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
        }, {
            name: "Coconut Taro Taro Sago",
            price: 12.99,
            description: "Taro, taro balls, sago, floating rice cake, and coconut milk.",
            image: "img/product/Coconut Taro Taro Sago.png"
        }, {
            name: "Cassava Coconut Grass Jelly",
            price: 13.50,
            description: "Grass jelly, cassava, taro balls, sago, red bean, peanuts, and coconut milk.",
            image: "img/product/Cassava Coconut Grass Jelly.png"
        }, {
            name: "Cassava Coconut Mochi Grass Jelly",
            price: 14.25,
            description: "Grass jelly, cassava, coconut mochi, taro balls, and coconut milk.",
            image: "img/product/Cassava Coconut Mochi Grass Jelly.png"
        }, {
            name: "Coconut Taro & Purple Mix",
            price: 13.99,
            description: "Taro, purple sticky rice, glutinous rice balls (sesame), sago, taro balls, and coconut milk.",
            image: "img/product/Coconut Taro & Purple Mix.png"
        }, {
            name: "Banana Coconut Mochi",
            price: 14.25,
            description: "Coconut mochi, banana, taro balls, sago, red bean, and coconut milk.",
            image: "img/product/Banana Coconut Mochi.png"
        }, {
            name: "Coconut Rainbow Mixed Balls",
            price: 13.25,
            description: "Taro balls, glutinous rice balls (sesame), floating rice cake, tapioca, popo, sago, and coconut milk.",
            image: "img/product/Coconut Rainbow Mixed Balls.png"
        }]
    },

    c3: {
        title: "Brown Sugar Dessert Bowls",
        description: "(All food items may Contain Dairy, Peanuts, Tree Nuts, Sesame, Barley and other allergens.)",
        itemDetailsDisplay: "Yes",
        base: ["Brown Sugar"],
        products: [{
            name: "Grass Jelly Rice Balls Brown Sugar",
            price: 13.99,
            description: "Grass jelly, glutinous rice balls (sesame), floating rice cake, and brown sugar.",
            image: "img/product/Grass Jelly Rice Balls Brown Sugar.png"
        }, {
            name: "Taro & Coconut Mochi Brown Sugar",
            price: 14.25,
            description: "Taro, coconut mochi, taro balls, sago, and brown sugar.",
            image: "img/product/Taro & Coconut Mochi Brown Sugar.png"
        }, {
            name: "Cassava & Mixed Balls Brown Sugar",
            price: 14.25,
            description: "Cassava, glutinous rice balls (sesame), floating rice cake, taro balls, sago and brown sugar.",
            image: "img/product/Cassava & Mixed Balls Brown Sugar.png"
        }]
    },

    c4: {
        title: "Camellia Milk Tea Dessert Bowls",
        description: "(All food items may Contain Dairy, Peanuts, Tree Nuts, Sesame, Barley and other allergens.)",
        itemDetailsDisplay: "Yes",
        base: ["Camellia Milk Tea"],
        products: [{
            name: "Grass Jelly Cassava & Mixed Balls",
            price: 14.99,
            description: "Grass jelly, cassava, glutinous rice balls(sesame), floating rice balls, sago, taro balls, and black milk tea.",
            image: "img/product/Grass Jelly Cassava & Mixed Balls.png"
        }, {
            name: "Grass Jelly Taro Coconut Pudding Bowl",
            price: 14.25,
            description: "Grass jelly, taro, coconut pudding, taro balls, and black milk tea.",
            image: "img/product/Grass Jelly Taro Coconut Pudding Bowl.png"
        }, {
            name: "Grass Jelly Cassava with Camellia Milk Tea",
            price: 13.50,
            description: "Grass Jelly, Cassava, Taro Balls, Sago, Red Bean, Peanuts, and Camellia Milk Tea.",
            image: "img/product/Grass Jelly Cassava with Camellia Milk Tea.png"
        }, {
            name: "Banana Mochi with Camellia Milk Tea",
            price: 14.75,
            description: "Coconut Mochi, Banana, Taro Balls, Tapioca, Floating Rice Balls, and Camellia Milk Tea.",
            image: "img/product/Banana Mochi with Camellia Milk Tea.png"
        }]
    },

    c5: {
        title: "Crystal Snow Fungus Dessert Bowls",
        description: "Crystal snow fungus products...",
        itemDetailsDisplay: "Yes",
        base: ["Plain Coconut Milk"],
        products: [{
            name: "Traditional Snow Fungus Sweet Soup",
            price: 10.50,
            description: "Snow Fungus, Chinese Red Dates, Goji Berries and Rock Sugar. Served with Ice. \n" + "<br><br>Snow fungus is a soft, gelatinous Asian fungus with a mild, delicate flavour. Chinese red dates bring natural sweetness, goji berries add a subtle fruity note. This nourishing sweet soup has a lightly sweet taste and smooth, tender gelatinous texture.)",
            image: "img/product/Traditional Snow Fungus Sweet Soup.png"
        }, {
            name: "Grass Jelly Watermelon with Snow Fungus",
            price: 14.75,
            description: "Grass Jelly, Watermelon, Sago, Floating Rice Cake, Traditional Snow Fungus Sweet Soup",
            image: "img/product/NO.jpg"
        }, {
            name: "Grass Jelly Cassava with Snow Fungus",
            price: 15.50,
            description: "Grass Jelly, Cassava, Sago, Barley, and Traditional Snow Fungus Sweet Soup",
            image: "img/product/NO.jpg"
        }, {
            name: "Taro Taro Snow Fungus",
            price: 15.50,
            description: "Taro, Taro Balls, Sago, Barley, Traditional Snow Fungus Sweet Soup, and Plain Coconut Milk",
            image: "img/product/Taro Taro Snow Fungus.png"
        }, {
            name: "Banana Barley with Snow Fungus",
            price: 14.50,
            description: "Banana, Barley, Taro Balls, Traditional Snow Fungus Sweet Soup, and Plain Coconut Milk",
            image: "img/product/NO.jpg"
        }]
    },

    c6: {
        title: "Custom Your Own Dessert Bowls",
        description: "New to build-your-own? Try our pre-set signature dessert bowls for a quick & delicious pick!",
        itemDetailsDisplay: "Yes",
        base: ["Coconut Milk", "Brown Sugar", "Black Milk Tea"],
        products: [{
            name: "Custom Your Own Bowl",
            price: 0.00,
            description: "Create your own dessert bowl by selecting adds-on, choose between 4 and 10.",
            image: "img/product/1.jpg"
        }]
    }
};

const chooseToppingList = [{name: "Coconut Jelly", price: 1.25}, {name: "Tapioca", price: 1.25}, {
    name: "Popo",
    price: 1.25
}, {name: "Red Bean", price: 1.25}, {name: "Raisins", price: 1.25}, {name: "Chia Seed", price: 1.25}, {
    name: "Peanut",
    price: 1.25
}, {name: "Cereal Flakes", price: 1.25}, {name: "Extra Sauce (4 oz)", price: 2.75}];

//Category page initiate category content page data
const content = document.getElementById("cPage");
const main = document.getElementById("home");

function showCategory(catId) {
    console.log("showCategory called with:", catId);
    currentCat = catId;
    console.log("currentCat set to:", currentCat);
    console.log("lang in showCatetory is:",lang)

    const data = categoryData[catId];

    content.innerHTML = `
        <div class="cPage-head">
            <h2 class="cPage-title">${L(data, "title")}</h2>
            <p class="cPage-dsp">${L(data, "description")}</p>
       </div>
        
        <div class="product-grid">
            ${data.products.map((product, index) => `
                <div class="product-row">
                    <img src="${product.image}" alt="${L(product, "name")}">

                    <div class="product-info">
                        <h3>${L(product, "name")}</h3>
                        <p class="p-price">$${product.price.toFixed(2)}</p>
                        <p class="p-description">${L(product, "description")}</p>
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
    if (!btn) return;

    chosenProduct = categoryData[activeCat].products[btn.dataset.index];

    if (categoryData[activeCat].itemDetailsDisplay === "Yes") {
        openPanel("topping");
    } else {
        calcQuantity();
        console.log("clicking add to cart Classical Dessert");
    }
});

// topping page and checkout page Display
const views = {
    topping: {
        actionText: "Add to Cart",
        titleText: "Optional toppings & sauce",
        descText: "Choose up to 8 toppings",
        render: () => `
            <div class="topping-list" id="toppingList"></div>
        `,
        afterRender: toppingListDisplay,
        onAction: addToCart
    }, checkout: {
        actionText: "Next Step",
        titleText: "Checkout",
        descText: "",
        render: () => `<div id="checkoutList"></div>`,
        afterRender: initCheckout,
        onAction: nextStep
    }, inputName: {
        actionText: "Place Order",
        titleText: "Checkout",
        descText: "",
        render: () => `<div id="confirmPage"></div>`,
        afterRender: inputUserName,
        onAction: placeOrder
    }
}

const toppingPage = document.querySelector(".itemDetails");

function openPanel(viewName) {
    console.log("Open panel called");
    const v = views[viewName];
    document.getElementById("panelContent").innerHTML = v.render();
    if (v.afterRender) v.afterRender();

    const btn = document.getElementById("panelAction");
    btn.textContent = v.actionText;
    btn.onclick = v.onAction;
    const title = document.getElementById("upperTitle");
    title.textContent = v.titleText;
    const desc = document.getElementById("upperDesc");
    desc.textContent = v.descText;
    toppingPage.classList.remove("hidden");
    main.classList.add("no-scroll");

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


toppingPage.addEventListener("click", e => {
    if (e.target.closest('.itemDetails-close')) {
        closePanel();
    }
});


//calculate order quantity
function calcQuantity() {
    const selected = [...document.querySelectorAll('.topping-check:checked')]
        .map(box => chooseToppingList[box.value]);

    console.log("Selected options are: ", selected);

    const toppKey = selected.map(t => t.name).join(',');

    const existing = cart.find(item => item.name === chosenProduct.name && (item.extraTopp || []).map(t => t.name).join(',') === toppKey);

    if (existing) {
        existing.qty++;
    } else {
        cart.push({...chosenProduct, extraTopp: selected, qty: 1});
    }
    updateCardButton();
    console.log("Cart: ", cart);
    console.log("Chosenproduct is: ",chosenProduct);
}

//show topping list in topping page
function toppingListDisplay() {
    console.log("generating topping list");
    const container = document.getElementById("toppingList");
    container.innerHTML = chooseToppingList.slice(0, -1).map((t, index) => `
        <label class="topping-row">
            <div class="topping-info">
                <span class="topping-name">${t.name}</span>
                <span class="topping-price">+$${t.price.toFixed(2)}</span>
            </div>
            <input type="checkbox" class="topping-check" value="${index}">
        </label>
    `).join('');

    const lastIndex = chooseToppingList.length - 1;
    const t = chooseToppingList[lastIndex];
    const sauceName = categoryData[currentCat].base;

    const baseHtml = chooseToppingList.slice(-1).map((t) => `
        <div class="topping-expand">
        <div class="topping-row expand-header" data-expand-toggle>
            <div class="topping-info">
                <span class="topping-name">${t.name}</span>
                <span class="topping-price">+$${t.price.toFixed(2)}</span>
            </div>
            <span class="expand-arrow">▸</span>
        </div>
        <div class="expand-content" hidden>
            <label class="topping-row sub-row">
                <div class="topping-info" id="sauceRow">
                    <span class="topping-name">${sauceName}</span>
                </div>
                <input type="checkbox" class="topping-check" value="${lastIndex}">
            </label>
        </div>
    </div>
    `).join('');

    container.insertAdjacentHTML("beforeend", baseHtml);

    container.querySelectorAll('[data-expand-toggle]').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            content.hidden = !content.hidden;
            header.querySelector('.expand-arrow').textContent = content.hidden ? '▸' : '▾';
        });
    });

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


const MIN_QTY = 0;
const MAX_QTY = 50;

function renderOrderList() {
    document.getElementById('checkoutList').innerHTML = cart.map((item, index) => `
        <div class="product-grid">
        <div class="order-item" data-index="${index}">
            <img class="order-item-img" src="${item.image}">
            <div class="order-item-info">
                <h3 class="order-item-name">${item.name}</h3>
                <span class="order-item-price">$${item.price.toFixed(2)}</span>
                <p class="extra-ingredient">Extra topping: ${item.extraTopp.map(t => t.name).join(', ')}</p>
            </div>
            <div class="order-item-amount">
                <button class="amount-btn" data-action="minus">−</button>
                <span class="order-item-qty">${item.qty}</span>
                <button class="amount-btn" data-action="plus">+</button>
            </div>
        </div>
        </div>
    `).join('');
}


function initCheckout() {
    renderOrderList();

    document.getElementById('checkoutList').addEventListener('click', handleCheckoutClick);
}

function handleCheckoutClick(e) {
    // + or - product item quantity in view cart page
        const btn = e.target.closest('.amount-btn');
        if (!btn) return;

        const item = btn.closest('.order-item');
        const index = Number(item.dataset.index);
        const delta = btn.dataset.action === 'plus' ? 1 : -1;

        const newQty = cart[index].qty + delta;
        console.log("newQty is: ",newQty)
        if (newQty < MIN_QTY || newQty > MAX_QTY) return;
        if (newQty === 0){
            removeItemFromCheckout(index);
            return;
        }

        cart[index].qty = newQty;
        updateRow(item, index);
        updateCardButton();
}

function updateRow(item, index) {
    const qty = cart[index].qty;
    item.querySelector('.order-item-qty').textContent = qty;
    item.querySelector('[data-action="minus"]').disabled = qty <= MIN_QTY;
    item.querySelector('[data-action="plus"]').disabled  = qty >= MAX_QTY;
}

function removeItemFromCheckout(index) {
    console.log("removing item, Index is: ",index);
    cart.splice(index, 1);
    renderOrderList();
    updateCardButton();
    if(cart.length === 0) closePanel();
}


function inputUserName() {
    console.log("Hello!");
    document.getElementById("confirmPage").innerHTML = `
        <div class="item">
            <h3>Please let us know who is ordering 🌹</h3>
            <input type="text" id="nameInput" placeholder="Your Name...">
        </div>
    `;
}

//TODO: Change the price accordingly to the extra topping

function placeOrder() {
    console.log("place order clicked");
    const name = document.getElementById("nameInput").value.trim();
    closePanel();
    completeCycle(name);
}

function nextStep() {
    console.log("next step clicked :)");
    openPanel("inputName");

}

function completeCycle(name) {
    console.log("Customer has complete an order!");
    sendActiveOrder(name);
    cart.length = 0;
    updateCardButton();
    closePanel();
    intro.classList.remove("hide");
    setLang("en")
    currentCat = null;
    activeCat = "c1";

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

function sendActiveOrder(name) {
    if (cart.length === 0) return;

    const total = cart.reduce((sum, item) => {
        const price = item.price;
        const toppings = (item.extraTopp || []).reduce((s, t) => s + t.price, 0);
        return sum + (item.price + toppings) * item.qty;
    }, 0);

    const order = {
        customerName: name, //这里需要让用户有地方写自己的名字
        time: new Date().toLocaleString(), items: cart.map(item => ({
            name: item.name, price: item.price, qty: item.qty, extraTopp: (item.extraTopp || []).map(t => ({
                name: t.name, price: t.price
            }))
        })), // 深拷贝，清空 cart 不会影响订单
        total: Math.round(total * 100) / 100, status: "active"
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
                            <span class="order-card-name">${item.name} x${item.qty}</span>
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

    if (input === null) return;

    if (input !== CLEAN_PASSWORD) {
        alert("Wrong password.");
        return;
    }

    localStorage.removeItem(ORDERS_KEY);
    renderActiveOrders();
});


//click to check larger img
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('lightbox-close');

content.addEventListener('click', (e) => {
    const img = e.target.closest('.product-row img');
    if (!img) return;

    updateLightboxLeft();
    lightboxImg.src = img.src;
    lightbox.classList.add('show');
})

function closeLightBox() {
    lightbox.classList.remove('show');
    lightboxImg.src = '';
}

closeBtn.addEventListener('click', closeLightBox);

//resizing the lightbox when width of the window changed
const menu = document.getElementById('category');

function updateLightboxLeft() {
    lightbox.style.left = menu.getBoundingClientRect().right + 'px';
}

window.addEventListener('resize', () => {
    if (lightbox.classList.contains('show')) updateLightboxLeft();
});

//click to switch language
document.addEventListener('click', (e) => {
    const langBtn = e.target.closest('.language');
    if (!langBtn) return;

    const span = langBtn.querySelector('span');
    lang = (lang === "en") ? "zh" : "en";
    setLang(lang);

    if (currentCat) showCategory(currentCat);
})

function setLang(language) {
    lang = language;
    console.log("lang is: ", lang);
    localStorage.setItem("lang", lang);
    document.querySelector('.language span').textContent = (lang === "en") ? "English" : "简体中文";
}


// edit active order
const modal = document.getElementById("orderModal");
const modalContent = document.getElementById("modalContent");

document.getElementById("orderList").addEventListener("click", (e) => {
    const card = e.target.closest(".order-card");
    if (!card) return;

    const items = card.querySelector(".order-card-items");
    modalContent.innerHTML = items.innerHTML;

    modal.classList.remove("hidden");
});

document.getElementById("modalClose").addEventListener("click", () => {
    modal.classList.add("hidden");
});
