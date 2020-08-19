class Personaje {
  constructor (nombre, ataque, defensa){
    this.nombre = nombre
    this.ataque = ataque
    this.defensa = defensa
  }
}

let cresques = new Personaje('Cresques', 0,5)
let catalina = new Personaje('Catalina', 5,0)
let helena = new Personaje('Helena', 3,3)
let niccolo = new Personaje('Niccolò', 0,0)
let ilaria = new Personaje('Ilaria', 0,4)

console.log(cresques, catalina, helena, niccolo, ilaria)