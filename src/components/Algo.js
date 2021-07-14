
const series = [
  {
    manufactureDate: 2020,
    serieInicial: 1,
    serieFinal: 4,
  },
   {
    manufactureDate: 2021,
    serieInicial: 5,
    serieFinal: 7,
  },
   {
    manufactureDate: 2022,
    serieInicial: 8,
    serieFinal: 9,
  },
]

//console.log(series)
let materiales = []

series.forEach((element, index, array) => {
// console.log(element.serieInicial)
for(let i = element.serieInicial; i<= element.serieFinal; i++){
materiales.push({
  manufactureDate: element.manufactureDate,
  numeroSerie: i.padS
})
}
})

console.log(materiales)

const total = {
materials: materiales
}
console.log(JSON.stringify(total, null, 4))


// const materiales= []
// const  codigo = 5033
// const numeroSerieInicial= 21001;
// const numeroSerieFinal = 21010;

// for(let i = numeroSerieInicial; i<= numeroSerieFinal; i++){
//     materiales.push({
//       manufactureDate: 2021-05-1,
//       manufactureBatch: 503291,
//       numeroSerie: i,
//       codigoLogistico: codigo
//     })
// }
// console.log(JSON.stringify(materiales, null, 4))