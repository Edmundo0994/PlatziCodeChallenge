let partida1 = [['pi', 'ti'], ['pa', 'ti'], ['ti', 'pi'], ['pi', 'pa']]
let partida2 = [['pi', 'ti'], ['pa', 'ti']]
let partida3 = [['pi', 'ti'], ['pi', 'ti'], ['ti', 'pi']]

function juego(partida) {
  let jugador1 = 0
  let jugador2 = 0
  partida.forEach(par => {
    if ((par[0] === 'pi' && par[1] === 'ti') || (par[0] === 'ti' && par[1] === 'pa') || (par[0] === 'pa' && par[1] === 'pi')) {
      jugador1++
    } else if ((par[0] === 'pi' && par[1] === 'pa') || (par[0] === 'ti' && par[1] === 'pi') || (par[0] === 'pa' && par[1] === 'ti')) {
      jugador2++
    }
  })
  if (jugador1 > jugador2){
    console.log('Gano el jugador 1')
  } else if (jugador1 === jugador2){
    console.log('Empate')
  } else {
    console.log('Gano el jugador 2')
  }
}

juego(partida1)
juego(partida2)
juego(partida3)

