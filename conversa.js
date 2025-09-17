window.addEventListener("load", main)

function main() {
    const alice = document.getElementById("mensagem-alice")
    const bob = document.getElementById("mensagem-bob")

    alice.addEventListener("keyup", adicionarMensagem)
    bob.addEventListener("keyup", adicionarMensagem)

}

function adicionarMensagem(evento) {
    if (evento.key === "Enter") {
        const mensagem = evento.target.value.trim(); 
        if (mensagem === "") {
            return;
        }
        const p = document.createElement("p")
        const conversa = document.getElementsByClassName("conversa")[0]
        p.textContent = evento.target.value
        evento.target.value = ""
        if (evento.target.id == "mensagem-alice") {
            p.classList.add("conversa-alice")
        } else {
            p.classList.add("conversa-bob")
        }

        conversa.appendChild(p)
    }
}

