async function fetchProducts() {
  try {
    const response = await fetch("http://localhost:3000/products");
    const products = await response.json();

    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.className = "product-card";
      productDiv.innerHTML = `<h3>${product.name}</h3><p>Price: $${product.price}</p>`;
      productList.appendChild(productDiv);
    });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

fetchProducts();

// Handle GitHub button click
document.addEventListener("DOMContentLoaded", () => {
  const githubButton = document.getElementById("github-button");
  githubButton.addEventListener("click", () => {
    window.open("https://github.com/halimaarh/Week5-Frontend.git", "_blank");
  });
});
