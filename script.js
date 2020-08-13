// Stap 1 en 4
const huiswerkMaken = function (vak, callback) {
    console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
    setTimeout(() => {
        callback();
    }, 5000)
}


// Stap 2
const klaarMetHuiswerk = function () {
    console.log('Kijk Paps/Mams, ik ben klaar met mijn huiswerk!')
}


// Stap 3
huiswerkMaken("wiskunde", klaarMetHuiswerk);

console.log(huiswerkMaken("wiskunde", klaarMetHuiswerk));







