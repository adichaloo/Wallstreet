document.getElementById("submitButton").onclick = function(){

    selectString = document.getElementById("share").value
    currentPrice = ""
    sharesLeft = ""
    for(let i = selectString.length - 1;selectString[i]!=".";i--){
        currentPrice = selectString[i]+currentPrice
    }
    for(let i = selectString.length - 1;selectString[i]!="-";i--){
        sharesLeft = selectString[i]+sharesLeft
    }

    currentPrice = parseInt(currentPrice)
    sharesLeft = parseInt(sharesLeft)

    bidPrice = parseInt(document.getElementById("bidPrice").value)
    quantity = parseInt(document.getElementById("quantity").value)

    if(isNaN(bidPrice) || isNaN(quantity) || bidPrice<=0 || quantity<=0 || quantity>sharesLeft || bidPrice<0.9*currentPrice || bidPrice>1.1*currentPrice){
        document.getElementById("validation").style = "color:red"
    }
    else{
        document.getElementById("submitForm").click()
    }
}