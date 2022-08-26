
document.querySelector(".header-part").onclick=function(){
    if(document.getElementById("check").checked){
      document.querySelector(".animate-icon").style.transform="rotate(-90deg)";
    }
    else{
      document.querySelector(".animate-icon").style.transform="rotate(90deg)";
    }
  }