console.log("script running :)");
document.querySelector(".img2").style.display="none";
document.querySelector(".navimg").addEventListener("click",()=>{
    document.querySelector(".navbar").classList.toggle("navbar-go");
    if(document.querySelector(".navbar").classList.contains("navbar-go")){
        document.querySelector(".img1").style.display="inline";
        document.querySelector(".img2").style.display="none";
    }
    else{
        document.querySelector(".img1").style.display="none";
        setTimeout(() => {
            document.querySelector(".img2").style.display="inline";
        }, 300);
    }
});