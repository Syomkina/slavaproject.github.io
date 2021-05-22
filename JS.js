const buttonAdd = document.querySelector(".addGame")

buttonAdd.addEventListener('click', showModal)

function showModal() {
    const divModal = document.createElement('div')
    divModal.classList.add('main')
    divModal.insertAdjacentHTML('afterbegin',`
    <div class="template">
    <div class="game-container-modal">
      <div class="description-container">
        <div class="image"><p class="description">ваша картинка</p></div>
        <div class="description-container1">
          <h2>1)название</h2>
          <span class="close-button">&times;</span>
        </div>
        <p class="description">
        2)чем вам понравилась игра
        </p>
        <p class="description">
          3)сылки которые вы рекомендуете(гайды, обзоры и тд)
        </p>
        <li class="noDot"><a href="https://discord.gg/e6AXX7aw" target="_blank">я прочитал и готов предложить игру</a></li>
      </div>
    </div>
    </div>
  `)

  document.body.appendChild(divModal)
}

const close = document.querySelector(".close")

window.onclick = function(event) {
   let close = document.querySelector('.description-container1 span')

   if(event.target == close){
    document.querySelector('.main').remove()
}

}