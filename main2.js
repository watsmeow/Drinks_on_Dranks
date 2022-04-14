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

function drinkOneChosen() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkList[0]}`)
        .then(res => res.json())
        .then(data => {
        document.getElementById('image1').src = data.drinks[0].strDrinkThumb
        document.getElementById('recipe1').style.display = 'block'
        document.getElementById('title1').innerText = data.drinks[0].strDrink
        document.getElementById('instructions1').innerText = data.drinks[0].strInstructions
    })
}

function drinkTwoChosen() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkList[1]}`)
        .then(res => res.json())
        .then(data => {
        document.getElementById('image2').src = data.drinks[0].strDrinkThumb
        document.getElementById('recipe2').style.display = 'block'
        document.getElementById('title2').innerText = data.drinks[0].strDrink
        document.getElementById('instructions2').innerText = data.drinks[0].strInstructions
    })
}

function drinkThreeChosen() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkList[2]}`)
        .then(res => res.json())
        .then(data => {
        document.getElementById('image3').src = data.drinks[0].strDrinkThumb
        document.getElementById('recipe3').style.display = 'block'
        document.getElementById('title3').innerText = data.drinks[0].strDrink
        document.getElementById('instructions3').innerText = data.drinks[0].strInstructions   })
    }

function drinkOneRandom() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then(res => res.json())
        .then(data => {
        document.getElementById('image1').src = data.drinks[0].strDrinkThumb
        document.getElementById('recipe1').style.display = 'block'
        document.getElementById('title1').innerText = data.drinks[0].strDrink
        document.getElementById('instructions1').innerText = data.drinks[0].strInstructions
    })
}

function drinkTwoRandom() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then(res => res.json())
        .then(data => {
        document.getElementById('image2').src = data.drinks[0].strDrinkThumb
        document.getElementById('recipe2').style.display = 'block'
        document.getElementById('title2').innerText = data.drinks[0].strDrink
        document.getElementById('instructions2').innerText = data.drinks[0].strInstructions
    })
}

function drinkThreeRandom() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then(res => res.json())
        .then(data => {
        document.getElementById('image3').src = data.drinks[0].strDrinkThumb
        document.getElementById('recipe3').style.display = 'block'
        document.getElementById('title3').innerText = data.drinks[0].strDrink
        document.getElementById('instructions3').innerText = data.drinks[0].strInstructions
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
        drinkOneChosen()
        drinkTwoChosen()
        drinkThreeChosen()
    } else if (drinkList.length == 2) {
        drinkOneChosen()
        drinkTwoChosen()
        drinkThreeRandom()
    } else if (drinkList.length == 1) {
        drinkOneChosen()
        drinkTwoRandom()
        drinkThreeRandom()
    } else {
            alert("Enter some drink names or mash the random botton")
    }
}

//populate with random drinks


document.getElementById('getRandomButton').addEventListener('click', getRandom)

function getRandom() {
    drinkOneRandom()
    drinkTwoRandom()
    drinkThreeRandom()
}



