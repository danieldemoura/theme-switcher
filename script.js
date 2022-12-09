const input = document.querySelector("input")
const div = document.querySelector("div")
const section = document.querySelector("#theme-switcher")
const p = document.createElement("p")

input.onchange = (event) => {
    section.insertBefore(p, div)
    p.style.cssText = `
        position: absolute;
        top: 35%;
        margin: auto;
        font-size: 1.6em;
        font-family: Arial, sans-serif;
        font-weight: bold;
        font-variant: all-small-caps;
        transition: all .5s ease-in;
    `
    if(event.target.checked) {
        document.body.setAttribute("data-theme", "light")
        p.innerText = "Tema Light Selecionado!"
    } else {
        document.body.setAttribute("data-theme", "dark")
        p.innerText = "Tema Dark Selecionao!"
        p.style.color = "white"
    }

}