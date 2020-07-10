/////// VARIABLES ///////
let addItem = false
let currentUser
let allItemData = []
let emailData = []
const itemContainer = document.querySelector('#item-container')
const loginForm = document.getElementById("login-form")
const loginPanel = document.querySelector(".modal-content")
const homePage = document.getElementById("container")
const searchForm = document.getElementById("searchForm")
const addBtn = document.querySelector("#new-item-btn");
const itemForm = document.getElementById("add-item-form");
const itemFormContainer = document.querySelector(".formContainer");


//////// LOGIN EVENT LISTENERS ////////////

loginForm.addEventListener('submit', (event) => {
  handleLogin(event)
})


///////// LOGIN FUNCTIONS ////////////

function handleLogin(event){
  event.preventDefault()
  const email = event.target['email'].value
  const reqObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"   
    },
    body: JSON.stringify({
      email: email
    })
  } 
  fetch("http://localhost:3000/users", reqObj)
  .then(resp => resp.json())
  .then(data => {
    currentUser = data
    homePage.style.display = 'block'
    fetchItems()
    loginPanel.remove()
  })
}


/////////// RENDER PAGE FUNCTIONS /////////

function fetchItems(){
  fetch("http://localhost:3000/items")
  .then(resp => resp.json())
  .then(itemsData => {
    allItemData = itemsData
    renderItems(itemsData)
  })
  .catch(err => console.log(err))
}
function renderItems(itemsData){
  itemsData.data.map(renderSingleItem)
}
function renderFilterItems(filteredItems){
  filteredItems.forEach(item => renderSingleItem(item))
}
function renderSingleItem(item){ 
  let minBid
  let currentPrice
  if (!Array.prototype.last){
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
  };
  if (item.attributes.bids.length === 0){
    currentPrice = item.attributes.starting_price.toFixed(2)
  } else {
    currentPrice = item.attributes.bids.last().amount
    currentPrice = currentPrice.toFixed(2)
  }
  if (item.attributes.bids.length === 0){
    minBid = item.attributes.starting_price + 1
  } else {minBid = item.attributes.bids.last().amount + 1}
  itemContainer.innerHTML +=   
    `<div class="item-card">
      <div class="item-frame">
        <h1 id="item-name" align="center"><a href="#" class="effect-shine">${item.attributes.name}</a></h1>
          <div class="item-image">
            <img data-id="" src="${item.attributes.image}">
          </div>
          <span class="item-price" id="price">$${currentPrice}</span>
          <p id="${item.id}">LOADING</p>
          <form id="bid-form>
          <div class="form-group">
            <button type="submit" class="btn btn-primary">Bid</button>
            <input type="bid-amount" class="form-control" name="bid" id="bid-amount" aria-describedby="bid" placeholder="Minimum: ${minBid.toFixed(2)}">
          </div>
          </form>
        </form>
        <br>
      </div>
    </div>`
    Date.prototype.addDays = function(days) {
      var date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    }
    var date = new Date(item.attributes.created_at);
    const newDate = date.addDays(item.attributes.duration)
    let x = setInterval(function(){
      let now = new Date().getTime();
      let distance = newDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      let x = newDate.toString().slice(0, -41) + newDate.toLocaleTimeString()
      let userFriendlyNewDate = x.split(" ")[0]+", "+x.split(" ")[1]+" "+x.split(" ")[2]+" at "+(x.split(" ")[4]).slice(0,-3)+" "+x.split(" ")[5]
      if (document.getElementById(item.id) != null) {
        document.getElementById(item.id).innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s left!" + "<br>(" + userFriendlyNewDate + ")";
        if (distance < 0){
          clearInterval(x);
          document.getElementById(item.id).innerHTML = "EXPIRED";
        } else if (distance < 86000000){
          document.getElementById(item.id).style.color = "red"
        } else if (distance < 10000000){
          document.getElementById(item.id).style.color = "DarkOrange"
        } else {document.getElementById(item.id).style.color = "LightSeaGreen"}
      }
    }, 1000);
  }

  function renderSingleItemRuby(item){ 
    let minBid
    let currentPrice
    if (!Array.prototype.last){
      Array.prototype.last = function(){
          return this[this.length - 1];
      };
    };
    if (item.bids === undefined){
      currentPrice = item.starting_price.toFixed(2)
    } else {
      currentPrice = item.bids.last().amount
      currentPrice = currentPrice.toFixed(2)
    }
    if (item.bids === undefined){
      minBid = item.starting_price + 1
    } else {minBid = item.bids.last().amount + 1}
    itemContainer.innerHTML +=   
      `<div class="item-card">
        <div class="item-frame">
          <h1 id="item-name" align="center"><a href="#" class="effect-shine">${item.name}</a></h1>
            <div class="item-image">
              <img data-id="" src="${item.image}">
            </div>
            <span class="item-price" id="price">$${currentPrice}</span>
            <p id="${item.id}">LOADING</p>
            <form id="bid-form>
            <div class="form-group">
              <button type="submit" class="btn btn-primary">Bid</button>
              <input type="bid-amount" class="form-control" name="bid" id="bid-amount" aria-describedby="bid" placeholder="Minimum: ${minBid.toFixed(2)}">
            </div>
            </form>
          </form>
          <br>
        </div>
      </div>`
      Date.prototype.addDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
      }
      var date = new Date(item.created_at);
      const newDate = date.addDays(item.duration)
      let x = setInterval(function(){
        let now = new Date().getTime();
        let distance = newDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        let x = newDate.toString().slice(0, -41) + newDate.toLocaleTimeString()
        let userFriendlyNewDate = x.split(" ")[0]+", "+x.split(" ")[1]+" "+x.split(" ")[2]+" at "+(x.split(" ")[4]).slice(0,-3)+" "+x.split(" ")[5]
        if (document.getElementById(item.id) != null) {
          document.getElementById(item.id).innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s left!" + "<br>(" + userFriendlyNewDate + ")";
          if (distance < 0){
            clearInterval(x);
            document.getElementById(item.id).innerHTML = "EXPIRED";
          } else if (distance < 86000000){
            document.getElementById(item.id).style.color = "red"
          } else if (distance < 10000000){
            document.getElementById(item.id).style.color = "DarkOrange"
          } else {document.getElementById(item.id).style.color = "LightSeaGreen"}
        }
      }, 1000);
    }
    

