//Variaveis globais
let pokemon_conteiner = document.querySelector(".database");
let select_option = document.querySelector("#select");
let podedex = document.querySelector(".main");
const p_load = document.querySelector(".load-text");
let gereneration_pokemons = [[],[],[],[],[],[],[],[],[]];
let types = [[],[],[],[],[],[],[],[],[]];
//Função para gerar o html e armazenar no array de gerações e tipos
async function generate(){
    for(let i = 1; i<1026; i++){
        //Requisição da api e criação de um elemento img
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        let pokemon_object = await response.json();
        let animeted_image = pokemon_object.sprites.versions["generation-v"]["black-white"].animated.front_default;
        let image = document.createElement("img");
        image.src = animeted_image;
        //Criação de uma div para armazenar o elemnto img
        let div_image = document.createElement("div");
        div_image.classList.add("div-image");
        div_image.appendChild(image);
        //Criação de  elementos para armazenar informações dos pokémons
        let p = document.createElement("p");//Elemnto p se o pokemon tiver um segundo tipo
        p.classList.add("p-type");
        //Elemnto p para armazenar o número na pokedex 
        let pokedex_id = document.createElement("p");
        pokedex_id.classList.add("p-type");
        pokedex_id.innerHTML = `#${pokemon_object.id}`;
        //Elemento p para armazenar o nome do pokémon
        let pokemon_name = document.createElement("p");
        pokemon_name.classList.add("p-type");
        pokemon_name.innerHTML = pokemon_object.name;
        //Criação da div para armazenar as informações
        let div = document.createElement("div");
        div.classList.add("divpokemon");
        div.appendChild(div_image);
        div.appendChild(pokedex_id);
        div.appendChild(pokemon_name);
        //Condicional para saber se o pokémon tem mais de um tipo
        //Caso sim o elememto p armazena as infomações dos dois tipos
        //E então é adicionado á div que armazena as informações
        if(pokemon_object.types.length > 1){
            p.innerHTML = pokemon_object.types[0].type.name+"/"+pokemon_object.types[1].type.name
            div.appendChild(p);
        }else{
            p.innerHTML = pokemon_object.types[0].type.name;
            div.appendChild(p);

        }
        //Verificação para armazenar corretamente os pokémons
        //Em suas respectivas gerações
        if(i >= 1 && i < 152){
            types[0].push(pokemon_object.types[0].type.name);
            div.id = "gen1";
            gereneration_pokemons[0].push(div);
            
        }
        if(i >= 152 && i < 252){
            types[1].push(pokemon_object.types[0].type.name);
            div.id = "gen2";
            gereneration_pokemons[1].push(div);
           
        }
        if(i >= 252 && i < 387){
            types[2].push(pokemon_object.types[0].type.name);
            div.id = "gen3";
            gereneration_pokemons[2].push(div);
           
        }
        if(i >= 387 && i < 494){
            types[3].push(pokemon_object.types[0].type.name);
            div.id = "gen4";
            gereneration_pokemons[3].push(div);   
        }
        if(i >= 494 && i < 650){
            types[4].push(pokemon_object.types[0].type.name);
            div.id = "gen5";
            gereneration_pokemons[4].push(div);  
        }
        if(i >= 650 && i < 722){
            let genegation_3d = pokemon_object.sprites.front_default
            image.src = genegation_3d;
            types[5].push(pokemon_object.types[0].type.name);
            div.id = "gen6";
            gereneration_pokemons[5].push(div); 
        }
        if(i >= 722 && i < 810){
            let genegation_3d = pokemon_object.sprites.front_default
            image.src = genegation_3d;
            types[6].push(pokemon_object.types[0].type.name);
            div.id = "gen7";
            gereneration_pokemons[6].push(div); 
        }
        if(i >= 810 && i < 906){
            let genegation_3d = pokemon_object.sprites.front_default
           image.src = genegation_3d;
           types[7].push(pokemon_object.types[0].type.name);
           div.id = "gen8";
           
           gereneration_pokemons[7].push(div);  
       }
       if(i >= 906 && i < 1026){
        let genegation_3d = pokemon_object.sprites.front_default
       image.src = genegation_3d;
       types[8].push(pokemon_object.types[0].type.name);
       div.id = "gen9";
       gereneration_pokemons[8].push(div);
   }
   }
}
//Função para mostras os pokémons da primeira gereção
//E esconder o elemento p;
function showarray(){
    p_load.style.display = "none";
    for(let i = 0; i<gereneration_pokemons[0].length; i++){
            pokemon_conteiner.appendChild(gereneration_pokemons[0][i]);
            gereneration_pokemons[0][i].classList.add(types[0][i]);    
    }
}
generate().then(showarray);
//Função para mudar de região conforme o value do select
function changeregion(){
    //Esvazia a div conteiner
    pokemon_conteiner.innerHTML = "";
    //Verificação do value do select 
    switch(select_option.value){
        case "Kanto":
            for(let i = 0; i<gereneration_pokemons[0].length; i++){
                pokemon_conteiner.appendChild(gereneration_pokemons[0][i]);
                gereneration_pokemons[0][i].classList.add(types[0][i]);    
            }
        break;
        case "Johto":
            for(let i = 0; i<gereneration_pokemons[1].length; i++){
                pokemon_conteiner.appendChild(gereneration_pokemons[1][i]);
                gereneration_pokemons[1][i].classList.add(types[1][i]);    
            }
        break;

        case "Hoenn":
            for(let i = 0; i<gereneration_pokemons[2].length; i++){
                pokemon_conteiner.appendChild(gereneration_pokemons[2][i]);
                gereneration_pokemons[2][i].classList.add(types[2][i]);    
            }
        break;
        case "Sinnoh":
            for(let i = 0; i<gereneration_pokemons[3].length; i++){
                pokemon_conteiner.appendChild(gereneration_pokemons[3][i]);
                gereneration_pokemons[3][i].classList.add(types[3][i]);    
            }
        break;
        case "Unova":
            for(let i = 0; i<gereneration_pokemons[4].length; i++){
                pokemon_conteiner.appendChild(gereneration_pokemons[4][i]);
                gereneration_pokemons[4][i].classList.add(types[4][i]);    
            }
        break;
        case "Kalos":
            for(let i = 0; i<gereneration_pokemons[5].length; i++){
                pokemon_conteiner.appendChild(gereneration_pokemons[5][i]);
                gereneration_pokemons[5][i].classList.add(types[5][i]);    
            }
        break;
        case "Alola":
            for(let i = 0; i<gereneration_pokemons[6].length; i++){
                pokemon_conteiner.appendChild(gereneration_pokemons[6][i]);
                gereneration_pokemons[6][i].classList.add(types[6][i]);    
            }
        break;
        case "Galar":
            for(let i = 0; i<gereneration_pokemons[7].length; i++){
                pokemon_conteiner.appendChild(gereneration_pokemons[7][i]);
                gereneration_pokemons[7][i].classList.add(types[7][i]);    
            }
        break;
        case "Paldea":
            for(let i = 0; i<gereneration_pokemons[8].length; i++){
                pokemon_conteiner.appendChild(gereneration_pokemons[8][i]);
                gereneration_pokemons[8][i].classList.add(types[8][i]);    
            }
        break;  
        case "Todos":
            for(let i = 0; i<gereneration_pokemons.length; i++){
                for(let j = 0; j<gereneration_pokemons[i].length; j++){
                    pokemon_conteiner.appendChild(gereneration_pokemons[i][j]);
                    gereneration_pokemons[i][j].classList.add(types[i][j]);
                }     
            }
        break;
    }
}
//Escutador chamando a função para mudar de região
select_option.addEventListener("change",changeregion);
