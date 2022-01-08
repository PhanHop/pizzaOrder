
var slideIndex = 0;
showSlide();
function showSlide(){
    var slides = document.getElementsByClassName("slide");
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex>slides.length){
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlide, 4000);
}

function buyOrderSizeS(obj){
    var elmParent = obj.parentElement.parentElement.parentElement;  
    let x = elmParent.querySelector(".price");
    let price = elmParent.querySelector(".priceSizeS").innerHTML;
    x.innerHTML = price;
    x.classList.add("clickSelectSize");
    elmParent.querySelector(".sizeS").classList.add("modal-product-name");
    elmParent.querySelector(".sizeM").classList.remove("modal-product-name");
    elmParent.querySelector(".sizeL").classList.remove("modal-product-name");
}
function buyOrderSizeM(obj){
    var elmParent = obj.parentElement.parentElement.parentElement;  
    let x = elmParent.querySelector(".price");
    let price = elmParent.querySelector(".priceSizeM").innerHTML;
    x.innerHTML = price;
    x.classList.add("clickSelectSize");
    elmParent.querySelector(".sizeM").classList.add("modal-product-name");
    elmParent.querySelector(".sizeS").classList.remove("modal-product-name");
    elmParent.querySelector(".sizeL").classList.remove("modal-product-name");
}
function buyOrderSizeL(obj){
    var elmParent = obj.parentElement.parentElement.parentElement;  
    let x = elmParent.querySelector(".price");
    let price = elmParent.querySelector(".priceSizeL").innerHTML;
    x.innerHTML = price;
    x.classList.add("clickSelectSize");
    elmParent.querySelector(".sizeL").classList.add("modal-product-name");
    elmParent.querySelector(".sizeM").classList.remove("modal-product-name");
    elmParent.querySelector(".sizeS").classList.remove("modal-product-name");
}
function loadPizza(){
    let elmPizza = document.getElementById("pizza").firstElementChild;
    let xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        document.getElementById("productsId").innerHTML = this.responseText;
    }
    xhttp.open("GET", "./html/pizza.html");
    xhttp.send();
    elmPizza.classList.add("colorPizzaType");
}
loadPizza();
function loadProduct(id){
    switch(id){
        case 'pizza':
            productHtml = "./html/pizza.html";break;
        case 'dessert':
            productHtml = "./html/dessert.html";break;
        case 'spaghetti':
            productHtml = "./html/spaghetti.html";break;
        case 'salad':
            productHtml = "./html/salad.html";break;
        case "drink":
            productHtml = "./html/drink.html";break;
        case 'combo':
            productHtml = "./html/combo.html";break;
        default:
            productHtml = "./html/other.html";
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        document.getElementById("productsId").innerHTML = this.responseText;
    }
    xhttp.open("GET", productHtml);
    xhttp.send(); 
    var pizzaTypes = document.getElementsByClassName("pizzaTypeName"); 
    for(let i = 0; i < pizzaTypes.length; i++){
        pizzaTypes[i].classList.remove("colorPizzaType");
    }
    let elm = document.getElementById(id).firstElementChild;
    elm.classList.add("colorPizzaType");
}
// quanlity increase
function increaseQuanlity(obj){
    let product = obj.parentElement.parentElement;
    let quanlity = product.querySelector(".quantily");
    let quanlityIncrease = parseInt(quanlity.innerHTML)  + 1;
    quanlity.innerHTML = quanlityIncrease;
}
// quanlity reduction
function reductionQuanlity(obj){
    let product = obj.parentElement.parentElement;
    let quanlity = product.querySelector(".quantily");
    let quanlityReduction = parseInt(quanlity.innerHTML);
    if(quanlityReduction > 1){
        quanlityReduction = quanlityReduction  - 1;    
    }
    quanlity.innerHTML = quanlityReduction;
}

// Get the modal
var modalProductItems = document.getElementById("modalItems");
// add to cart
function addCart(obj){
    let product = obj.parentElement.parentElement;
    if(!product.querySelector(".price").classList.contains("clickSelectSize")){
        alert("Please select size !");
    }
    else{
    // Specify the product to add to cart
        let buy = product.querySelector(".buy").classList.add("buy-click");
        let imgProduct = product.querySelector(".pizza-img").src;
        let nameProduct = product.querySelector(".product-name").innerHTML;
        let price = product.querySelector(".price").innerHTML;
        let quanlity = product.querySelector(".quantily").innerHTML;
        // Define modal
        let modal = document.getElementById("myModal");
        let span = document.getElementsByClassName("close")[0]; 
        modal.style.display = "block";
        // Append product to modal
        let modalContentItem = document.createElement("div");
        modalContentItem.className = "modal-content-item";
        let modalImgProduct = document.createElement("img");
        modalImgProduct.className = "modal-img-product";
        modalImgProduct.src = imgProduct;
        let modalPriceProduct = document.createElement("div");
        modalPriceProduct.className = "modal-price-product";
        let modalProductName = document.createElement("h3");
        modalProductName.className = "modal-product-name";
        modalProductName.innerHTML = nameProduct;
        let modalProductPrice = document.createElement("p");
        modalProductPrice.className = "modal-product-price";
        modalProductPrice.innerHTML = price;
        let modalQuanlity = document.createElement("span");
        modalQuanlity.innerHTML = "Quanlity: ";
        let modalProductQuantily = document.createElement("span");
        modalProductQuantily.innerHTML = quanlity;
        modalProductPrice.appendChild(modalQuanlity);
        modalQuanlity.appendChild(modalProductQuantily);
        modalPriceProduct.appendChild(modalProductName);
        modalPriceProduct.appendChild(modalProductPrice);
        modalPriceProduct.appendChild(modalQuanlity);
        let deleteProduct = document.createElement("span");
        deleteProduct.className = "delete-product";
        deleteProduct.innerHTML = "&times;";
        modalContentItem.appendChild(modalImgProduct);
        modalContentItem.appendChild(modalPriceProduct);
        modalContentItem.appendChild(deleteProduct);  
        modalProductItems.appendChild(modalContentItem);
    // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }   
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        // delete product
        var deleteProducts = document.querySelectorAll(".delete-product"); 
        for(let i = 0; i<deleteProducts.length;i++){
            deleteProducts[i].onclick = function(){
                let xx = document.querySelectorAll(".delete-product"); 
                let productDelete = this.parentElement;
                modalProductItems.removeChild(productDelete);
                if(xx.length==1){
                    modal.style.display = "none";
                }              
            }
        }     
    }
}
function gotocart(){

}



