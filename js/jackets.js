const baseUrl = "https://wordpress.relouding.eu/wp-json/wc/store/products"
const productContainer = document.querySelector(".product-container-new")

async function getProducts(url){
    const response = await fetch(url);
    const products = await response.json();
    products.forEach(function(product){
        productContainer.innerHTML += `
        <div class="product-new"><h1>${product.name}</h1>
        <div class="product-image-new" style="background-image:url('${product.image}')>
        </div></div>
        `
    })
}

getProducts(baseUrl);