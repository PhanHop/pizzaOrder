function Validator(options){
    var selectorRules = {};
    function Validate(inputElement,rule){
        var errorMassage;
        var errorElement = inputElement.parentElement.querySelector(options.formMassage);
        var rules = selectorRules[rule.selector];
        for(var i=0; i < rules.length; i++){
            errorMassage = rules[i](inputElement.value);
            if(errorMassage){
                break;
            }
        }
        if(errorMassage){
            console.log(errorMassage);
            errorElement.innerText = errorMassage;
            inputElement.parentElement.classList.add('invalid');
        }else{
            errorElement.innerText = "";
            inputElement.parentElement.classList.remove('invalid');
        }
        return !errorMassage;
    }
    var formElement = document.getElementById(options.form);
    if(formElement){
        formElement.onsubmit = function(e){ 
            // 
            var isFormvalid = true;
            options.rules.forEach(function(rule){         
                var inputElement = formElement.querySelector(rule.selector);
                var errorElement = inputElement.parentElement.querySelector(options.formMassage);
                var isvalid = Validate(inputElement,rule);
                if(!isvalid){
                    isFormvalid = false;
                }
                if(inputElement){
                    inputElement.onblur = function(){
                        Validate(inputElement,rule);
                    }
                    inputElement.oninput = function(){
                        errorElement.innerText = '';
                        inputElement.parentElement.classList.remove('invalid');
                    }
                }
            })
            if(isFormvalid){
                alert("Successfully");
            }
            else{
                e.preventDefault();
            }
        }        
        options.rules.forEach(function(rule){
                if(Array.isArray(selectorRules[rule.selector])){
                    selectorRules[rule.selector].push(rule.test);
                }
                else{
                    selectorRules[rule.selector] = [rule.test];
                }  
        });


    }
}
Validator.isRequired = function(selector) {
    return {
        selector: selector,
        test: function(value){
            return value ? undefined:"Please enter this field !";
        }
    };
}
Validator.isEmail = function(selector) {
    return {
        selector: selector,
        test: function(value){
            var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regexEmail.test(value) ?undefined:"Incorrect email address entered.";
        }
    };
}
Validator.minLength = function(selector, min){
    return {
        selector: selector,
        test: function(value){
            return value.length >= min? undefined: 'Password must be at least '+ min +' characters .';
        }
    };
}
Validator.isConfirmPassword = function(selector, password){
    return {
        selector: selector,
        test: function(value){
            return value === password() ? undefined: "Re-enter the incorrect password.";
        }
    };
}