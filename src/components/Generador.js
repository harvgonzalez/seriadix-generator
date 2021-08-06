import React from 'react'

const Generador = ({series}) => {

    console.log(series);
    let materiales = []

    series.forEach((element, index, array) => {
        for(let i = element.serieInicial; i<= element.serieFinal; i++){
        materiales.push({
            manufactureDate: element.manufactureDate,
            manufactureBatch: element.manufactureBatch.toString().padStart(20, 0),
            packagingCode: element.packagingCode.toString().padStart(8, 0),
            logisticCodeUse: {
                id: "3",
            },
            delivery: {
                orderNumber: element.orderNumber,
                deliveryNote: element.deliveryNote,
                deliveryDate: element.deliveryDate
            },
            materialIdentification: {
                idiHeader: element.idiHeader,
                idiLogisticCode: element.idiLogisticCode.toString().padStart(8, 0),
                IdiSerialNumber: i.toString().padStart(16, 0),
                idiManufacturerCode: element.idiManufacturerCode,
                idiReservedCode: element.idiReservedCode,
                value: element.idiHeader + element.idiLogisticCode + element.idiManufacturerCode + element.idiReservedCode + i.toString().padStart(16, 0)
            },
            materialMassiveRequest: {
                id: null,
                isCompleted: false
             }     
            })
        }
    })

    console.log(materiales)

    let json = {
        materials: materiales
    }
    json = JSON.stringify(json, null, 4)
    return (
        <div>
            <form>
                {
                    series.length <= 0 
                    
                    ?
                    <textarea
                        className="u-full-width large"
                        placeholder="Aquí aparecerá un texto en formato JSON al agregar materiales seriados..."
                    ></textarea>
                    :
                    <textarea
                        className="u-full-width large"
                        value={json}
                    ></textarea>
                }
            </form>
        </div>
    )
}

export default Generador;


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