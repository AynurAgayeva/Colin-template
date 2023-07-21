
const  mobileMenu = document.querySelector('.menu');
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".close-menu");
const menuIcon = document.querySelector(".open-menu");
const parentDiv = document.querySelector("#sun");


console.log(screen.height)

parentDiv.style.height = screen.height+'px';

const toggleMenu =  ()=> {
  if (mobileMenu.classList.contains("showMenu")) {
     mobileMenu.classList.remove("showMenu");
     closeIcon.style.display = "none";
     menuIcon.style.display = "block";

     
  hamburger.style.position ="static";  
 
   
  } else {
    mobileMenu.classList.add("showMenu");
 
     hamburger.style.position ="fixed";
     closeIcon.style.display = "block";
     menuIcon.style.display = "none";
  }
}
hamburger.onclick = toggleMenu;













const langdata = {
    az : ["Ana Səhifə","Elementlər","Səhifələr","Bloq","Xüsusiyyətlər","Mən Colin Smith'əm","DİZAYNER & FRONTEND PROQRAMÇI"],
    en : ["Home","Elements","Pages","Blog","Features","I'm colin smith","DESIGNER & FRONTEND DEVELOPER"]
}

const langItem = document.querySelectorAll(".item");
const langBtn = document.querySelector("#langBtn");



if(localStorage.getItem("lang")===null && localStorage.getItem("langBtn")){
  localStorage.setItem("lang",langdata.az);
  localStorage.setItem("langBtn","AZ" )
} else{
  langBtn.onclick = ()=>{
    if(langBtn.innerHTML === "AZ"){
           localStorage.setItem("lang", langdata.az);
           localStorage.setItem("langBtn", "EN")
           for(let i in langdata.az){
            langItem[i].innerHTML = langdata.az[i];
           } langBtn.innerHTML = "EN" 
            }
          else{
            localStorage.setItem("lang", langdata.en);
           localStorage.setItem("langBtn", "AZ")
           for(let i in langdata.en){
            langItem[i].innerHTML = langdata.en[i];
           } langBtn.innerHTML = "AZ"
          }
           
    
  }
}



const modeBtn = document.querySelector("#mode-btn")

    const element = document.querySelector("#all-site");
      const imageLogo = document.querySelector(".dark-logo");
  const imageLogo1 = document.querySelector(".light-logo");
    const userImage = document.querySelector(".dark-image");
  const userImage1 = document.querySelector(".light-image");


    if(localStorage.getItem("theme")===null){

       localStorage.setItem("theme","light-theme")
    }
     const  myFunc = ()=>{
     
      if(element.classList.contains("dark-theme")){
        element.classList.remove("dark-theme");
        element.classList.add("light-theme");
        imageLogo.style.display = "block";
       imageLogo1.style.display = "none";
         userImage.style.display = "block";
     userImage1.style.display = "none";
        localStorage.setItem("mode1", "block");
       localStorage.setItem("mode2", "none");
      localStorage.setItem("mode3","block");
     localStorage.setItem("mode4","none");
        
        localStorage.setItem("theme","light-theme")
      } else{
element.classList.remove("light-theme");
        element.classList.add("dark-theme");
       imageLogo.style.display = "none";
       imageLogo1.style.display = "block";
       userImage.style.display = "none";
     userImage1.style.display = "block";
         localStorage.setItem("mode1", "none");
     localStorage.setItem("mode2", "block");
       localStorage.setItem("mode3","none");
     localStorage.setItem("mode4","block");
        localStorage.setItem("theme","dark-theme")
      }
    }
    
element.classList.add(localStorage.getItem("theme"));

modeBtn.onclick = myFunc;
  

imageLogo.style.display = localStorage.getItem("mode1");
imageLogo1.style.display = localStorage.getItem("mode2");
userImage.style.display = localStorage.getItem("mode3");
userImage1.style.display = localStorage.getItem("mode4");












