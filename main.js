const url = "https://www.course-api.com/javascript-store-products";

// STEP 3: Promise-based fetch (.then)
function fetchProductsThen() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      data.forEach(product => {
        console.log(product.fields.name);
      });
    })
    .catch(error => {
      console.error("Error fetching products (then):", error);
    });
}

// STEP 4: Async/Await fetch
async function fetchProductsAsync() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayProducts(data);
  } catch (error) {
    handleError(error);
  }
}

// STEP 5: Display products
function displayProducts(products) {
  const container = document.getElementById("product-container");

  // Clear container (good practice)
  container.innerHTML = "";

  products.slice(0, 5).forEach(product => {
    const { name, price, image } = product.fields;

    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <img src="${image[0].url}" alt="${name}" />
      <p class="product-name">${name}</p>
      <p class="product-price">$${(price / 100).toFixed(2)}</p>
    `;

    container.appendChild(productCard);
  });
}

// STEP 6: Error handler
function handleError(error) {
  console.error(`An error occurred: ${error.message}`);
}

// STEP 7: Call functions
fetchProductsThen();
fetchProductsAsync();