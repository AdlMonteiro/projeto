function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  
  //pegar a tag image
const img = document.querySelector("#profile img")

//substituir a image

 if (html.classList.contains('light')) {
  //se tiver light mode, adicionar a imagem light
  img.setAttribute('src', './assets/Theme=Light mode.png')
} else {
  //se tiver sem light mode, manter a imagem normal
  img.setAttribute("src", "./assets/Theme=Dark mode.png")
 }
  
 if (html.classList.contains("light")) {
   img.setAttribute(
     "alt",
     "Foto de Mayk Brito sorrindo, usando oculos escuro e camisa preta, barba e rosa degradando para o azul."
   )
 } else {
   img.setAttribute(
     "alt",
     "Foto de Mayk Brito sorrindo, usando oculos e camisa preta, barba e rosa degradando para o azul."
   )
 }


 }