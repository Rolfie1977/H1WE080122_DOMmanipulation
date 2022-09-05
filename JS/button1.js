const h1 = document.querySelectorAll("h1")

const button1 = document.getElementById("ex1")

button1.addEventListener("click", customText);

function customText() {
    


    h1[0].textContent = "Test om dette virker"
}

const button2 = document.getElementById("ex2")
const paragraffer = document.querySelectorAll("p")

button2.addEventListener("click", redText );

function redText() {
    for (let i = 0; i < paragraffer.length; i++) {
        paragraffer[i].style = "color: red"
        
        console.log(i);
    }
}





const button3 = document.getElementById("ex3")
const listelements = document.querySelectorAll("li")


button3.addEventListener("click", rotate);

function rotate() {
    for (let i = 0; i < listelements.length; i++) {
        listelements[i].style = "transition: 1s; transform: rotate(180deg)"

        }
}


const button4 = document.getElementById("ex4")
const headerlist = document.querySelectorAll("h1, h2, h3, h4, h5")

button4.addEventListener("click", hide);

function hide(){
    for (let i = 0; i < headerlist.length; i++) {
        headerlist[i].style.display = "none"
        

    }
}

const button5 = document.getElementById("ex5")
const anchorList = document.querySelectorAll("a")

button5.addEventListener("click", ()=>{ 
        for (let i = 0; i < anchorList.length; i++) {
            anchorList[i].style = "font-size: x-large"
            
        }
} )


const button6 = document.getElementById("ex6")
const olList = document.querySelectorAll("ol")

button6.addEventListener("click",()=>{
    const newList = document.createElement("li")
    newList.textContent = "Rasmus styrer"
    olList[0].appendChild(newList)
    console.log(button6);
   
} )

const button7 = document.getElementById("ex7")
const listList = document.querySelectorAll("li")

button7.addEventListener("click", changeColor)
function changeColor()  {
    for (let i = 0; i < listList.length; i++) {
        

        if(i%2==0){
            listList[i].style = "color:red"
        }

        
    }
    


}

const button11 = document.getElementById("ex11")
const body = document.querySelectorAll(body)