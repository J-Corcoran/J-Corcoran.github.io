const drivers = [
    'Hamilton', 
    'Verstappen', 
    'Perez', 
    'Bottas', 
    'Sainz', 
    'Mazepin', 
    'Leclerc', 
    'Vettel', 
    'Ricciardo',
    'Norris', 
    'Russell',
    'Latifi',
    'Schumacher',
    'Giovinazzi',
    'Raikkonen',
    'Alonso',
    'Ocon',
    'Perez',
    'Gasly',
    'Tsunoda'
]

let randomTopThree = () =>{
    let pick = []
    let text = '';

    for (let i = pick.length; i <= 2;){
    let picker = drivers[Math.floor(Math.random() * drivers.length)];
    	
      if (picker === pick[0] || picker === pick[1] || picker === pick[2]){
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

//below allows you to hide and unhide the randomized list without re-running.
const hideMe = () => {
    var x = document.getElementById("clickMe");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }