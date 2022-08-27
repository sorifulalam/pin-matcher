

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
    const getPin = document.getElementById('displayCatch')
    const curentPin=getPin.value;

    const displayNumberr =document.getElementById('displayNumber')
    const typedNumber = displayNumberr.value;

    const notSuccesMessage =document.getElementById('notSuccesMessage')

    const successMessage = document.getElementById('successMessage')

    if(typedNumber ===curentPin){
        successMessage.style.display='block'
        notSuccesMessage.style.display='none'
    }
    else{
        
        notSuccesMessage.style.display='block'
        successMessage.style.display='none'
    }

    
}