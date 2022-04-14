//carousel

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1
      const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")
  
      const activeSlide = slides.querySelector("[data-active]")
      let newIndex = [...slides.children].indexOf(activeSlide) + offset
      if (newIndex < 0) newIndex = slides.children.length - 1
      if (newIndex >= slides.children.length) newIndex = 0
  
      slides.children[newIndex].dataset.active = true
      delete activeSlide.dataset.active
    })
  })
  


//input drink get drink

document.getElementById('getDrinkButton').addEventListener('click', getDrink)

function drinkChosen(image, recipe, title, instructions) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkList[0]}`)
        .then(res => res.json())
        .then(data => {
        document.getElementById(image).src = data.drinks[0].strDrinkThumb
        document.getElementById(recipe).style.display = 'block'
        document.getElementById(title).innerText = data.drinks[0].strDrink
        document.getElementById(instructions).innerText = data.drinks[0].strInstructions
    })
}


function drinkRandom(image, recipe, title, instructions) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then(res => res.json())
        .then(data => {
        document.getElementById(image).src = data.drinks[0].strDrinkThumb
        document.getElementById(recipe).style.display = 'block'
        document.getElementById(title).innerText = data.drinks[0].strDrink
        document.getElementById(instructions).innerText = data.drinks[0].strInstructions
    })
}


function getDrink() {
    let drinkList = []
    let drink1 = document.getElementById('drinkOne').value
    let drink2 = document.getElementById('drinkTwo').value
    let drink3 = document.getElementById('drinkThree').value
    drinkList.push(drink1, drink2, drink3)
    drinkList = drinkList.filter(val => val !== '')
    console.log(drinkList)


    if (drinkList.length == 3) {
        drinkChosen('image1', 'recipe1', 'title1', 'instructions1')
        drinkChosen('image2', 'recipe2', 'title2', 'instructions2')
        drinkChosen('image3', 'recipe3', 'title3', 'instructions3')

    } else if (drinkList.length == 2) {
        drinkChosen('image1', 'recipe1', 'title1', 'instructions1')
        drinkChosen('image2', 'recipe2', 'title2', 'instructions2')
        drinkRandom('image3', 'recipe3', 'title3', 'instructions3')

    } else if (drinkList.length == 1) {
        drinkChosen('image1', 'recipe1', 'title1', 'instructions1')
        drinkRandom('image2', 'recipe2', 'title2', 'instructions2')
        drinkRandom('image3', 'recipe3', 'title3', 'instructions3')

    } else {
            alert("Enter some drink names or mash the random botton")
    }
}

//populate with random drinks


document.getElementById('getRandomButton').addEventListener('click', getRandom)

function getRandom() {
    drinkRandom('image1', 'recipe1', 'title1', 'instructions1')
    drinkRandom('image2', 'recipe2', 'title2', 'instructions2')
    drinkRandom('image3', 'recipe3', 'title3', 'instructions3')
}



