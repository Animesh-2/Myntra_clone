var womensData = [

  ]

localStorage.setItem("WomenData", JSON.stringify(womensData));

var wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function displayProducts(arr){
arr.forEach(function(Item) {
  var img = document.createElement("img");
  var brand = document.createElement("h5");
  var description = document.createElement("h5");
  var price = document.createElement("h5");
  var btnWish = document.createElement("button");

  var obj = {
      img: Item.images,
      brand: Item.brand,
      description: Item.description,
      price: Item.price
  };

  img.src = Item.images.image1;
  brand.innerText = Item.brand;
  description.innerText = Item.description;
  price.innerText = "Our price " + Item.price;
  btnWish.innerText = "Add to Wishlist";
  
  // style
  img.style.width="100%";
  

  var div = document.createElement("div");
  div.append(img, brand, description, price, btnWish);

  var div1 = document.getElementById("data");
  div1.append(div);

  btnWish.addEventListener("click", function() {
      wishlist.push(obj);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }); 
});
}

displayProducts(womensData);

// sort by Rec
let sortButtonRec = document.getElementById("sortButtonRec");
sortButtonRec.addEventListener("change", sortProductsRec);

function sortProductsRec() {
  let sortCriteria = sortButtonRec.value;
  let productList = JSON.parse(localStorage.getItem("WomenData"));

  let updatedProductList = productList.sort((prodA, prodB) => {
    if(sortCriteria === "whatsNew") {
      return prodB.id - prodA.id;
    } else if (sortCriteria === "popularity") {
      return prodA.rating - prodB.rating;
    } else {
      return true;
    }
  });
  data.innerHTML=""
  displayProducts(updatedProductList);
}

//sort by price
let sortButtonPrice = document.getElementById("sortButtonPrice");
sortButtonPrice.addEventListener("change", sortProductsPrice);

function sortProductsPrice() {
  let sortCriteria = sortButtonPrice.value;
  let productList = JSON.parse(localStorage.getItem("WomenData"));

  let updatedProductList = productList.sort((prodA, prodB) => {
    if (sortCriteria === "asc") {
      return prodA.price - prodB.price;
    } else if (sortCriteria === "desc") {
      return prodB.price - prodA.price;
    }else {
      return true;
    }
  });
  data.innerHTML=""
  displayProducts(updatedProductList);
}

// sort by Rating
let sortButtonRating = document.getElementById("sortButtonRating");
sortButtonRating.addEventListener("change", sortProductsRating);

function sortProductsRating() {
  let sortCriteria = sortButtonRating.value;
  let productList = JSON.parse(localStorage.getItem("WomenData"));

  let updatedProductList = productList.sort((prodA, prodB) => {
    if (sortCriteria === "rating") {
      return prodB.rating - prodA.rating;
    } else if (sortCriteria === "discount") {
      return prodB.discount - prodA.discount;
    } else {
      return true;
    }
  });
  data.innerHTML=""
  displayProducts(updatedProductList);
}

//filter Brand
let FilterBrand = document.getElementById("filterButtonBrand");

