
const spinPic = () =>{
    
document.getElementById("mazespin").animate([
    {transform: 'rotate(360deg)'},
    //{transform: 'skewY(180deg)'},

  ], {
    duration: 2000,
    iterations: 1,
    delay: 300
  });
 
};

const spinMe = document.getElementById("mazespin")
  spinMe.addEventListener("click", spinPic, false);