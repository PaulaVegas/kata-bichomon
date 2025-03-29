console.log(document.title);
// Podrás usar la consola para ver, de manera inmediata, si el resultado de tu código es el deseado.

// ![](consola.png)

// Aquí hemos ejecutado `document.querySelector('.infocard')` para obtener el primer elemento de todos los que coincidan con dicha ejecución.

// Una vez lo tenemos, podemos interactuar con él y obtener la información que nos interese, para poder transformarla o mostrarla tal cual.

// 1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
const gen1Title = document.getElementById('gen-1')
gen1Title.innerText = 'Generasión 1 Pokimon'

// 2. Cambia el color de fondo de la primera generación de Pokimon.
const gen1Whole = document.getElementsByClassName("infocard");
for (let i = 0; i < 151; i++) {
    gen1Whole[i].style.backgroundColor = 'lightgreen'
}

// 3. Imprime por consola la URL de la página.
console.log("La url es:", document.URL)
// 4. Imprime por consola el dominio de la página.
console.log("El domain es:", document.domain)
// 5. Imprime todos los nodos de imagen.
const images = document.querySelectorAll("img")
console.log(images)
// 6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
document.querySelectorAll("img").forEach(img => {
img.src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
})

// *Premium:*

// 7. Cambia el fondo de todos los `infocard-lg-data text-muted` para todos los Pokimon voladores `itype flying`
document.querySelectorAll(".infocard-lg-data text-muted").forEach(element => {
    if (element.querySelector(".itype flying")) {
        element.style.backgroundColor = "lightblue"
    }
    
})