FilterBrand.addEventListener("click", (event) => {
    let productList = JSON.parse(localStorage.getItem("WomenData"));
    let filter = event.target.checked;
    let sortCriteriaA = sortButtonRec.value;
    let sortCriteriaB = sortButtonPrice.value;
    let sortCriteriaC = sortButtonRating;
    let filterCriteria = event.target.value;
    if (filter) {
      let updatedProductList = productList.filter((prod) => {
        if (filterCriteria === "Roadster") {
          return prod.brand == "Roadster";
        } else if (filterCriteria === "WROGN") {
          return prod.brand == "WROGN";
        } else if (filterCriteria === "HRX by Hrithik Roshan") {
          return prod.brand == "HRX by Hrithik Roshan";
        } else if (filterCriteria === "Louis Philippe Sport") {
          return prod.brand == "Louis Philippe Sport";
        } else if (filterCriteria === "Puma") {
          return prod.brand == "Puma";
        } else {
          return true;
        }
      }).sort((prodA, prodB) => {
        if (sortCriteriaB === "asc") {
          return prodA.price - prodB.price;
        } else if (sortCriteriaB === "desc") {
          return prodB.price - prodA.price;
        } else if (sortCriteriaA === "whatsNew") {
          return prodB.id - prodA.id;
        } else if (sortCriteriaA === "popularity") {
          return prodA.rating - prodB.rating;
        } else if (sortCriteriaC === "rating") {
          return prodB.rating - prodA.rating;
        } else if (sortCriteriaC === "discount") {
          return prodB.discount - prodA.discount;
        } else {
          return true;
        }
      });
      data.innerHTML=""
      displayProducts(updatedProductList);
    }else{
      data.innerHTML=""
      displayProducts(womensData);
    }
  });

  //filter Price
  let FilterPrice = document.getElementById("filterButtonPrice");
  FilterPrice.addEventListener("change", (event) => {
    let productList = JSON.parse(localStorage.getItem("WomenData"));
    let filter = event.target.checked;
    let sortCriteriaA = sortButtonRec.value;
    let sortCriteriaB = sortButtonPrice.value;
    let sortCriteriaC = sortButtonRating;
    let filterCriteria = event.target.value;
    
    if (filter) {  
      let updatedProductList = productList.filter((prod) => {
        if (filterCriteria === "174-1881") {
          return prod.price >= 174 && prod.price <= 1881;
        } else if (filterCriteria === "1881-3588") {
          return prod.price > 1881 && prod.price <= 3588;
        } else if (filterCriteria === "3588-5295") {
          return prod.price > 3588 && prod.price <= 5299;
        } else if (filterCriteria === "5295-7002") {
          return prod.price > 5295 && prod.price <= 7002;
        } else {
          return true;
        }
      }).sort((prodA, prodB) => {
        if (sortCriteriaB === "asc") {
          return prodA.price - prodB.price;
        } else if (sortCriteriaB === "desc") {
          return prodB.price - prodA.price;
        } else if (sortCriteriaA === "whatsNew") {
          return prodB.id - prodA.id;
        } else if (sortCriteriaA === "popularity") {
          return prodA.rating - prodB.rating;
        } else if (sortCriteriaC === "rating") {
          return prodB.rating - prodA.rating;
        } else if (sortCriteriaC === "discount") {
          return prodB.discount - prodA.discount;
        } else {
          return true;
        }
      });
      data.innerHTML=""
      displayProducts(updatedProductList)
    }else{
      data.innerHTML=""
      displayProducts(womensData);
    }
  });

  //filter Discount
  let FilterDiscount = document.getElementById("filterButtonDiscount");
  FilterDiscount.addEventListener("change", (event) => {
    let productList = JSON.parse(localStorage.getItem("WomenData"));
    let filter = event.target.checked;
    let sortCriteriaA = sortButtonRec.value;
    let sortCriteriaB = sortButtonPrice.value;
    let sortCriteriaC = sortButtonRating;
    let filterCriteria = event.target.value;
    
    if (filter) {  
      let updatedProductList = productList.filter((prod) => {
        if (filterCriteria === "10") {
          return prod.discount >= 10;
        } else if (filterCriteria === "20") {
          return prod.discount >= 20;
        } else if (filterCriteria === "30") {
          return prod.discount >= 30;
        } else if (filterCriteria === "40") {
          return prod.discount >= 40;
        } else if (filterCriteria === "50") {
          return prod.discount >= 50;
        } else if (filterCriteria === "60") {
          return prod.discount >= 60;
        } else {
          return true;
        }
      }).sort((prodA, prodB) => {
        if (sortCriteriaB === "asc") {
          return prodA.price - prodB.price;
        } else if (sortCriteriaB === "desc") {
          return prodB.price - prodA.price;
        } else if (sortCriteriaA === "whatsNew") {
          return prodB.id - prodA.id;
        } else if (sortCriteriaA === "popularity") {
          return prodA.rating - prodB.rating;
        } else if (sortCriteriaC === "rating") {
          return prodB.rating - prodA.rating;
        } else if (sortCriteriaC === "discount") {
          return prodB.discount - prodA.discount;
        } else {
          return true;
        }
      });
      data.innerHTML=""
      displayProducts(updatedProductList)
    }else{
      data.innerHTML=""
      displayProducts(womensData);
    }
  });
