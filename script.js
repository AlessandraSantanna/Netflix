let som = document.querySelector(".botao-som")
let video=document.querySelector(".video")
let botao=document.querySelector(".link-info")
let modal=document.querySelector(".modal")
let audio =document.querySelector(".audio")

//liga o som
som.addEventListener ("click", ligaSom)

function ligaSom (){
    video.muted=false
}

//mostra o modal
botao.addEventListener("click",mostrarModal)
modal.addEventListener("click",esconderModal)


function mostrarModal(){
    modal.style.display="block"
}

function esconderModal(){
    modal.style.display="none"
}
// tocar o Tundum
//window -janela  html 

window.addEventListener("click",tocarAudio)

function tocarAudio(){
    audio.play()

}