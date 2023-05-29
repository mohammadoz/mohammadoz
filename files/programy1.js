var li1 =document.querySelectorAll(".li1")





function active(){
    li1.forEach((item)=>
       item.classList.remove("active")
    );
    li1.forEach((item)=>
     item.style.borderBottomColor =" transparent"
 );

    this.classList.add("active");
    this.style.borderBottomColor =" #e6ae57";
  

}
li1.forEach((item)=>
item.addEventListener("click",active)
)
////////////////////////////
var reem =document.querySelectorAll(".lh");



reem.forEach((lili)=>
lili.addEventListener("click", function(){
this.classList.toggle('life');
})

)
////////////////////////////////////////
let b33 =document.getElementById("b3")
let b44 =document.getElementById("b4")

b33.addEventListener("click",function(){
b44.style.opacity="0";
b33.style.cursor="auto";

})
/////////////////////////////////////////
var s100 =document.getElementById("s1000");
var s101 =document.getElementById("s1001");
var s102 =document.getElementById("s1002");

s100.addEventListener("click",function(){
    s101.innerHTML = +s101.innerHTML + +1;
})
s102.addEventListener("click",function(){
if(+s101.innerHTML > 1){
      s101.innerHTML = +s101.innerHTML - +1;
}
})
// /////////////////////////////
/////////////////////////////
/////////////////////////
/////////////////////
/////////////////
//////////////

var catf =document.getElementById("catf");
var img20 =document.getElementById("img20")

img20.addEventListener("click",function(){
    catf.remove();
})

var catf1 =document.getElementById("catf1");
var img201 =document.getElementById("img201")

img201.addEventListener("click",function(){
    catf1.remove();
})

var deluxe =document.getElementById("exit")
var dodo=document.getElementById("coto")
var basket =document.getElementById('addbasket')

basket.addEventListener("click",function(){
    
    dodo.style.display="block"
})


deluxe.addEventListener("click",function(){
    dodo.style.display="none";
})

// ////////////////////////












