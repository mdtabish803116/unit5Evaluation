

var pokemonArr = JSON.parse(localStorage.getItem("pokemonArr"));

if(pokemonArr === null){ 
    localStorage.setItem("pokemonArr" , JSON.stringify([]));
var myResponse = fetch("https://pokeapi.co/api/v2/pokemon/");

myResponse.then(function(res){
    res.json().then(function(result){
        var pokemonData = result.results;
    localStorage.setItem("pokemonArr", JSON.stringify(pokemonData));
    })
}).catch(function(err){
    console.log(err);
})

}

// displayData

pokemonArr.forEach(function(pokemon){
      var row = document.createElement("tr");
      var td1 = document.createElement("td");
        td1.textContent = pokemon.name
        row.append(td1);
        document.querySelector("#container1 tbody").append(row);
})


var pokemonVal = document.getElementById("searchBox").value;

document.getElementById("searchBox").addEventListener("change" , function(){ 
var myResponse = fetch(`https://pokeapi.co/api/v2/pokemon/raticate`);

myResponse.then(function(res){
    res.json().then(function(result){

         var searchData = result;
         displayData(searchData);
             console.log(searchData);
    })
}).catch(function(err){
    console.log(err);
})

function displayData(data){
    document.getElementById("pokeContainer").innerText = "";
     var pokeCart = document.createElement("div");
       var idDiv = document.createElement("div");
         idDiv.textContent = `id : ${data.id}`;
        var nameDiv = document.createElement("div");
          nameDiv.textContent = data.name;
         var heightDiv = document.createElement("div");
          heightDiv.textContent = `Height : ${data.height}`;
          var weightDiv = document.createElement("div");
             weightDiv.textContent = `Weight : ${data.weight}`;
      
      pokeCart.append(idDiv , nameDiv , heightDiv , weightDiv);
      
      document.getElementById("pokeContainer").append(pokeCart);

}


})

