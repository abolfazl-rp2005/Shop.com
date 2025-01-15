export const Products = {
  productList: [
    {
      id: "01",
      imgURL:
        "https://img01.ztat.net/article/spp-media-p1/6d49c735950845ff9daea2f4e564cfbc/2b86c631442e4b429759840fbe5cc405.jpg?imwidth=300",
      name: "ESTEEM DISCREET POCKET - Waistcoat - beige",
      price: 55.93,
    },
    {
      id: "02",
      imgURL:
        "https://img01.ztat.net/article/spp-media-p1/113a81c81e5b4845b9d5320ee2e5fcba/5b9e5ae65f2e4c7289ca9996f59c4518.jpg?imwidth=300",
      name: "Jacey Quinn Cardigan - beige melange",
      price: 59.99,
    },
    {
      id: "03",
      imgURL:
        "https://img01.ztat.net/article/spp-media-p1/dc855ebdc09249f89f6d2c0f3a4935fd/67e3a452f25c4b408f6eb78fdedddf15.jpg?imwidth=300",
      name: "Long sleeved top - off white",
      price: 57.34,
    },
    {
      id: "04",
      imgURL:
        "https://img01.ztat.net/article/spp-media-p1/8c74f4cf823249ca8530b38636d4a0cc/afb0f5d6698a4a79886a7b42549ee462.jpg?imwidth=300",
      name: "SDOLLI - Zip-up sweatshirt - grey",
      price: 35.95,
    },
  ],
  generateProductDom() {
    const productWrapper = document.getElementById("browse-products");
    this.productList.forEach((item, index) => {
      const productElement = document.createElement("div");
      productElement.innerHTML = `<img src="${item.imgURL}" class="product-image">
      <h2>${item.name}</h2>
      <div class="cart-control">
      <p>${item.price} $</p>
      <button class="add-to-cart-button">add to cart</button>
      </div>`;
      productElement.classList.add("product");
      productWrapper.append(productElement);
      document
        .getElementsByClassName("add-to-cart-button")
        [index].addEventListener("click", () => {
          this.addToCart(item.id);
        });
    });
  },
  addToCart(id) {
    console.log(id);
  },
};
