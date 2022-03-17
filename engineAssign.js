const engineManufacturer = [
    "Mercedes",
    "Red Bull Powertrains",
    "Ferrari",
    "Renault" 
];

let engineAssign = () =>{
    let pick = []
    let text = '';
    let names = ["Joe", "Sam", "Ben", "Tom"];

    for (let i = pick.length; i <= 3;){
    let picker = engineManufacturer[Math.floor(Math.random() * engineManufacturer.length)];
    	
      if (picker === pick[0] || picker === pick[1] || picker === pick[2] || picker === pick[3]){
        continue;
        } else {
      pick.push(picker)
          i++
        }
    }
    //loop through pick array to display it
    for (let i = 0; i < pick.length; i++ ){
        text += `<li id="engineList">${names[i]} supports: ${pick[i]} powered cars</li>`;
    }
    
    document.getElementById("engines").innerHTML = `${text}`;
}

let count = 0;

$('#chooseEngine').on('click', event =>{
    if(count >= 1){
        document.getElementById("notAllowed").innerHTML = 'You can only click this once!';
    } else {
        count=1;
    engineAssign();
    }
  $('#engines').slideDown(500);
})