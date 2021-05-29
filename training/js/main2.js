import { dataGlasses as glassesData } from "../../data/data.js"
import { Glasses } from "./glasses.js"
import { GlassesList } from "./glassesList.js"

let glassesList = new GlassesList()

const showGlasses = () => {
  glassesData.map((item, index) => {
    let glasses = new Glasses(
      item.id,
      item.src,
      item.virtualImg,
      item.brand,
      item.name,
      item.color,
      item.price,
      item.description
    )
    glassesList.addGlasses(glasses)
  })
  document.getElementById("vglassesList").innerHTML =
    glassesList.renderGlasses()
}

showGlasses()

const tryOnModel = (e) => {
  let id = e.currentTarget.getAttribute("data-id")
  let chosenGlasses
  for (let glasses of glassesList.glist) {
    if (glasses.id === id) {
      chosenGlasses = glasses
      break
    }
  }
  document.getElementById("avatar").innerHTML = `
        <img id="chosenGlasses" src=${chosenGlasses.virtualImg} style="transition: 0.5s">
    `

  let status = chosenGlasses.status === true ? "Stocking" : "Sold out"
  const glassesInfo = document.getElementById("glassesInfo")
  glassesInfo.innerHTML = `
    <h5>${chosenGlasses.name} - ${chosenGlasses.brand} - (${chosenGlasses.color})</h5>
    <p class="card-text"><span class="btn btn-danger">$${chosenGlasses.price}</span> <span class="text-success">${status}</span></p>    
    <p class="card-text">${chosenGlasses.description}</p>
  `
  glassesInfo.style.display = "block"
}

window.tryOnModel = tryOnModel

const tryOn = (state) => {
  const chosenGlasses = document.getElementById("chosenGlasses")
  if (!chosenGlasses) {
    return
  }
  if (state === "before") {
    chosenGlasses.style.opacity = 0
  } else if (state === "after") {
    chosenGlasses.style.opacity = 0.9
  }
}

window.tryOn = tryOn
