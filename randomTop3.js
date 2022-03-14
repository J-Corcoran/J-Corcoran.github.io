const drivers = [
    'Hamilton', 
    'Hamilton',
    'Hamilton',
    'Hamilton',
    'Verstappen',
    'Verstappen',
    'Verstappen',
    'Verstappen', 
    'Perez', 
    'Perez',
    'Perez',
    'Bottas', 
    'Bottas', 
    'Sainz', 
    'Sainz', 
    'Sainz', 
    'Sainz', 
    'Leclerc', 
    'Leclerc', 
    'Leclerc', 
    'Vettel',
    'Vettel',
    'Vettel', 
    'Ricciardo',
    'Ricciardo',
    'Ricciardo',
    'Norris',
    'Norris', 
    'Norris', 
    'Norris',  
    'Russell',
    'Russell',
    'Russell',
    'Latifi',
    'Schumacher',
    'Alonso',
    'Alonso',
    'Ocon',
    'Ocon',
    'Gasly',
    'Gasly',
    'Tsunoda',
    'Stroll',
    'Albon',
    'Albon',
    'Guanyu',
    'Magnussen',
    'Magnussen'
  ]

let randomTopThree = () =>{
    let pick = []
    let text = '';

    for (let i = pick.length; i <= 2;){
    let picker = drivers[Math.floor(Math.random() * drivers.length)];
    	
      if (picker === pick[0] || picker === pick[1] || picker === pick[2]){
        continue;
        } else {
      pick.push(picker)
          i++
        }
    }
    //loop through pick array to display it
    for (let i = 0; i < pick.length; i++ ){
        text += `<li>${i+1}. ${pick[i]}</li>`;
    }
    
    document.getElementById("clickMe").innerHTML = `Your random top 3 is: ${text}`;
}

$('#chooseRandom').on('click', event =>{
  randomTopThree();
  $('#clickMe').slideDown(500);
})
//below allows you to hide and unhide the randomized list without re-running.
/*
const hideMe = () => {
    var x = document.getElementById("clickMe");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  */

$('#hideList').click(() => {
  $('#clickMe').slideToggle(500);
});

  //Adding event listeners

/*
  const chooseRandom = document.getElementById('chooseRandom');
  chooseRandom.addEventListener('click', randomTopThree, false);
*/
/*const hideList = document.getElementById('hideList');
  hideList.addEventListener('click', hideMe, false);
  */
