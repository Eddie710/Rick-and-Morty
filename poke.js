
const char = document.getElementById("char");
const stat = document.getElementById("stats");

var stats = Math.floor(Math.random()*827);
console.log(stats);




async function returnChar(event) {
    event.preventDefault();
    var stats = Math.floor(Math.random()*827);
    console.log(stats);
    await fetch(`https://rickandmortyapi.com/api/character/${stats}`)
    .then(Response => Response.json())
    .then(data=>{

       var char = data.name
       var pic = data.image
       var status = data.status
       var species = data.species
       var gender = data.gender

        document.getElementById('name').innerHTML = "Their name is: " + char;
        document.getElementById('pic').src =  pic;
        document.getElementById('pic').style.display = 'block';
        document.getElementById('status').innerHTML = "Their Last Known Status Is: " + status;
        document.getElementById('species').innerHTML = "Their Species Is: " + species;
        document.getElementById('gender').innerHTML = "Their Gender Is: " + gender;
        document.getElementById('btn').style.marginTop = "0px";
        
        console.log(data)
   
    })
   


   



   
}
    