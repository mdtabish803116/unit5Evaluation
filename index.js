

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



document.getElementById("searchBox").addEventListener("change" , function(){ 
    var pokemonVal = document.getElementById("searchBox");
var myResponse = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonVal.value}`);

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
          var abilitiesDiv = document.createElement("div");
               abilitiesDiv.setAttribute("id" , "abilitiesDiv");
                var textAbility = document.createElement("div");
                   textAbility.innerText = "Abilities : "
                   abilitiesDiv.append(textAbility);
            data.abilities.forEach(function(each){
                 var abilityDiv = document.createElement("div")
                     abilityDiv.innerText = `${each.ability.name} ,`;
                abilitiesDiv.append(abilityDiv);
            })

            var movesDiv = document.createElement("div");
            movesDiv.setAttribute("id" , "movesDiv");
             var textMove = document.createElement("div");
                textMove.innerText = "Moves : "
                movesDiv.append(textMove);
         data.moves.forEach(function(each){
              var moveDiv = document.createElement("div")
                  moveDiv.innerText = `${each.move.name} ,`;
             movesDiv.append(moveDiv);
         })
      
      pokeCart.append(idDiv , nameDiv , heightDiv , weightDiv , abilitiesDiv , movesDiv);
      
      document.getElementById("pokeContainer").append(pokeCart);

}


})


document.getElementById("searchIcon").addEventListener("click" , function(){ 
    var pokemonVal = document.getElementById("searchBox");
var myResponse = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonVal.value}`);

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
          var abilitiesDiv = document.createElement("div");
               abilitiesDiv.setAttribute("id" , "abilitiesDiv");
                var textAbility = document.createElement("div");
                   textAbility.innerText = "Abilities : "
                   abilitiesDiv.append(textAbility);
            data.abilities.forEach(function(each){
                 var abilityDiv = document.createElement("div")
                     abilityDiv.innerText = `${each.ability.name} ,`;
                abilitiesDiv.append(abilityDiv);
            })

            var movesDiv = document.createElement("div");
            movesDiv.setAttribute("id" , "movesDiv");
             var textMove = document.createElement("div");
                textMove.innerText = "Moves : "
                movesDiv.append(textMove);
         data.moves.forEach(function(each){
              var moveDiv = document.createElement("div")
                  moveDiv.innerText = `${each.move.name} ,`;
             movesDiv.append(moveDiv);
         })
      
      pokeCart.append(idDiv , nameDiv , heightDiv , weightDiv , abilitiesDiv , movesDiv);
      
      document.getElementById("pokeContainer").append(pokeCart);

}


})
