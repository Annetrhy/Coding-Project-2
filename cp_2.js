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