///////// BID HANDLER /////////

itemContainer.addEventListener("click", bidHandler)
function bidHandler(){
  event.preventDefault()
  if (event.target.tagName === "BUTTON"){
    const newBid = event.target.nextElementSibling.value
    const itemCard = event.target.parentNode.parentNode.parentNode
    const price = itemCard.firstElementChild.lastElementChild.previousElementSibling.previousElementSibling
    const priceStr = parseFloat(price.innerHTML.substring(1))
    if (newBid >= (priceStr + 1.00)){
      renderBid(newBid, price)
      submitBid()
    } else {
      alert(`Bid must be larger than ${(priceStr + 1.00).toFixed(2)}!`)
    }  
  }  
    
}
function renderBid(newBid, price){
  price.innerHTML = `$${parseFloat(newBid).toFixed(2)}`
  event.target.nextElementSibling.placeholder = `Minimum: ${(parseFloat(newBid) + 1).toFixed(2)}`
}
function submitBid(){
  let bidReq
  const itemFrame = event.target.parentNode.parentNode.parentNode
  const bidForm = event.target.parentNode
  const formData = {
    amount: event.target.nextElementSibling.value,
    userId: currentUser.id,
    itemId: itemFrame.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.id
  }
  bidReq = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  }  
  fetch("http://localhost:3000/bids/", bidReq)
  .then(resp => resp.json())
  .then(bidData => {
    bidForm.reset()
    console.log(bidData)
  })
  .catch(err => console.log(err))
}
  
searchForm.addEventListener('input', (event) => handleSearch(event, allItemData))

function handleSearch(event, allItemData){
  const itemContainer = document.querySelector('#item-container')
  const filteredItems = allItemData.data.filter(itemObj => {
    return itemObj.attributes.name.includes(event.target.value)
  })
  const filteredItemsHTML = renderFilterItems(filteredItems)
  
  itemContainer.innerHTML = filteredItemsHTML ? filteredItemsHTML : `<p>Sorry, no items.</p>`
}

addBtn.addEventListener("click", () => {
  addItem = !addItem;
  if (addItem) {
    itemFormContainer.style.display = "block";
    itemForm.addEventListener("submit", submitNewItem)
  } else {
    itemFormContainer.style.display = "none";
  }
});


function submitNewItem(){
  event.preventDefault()
  console.log("working.")
  const name = event.target.name.value
  const image = event.target.image.value
  const starting_price = event.target.starting_price.value
  const description = event.target.description.value
  const duration = event.target.duration.value
  postNewItem(name, image, starting_price, description, duration)
  event.target.reset()
}

function postItemObj(name, image, starting_price, description, duration){
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      image: image,
      starting_price: starting_price,
      description: description,
      duration: duration
    })
  }  
}

function postNewItem(name, image, starting_price, description, duration){
  fetch("http://localhost:3000/items", postItemObj(name, image, starting_price, description, duration))
  .then(resp => resp.json())
  .then(itemData => renderSingleItemRuby(itemData))
  .catch(err => console.log(err))
}
