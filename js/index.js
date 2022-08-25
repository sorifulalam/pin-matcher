

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

