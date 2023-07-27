function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Choose the img tag
  const img = document.querySelector("#profile img")
  
  // Substitute the image
  if(html.classList.contains('light')) {    
    // If it is in "light mode", add the new image
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // If it is not in "light mode", keep the same image
    img.setAttribute("src", "./assets/avatar.png")
  }
}

