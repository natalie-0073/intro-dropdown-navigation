const closeSide = document.querySelector("#close-img");
const openSide=document.querySelector('#open-menu');
const features=document.querySelectorAll("#features");
const company =document.querySelectorAll("#company");
const arrowFeat=document.querySelectorAll('#arrow-features');
const arrowCom=document.querySelectorAll("#arrow-company");
const sidenav=document.querySelector("#sidenav");
const featList=document.querySelector("#sidenav-features");
const comList=document.querySelector("#sidenav-company");
const overlay=document.querySelector(".overlay");

openSide.addEventListener('click',()=>{
    sidenav.style.width="250px";
    overlay.style.display="block";
})
closeSide.addEventListener('click',()=>{
    sidenav.style.width="0px";
    overlay.style.display="none";
})
features.forEach((feature)=>{
    feature.addEventListener('click', ()=>{
        if(sidenav.style.width==="250px"){
            featList.classList.toggle("unactive");
            
        }
        else{
            document.querySelector("#features-list").classList.toggle("unactive");
            
         }
         arrowFeat.forEach((arrow)=>{
            
            arrow.classList.toggle("arrow-up");
            })
    })
    
})

company.forEach((com)=>{
    com.addEventListener('click', ()=>{
        if(sidenav.style.width==="250px"){
            comList.classList.toggle("unactive");
            
        }
        else{
            document.querySelector("#company-list").classList.toggle("unactive");
        }
        
        arrowCom.forEach((arrow)=>{
        arrow.classList.toggle("arrow-up");
        })
    })
    
})
// arrows.forEach((arrow)=>{
//     arrow.addEventListener('click', ()=>{
//         arrow.classList.toggle("arrow-up");
//     })
// })