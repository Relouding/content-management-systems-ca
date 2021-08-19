const baseUrl = "https://wordpress.relouding.eu/wp-json/wc/store/products"
const productContainer = document.querySelector(".product-container-new")
const loader = document.getElementById("loader");
getData();

function getData() {
  fetch("https://wordpress.relouding.eu/wp-json/wc/store/products", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        getProducts(data[i]);
      }
      loader.style.display = "none";
    })
    .catch((err) => {
      console.error(err);
    });
}

async function getProducts(url){
    const response = await fetch(url);
    const products = await response.json();

    products.forEach(function(product){
        productContainer.innerHTML += `
        <div class="product-new"><h2 class="h3">${product.name}</h2>
        <div class="product-image-new" style="background-image:url('${product.image}')>
        </div></div>
        `
    })
}

getProducts(baseUrl);