

let arrow= document.getElementById("arrow");
arrow.addEventListener("click",function(){

    window.scrollTo({top: 1, behavior: 'smooth'});
    
 
})
let View_Work= document.getElementById("View_Work");
View_Work.addEventListener("click",function(){
    var allImages = document.getElementById("all_images");
    allImages.scrollIntoView();
  
})
window.addEventListener("scroll",hiddenarrow_homepage)
function hiddenarrow_homepage() {
    if(pageYOffset < document.documentElement.clientHeight){
        arrow.hidden = true;
     }else {
        arrow.hidden = false;
     }
    
    
}

