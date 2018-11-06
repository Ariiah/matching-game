  let boardGame = document.getElementsByClassName('board')

  for (let i = 0; i < 16; i++) {
    let list = document.createElement('li')
    list.setAttribute('class', 'card')
    list.setAttribute('type', '')
    boardGame[0].appendChild(list)

  }
