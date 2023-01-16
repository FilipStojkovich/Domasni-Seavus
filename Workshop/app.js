const BASE_URL = "https://fakestoreapi.com/products/";
let productArray = [];

const appContainer = document.querySelector("#appContainer");
const productInput = document.querySelector("#product-id-input");
const productBtn = document.querySelector("#product-id-btn");
const renderBtn = document.querySelector("#render-list-btn");

async function getAllProducts() {
    const response = await fetch(BASE_URL);
    const result = await response.json();
    return result;
}

function renderAllProducts(products) {
    appContainer.innerHTML = "";
    const productList = document.createElement("ul");
    productList.classList.add("product-list");
    for (const product of products) {
        productList.innerHTML += `<li class="product-item">
        <h3 class="card-title">${product.title}</h3>
        <h4 class="card-subtitle">${product.price}</h4>
        <button id="${product.id}">Read More</button>
        </li>`
    }
    appContainer.appendChild(productList);

    const listItem = document.querySelectorAll(".product-item");
    for (const item of listItem) {
        const btn = item.lastElementChild;

        btn.addEventListener("click", async function(event) {
            const id = event.target.id;
            const product = await getSingleProduct(id);
            renderSingleProduct(product);
        });
    };
};

async function calculateTotalSum() {
    const response = await fetch(BASE_URL);
    const result = await response.json();
    calculateSum(result);
}

function calculateSum(products) {
    let sum = 0;
    for (const product of products) {
        sum += product.price;
    }
    sum = sum.toFixed(2);
    const priceContainer = document.createElement("p");
    priceContainer.innerHTML = `Total price is: ${sum}`;
    appContainer.appendChild(priceContainer);
}

async function getHighestRatedProduct() {
    const response = await fetch(BASE_URL);
    const result = await response.json();
    getHighestRated(result);
}

function getHighestRated(products) {
    let highest = products[0];
    for (const product of products) {
        if(product.rating.rate > highest.rating.rate) {
            highest = product;
        }
    }
    const ratedContainer = document.createElement("p");
    ratedContainer.innerHTML = `Highest rated product is: ${highest.rating.rate}`;
    appContainer.appendChild(ratedContainer);
}

async function getSingleProduct(id) {
    const response = await fetch(`${BASE_URL}/${id}`);
    const result = await response.json();
    return result;
}

function renderSingleProduct(product) {
    const productContainer = document.createElement("div");
    productContainer.classList.add("product");
    productContainer.innerHTML += `
    <h3 class="product-title">${product.title}</h3>
    <h4 class="product-subtitle">${product.price}</h4>
    <img src="${product.image}">
    <p class="product-desc">${product.description}</p>`
    appContainer.innerHTML = "";
    appContainer.appendChild(productContainer);
}

renderBtn.addEventListener("click", function(event) {
    initApplication();
});

productBtn.addEventListener("click", async function(event) {
    const productId = Number(productInput.value);

    if (!Number.isNaN(productId) && productId > 0) {
        const product = await getSingleProduct(productId);
        renderSingleProduct(product);
    };
});

async function initApplication() {
    productArray = await getAllProducts();
    renderAllProducts(productArray);
    calculateSum(productArray);    
    getHighestRated(productArray);
}

initApplication();