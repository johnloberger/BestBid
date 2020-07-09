let allItemData = []

const itemContainer = document.querySelector('#item-container')



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
 console.log(itemsData)
 itemsData.data.map(renderSingleItem)
}

function renderSingleItem(item){    
  itemContainer.innerHTML +=
    `<div class="item-card">
      <div class="item-frame">
        <h1 id="item-name" align="center"><a href="#" class="effect-shine">${item.attributes.name}</a></h1>
          <div class="item-image">
            <img data-id="" src="${item.attributes.image}">
          </div>
        <p id="${item.id}">LOADING</p>
        <button data-id= data-action="delete" class="bid-button">Bid</button>
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

      document.getElementById(item.id).innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
  }
  

  
  



/////////////////////////////////
fetchItems()