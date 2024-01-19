
//1. Chamar nossa API de Digimons
async function getDigimonsAPI(){

    const response = await fetch ("https://digitalinnovationone.github.io/api-digimon/api/digimon.json");

    return await response.json(); 
}

//2. Filtro de busca dos digimons
//find funciona como um for
async function filtroDigimons(digimonList, digimonId){

    const digimon = await digimonList.find((monster) => monster.id === digimonId);
    
    return digimon;

}
//3. Renderizador

async function rendeDigimons(digimon){

    const imgDigmonElement = document.getElementById("i-img__digimons");
    imgDigmonElement.src = digimon.image;

    const txtDigmonElement = document.getElementById("t-name__Digimon");
    txtDigmonElement.textContent = digimon.name;

    const hpDigimonElement = document.getElementById("hp__int");    

    const atkDigimonElement = document.getElementById("atk__int");

    const defDigimonElement = document.getElementById("def__int");

    hpDigimonElement.style.width = digimon.HP + '%';

    atkDigimonElement.style.width = digimon.ATK + '%';

    defDigimonElement.style.width = digimon.DEF + '%';
}


//4.Main
async function main(){

    const digimons = await getDigimonsAPI();

    const chooseDigimons = await filtroDigimons(digimons, 14);

    await rendeDigimons(chooseDigimons);
}
main();