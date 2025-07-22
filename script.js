var moins=document.querySelectorAll("#moins")
var plus=document.querySelectorAll("#plus")
var quantity=document.querySelectorAll("#quantity")
var add=document.querySelectorAll("#add")
var table=document.querySelector("#table")
var images=document.querySelectorAll("#picture")
var names=document.querySelectorAll(".card-title")
var prices=document.querySelectorAll("#price")
var total=document.querySelector("#total")
var remove=document.querySelectorAll("#remove")
var rows=document.querySelectorAll("#row")
var hearts=document.querySelectorAll(".fa-heart")
console.log(rows)
function calculTotal(){
    var price=document.querySelectorAll("#price-unitaire")
    var quant=document.querySelectorAll("#quant")
    var result=0
    for (let i = 0; i < price.length; i++) {
        result+=price[i].innerHTML* quant[i].innerHTML
        
    }
    return total.innerHTML=result
}


for (let i = 0; i < moins.length; i++) {
    moins[i].addEventListener("click",function(){
        if (quantity[i].innerHTML>0) {      
            quantity[i].innerHTML--
        }
    }) 
}
for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click",function(){
            quantity[i].innerHTML++
    })   
}

for (let i = 0; i < add.length; i++) {
    add[i].addEventListener("click",function(){
        var tr=document.createElement("tr")
        tr.id="row"
        tr.innerHTML=`
        <td>
                <img height="50" width="50" src="${images[i].src}" alt="">
            </td>
            <td>${names[i].innerHTML} </td>
            <td id="price-unitaire"> ${prices[i].innerHTML}</td>
            <td id="quant">${quantity[i].innerHTML}</td>
            <td>
                <button id="remove">X</button>
            </td>
        `
        if (quantity[i].innerHTML>0) {
           table.appendChild(tr) 
           calculTotal()
           remove=document.querySelectorAll("#remove")
           rows=document.querySelectorAll("#row")
           for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener("click",function(){
        console.log("hhhhh")
        rows[i].remove()
        calculTotal()
    })
    
}
           console.log(rows)
        }
        else{
            alert("you need to choose the quantity")
        }
        
    })
    
}

for (let i = 0; i < hearts.length; i++) {
   hearts[i].addEventListener("click",function(){
    if (hearts[i].style.color=="") {
       hearts[i].style.color="red" 
    }
    else{
       hearts[i].style.color="" 
    }
    
   })
    
}




