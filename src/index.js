let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  handleForm();
  getToys();
  newToyForm();
  renderToy();
});



const newToyForm = () => {
  const toyForm = document.querySelector('.add-toy-form')
  toyForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const newToyName = e.target.name.value
    const newToyImg = e.target.image.value

    const newToyObj = {
      name: newToyName,
      image: newToyImg, 
      likes: 0
    }
    renderToy(newToyObj)
  })
}

const getToys = () => {
    fetch('http://localhost:3000/toys')
    .then(resp => resp.json())
    .then(toys => toys.forEach( (toy) => renderToy(toy)))
  }

function renderToy(toy){
  let toyCard = document.createElement("div")
  toyCard.className = "card"

  const toyName = document.createElement("h2")
  toyName.innerText = toy.name;
  
  const toyImg = document.createElement('img')
  toyImg.src = toy.image;
  toyImg.className = "toy-avatar"

  const toyP = document.createElement('p')
  toyP.innerText = `${toy.likes + " likes"}`
 
  const toyButton = document.createElement('button')
  toyButton.innerText = "like"
  toyButton.className = "like-btn"
  toyButton.id = toy.id;
  
  const toyCollection = document.querySelector("#toy-collection")

  toyCard.append(toyName,toyImg,toyP,toyButton)

  toyCollection.append(toyCard)

  toyButton.addEventListener('click', (e) => {
    let currentLikesNum = e.target.previousSibling.innerText
    let actualLikes = currentLikesNum.split(" ")[0]
    e.target.previousSibling.innerText = `${parseInt(actualLikes) + 1} Likes`
  })

}

const handleForm = () => {
  const addBtn = document.querySelector("#new-toy-btn");
 const toyFormContainer = document.querySelector(".container");
 addBtn.addEventListener("click", () => {
   // hide & seek with the form
   addToy = !addToy;
   if (addToy) {
     toyFormContainer.style.display = "block";
   } else {
     toyFormContainer.style.display = "none";
   }
 });
}
 

  
//Hook up form that enables users to add toys.Create event listener when form submitted new toy is put on database and a new card is added to DOM
  //Create event listener that gives users the ability to click a button to "like" a toy. When the button is clicked, number of likes should be updated in database & rendered to DOM










