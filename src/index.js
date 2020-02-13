document.querySelector("body").appendChild(
    (() => {
        const div = document.createElement("h1");
        const text = document.createTextNode("Hello world!");
        div.style.fontSize = "2em";
        div.appendChild(text);
        return div
    })()
)