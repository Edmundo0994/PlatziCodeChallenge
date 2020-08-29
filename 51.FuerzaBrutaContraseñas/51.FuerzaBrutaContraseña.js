function validar(){
  const contra = 'axRF35(/'
  let contraCreada = []
  
  const datos = {
    num: [48,49,50,51,52,53,54,55,56,57],
    min: [97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
    mayus: [65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90],
    esp: [32,33,34,35,36,37,39,40,41,42,43,44,45,46,47,58,59,60,61,62,63,64,91,92,93,94,95,96,123,124,125,126]
  }

  let rango = []

  rango.push(datos.min)
  rango.push(datos.mayus)
  rango.push(datos.num)
  rango.push(datos.esp)
  rango = rango.flat(1)

  let intentos = 0
  console.time('Tiempo')
  while (contra != contraCreada.join('')){
    contraCreada = []
    for (let i = 0; i < contra.length; i++){
      let variable = Math.floor(Math.random()*(rango.length))
      let char = String.fromCharCode(rango[variable])
      contraCreada.push(char)
    }
    intentos++
    console.log(intentos)
  }
  console.timeEnd('Tiempo')
  console.log(contraCreada, intentos)
}

validar()