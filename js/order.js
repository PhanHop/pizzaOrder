// Show delivery address after select delivery checkbox
function selectDeliveryRadio(radioCheckId,divCheckId){
    let delivery = document.getElementById(radioCheckId);
    if(delivery.checked == true){
        document.getElementById(divCheckId).classList.add("deliveryAddress");
    }
    
}
// Remove delivery address after select pickup checkbox
function selectPickupRadio(radioCheckId, divCheckId){
    let delivery = document.getElementById(radioCheckId);
    if(delivery.checked == true){
        document.getElementById(divCheckId).classList.remove("deliveryAddress");
    }  
}

// Show auto fill address input checkbox after click delivery radio
function autoFillAddress(radioCheckId,autoFill){
    let delivery = document.getElementById(radioCheckId);
    if(delivery.checked == true){
        document.getElementById(autoFill).classList.add("deliveryAddress");
    }
}
// Remove auto fill address input checkbox after click pickup radio
function removeAutoFillAddress(radioCheckId,autoFill){
    let delivery = document.getElementById(radioCheckId);
    if(delivery.checked == true){
        document.getElementById(autoFill).classList.remove("deliveryAddress");
    }   
}
// auto fill delivery address 
var deliveryInput = document.querySelector("#deliveryAddressInput");
var autoFillInputCheckbox = document.querySelector("#autoFillInputCheckbox");
var billingAddress = document.querySelector("#billingAddress");
autoFillInputCheckbox.onclick = function(){
    let deliveryInputValue = deliveryInput.value; 
    if(deliveryInputValue == ''){
        alert("Please enter your delivery address first");
        autoFillInputCheckbox.checked = false;
    }
    else{
        if(autoFillInputCheckbox.checked == true){
            billingAddress.value = deliveryInputValue;
        }
        else{
            billingAddress.value = '';
        }
    }
}

