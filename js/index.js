

let displayCatch = document.getElementById('displayCatch')

function genaratePin(){
    let genarate = Math.round(Math.random() * 10000);
    document.getElementById("displayCatch").value=" "
    displayCatch.value += genarate
   
    return genarate   
    
}


function getPin(){
    let pin = genaratePin()   
    let clearPin = pin +'';
    if(clearPin.length===4){
        return pin
    }
    else{
        return getPin()
    }
}

let displayNumber =document.getElementById('displayNumber')

function digitNumber(digit){
    displayNumber.value +=digit
}

function digitClear(){
    displayNumber.value=" "
}

function digitDlet(){
    displayNumber.value = displayNumber.value.slice(0,-1)
}

function clickNumber(){
    let getPin = document.getElementById('displayCatch')
   let curentPin=getPin.value;

    let displayNumber =document.getElementById('displayNumber')
   let typedNumber = displayNumber.value;

    let notSuccesMessage =document.getElementById('notSuccesMessage')

    let successMessage = document.getElementById('successMessage')

    if(typedNumber ===curentPin){
        successMessage.style.display='block'
        notSuccesMessage.style.display='none'
    }
    else{
        
        notSuccesMessage.style.display='block'
        successMessage.style.display='none'
    }

    
}