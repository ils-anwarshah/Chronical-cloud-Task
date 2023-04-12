import Data from '../json/cardData.json' assert {type:'json'};
function cardDatas(){
    for (let i=0; i<Data.cardData.length;i++){
        document.getElementById(`small-card-${i}`).innerHTML = `<div class="text-card"><span>${Data.cardData[i].cardtitle}</span></div><div class="heading-container">
        <div class="heading-text">
          <span class="count">${Data.cardData[i].activeCases}</span>
          <span>${Data.cardData[i].status}</span>
        </div>
        <div class="card-count-logo${i+1}">
          <img
            src=${Data.cardData[i].IconSrc}
            class="icon-style"
          />
        </div>
      </div>
      <div class="small-card-bottom">
        <span>${Data.cardData[i].totalText} : ${Data.cardData[i].totalnum}</span>
      </div>`
    }
    
}
cardDatas();
