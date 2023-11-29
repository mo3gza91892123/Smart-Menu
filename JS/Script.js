// const url  = "https://api.escuelajs.co/api/v1/products";
let conter = 0;
const url  = "https://fakestoreapi.com/products";//"https://dummyjson.com/products/";
fetch(url)
.then(function(respons){
    return respons.json();
})
.then(function (data) {
    console.log(data)
    document.getElementById("rowProdact").innerHTML = "";
    data.slice(0,20).forEach(prodact => {
        conter++;
        document.getElementById("rowProdact").innerHTML += `
            <div class="col-md-6 col-lg-4 col-xl-3">
                <div id="product-8" class="single-product">
                    <div class="part-1">
                        <img style="width: 100%;" src="${prodact.image}">
                    </div>
                    <div class="part-2">
                        <h3 class="product-title">${prodact.title}</h3>
                        <p>${(prodact.description.length > 60) ? prodact.description.slice(0,60)+"..." : prodact.description}</p>
                        <h4 class="product-price">${prodact.price} ج م</h4>
                    </div>
                </div>
            </div>
        `;
});
            // <h4 class="product-old-price">$79.99</h4>
            // <div class="product">
            //     <img src="${prodact.images[0]}">
            //     <h3>${prodact.title}</h3>
            //     <p>${(prodact.description.length > 60) ? prodact.description.slice(0,60)+"..." : prodact.description}</p>
            //     <h4 >${prodact.price} ج م</h4>
            //     </div>
        // <button>أضف إلى السلة </button>
})
// <p>${prodact.description}</p>
// .then(res => res.json())
// .then(
    // );