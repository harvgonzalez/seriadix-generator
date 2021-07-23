import React from 'react'

const Serie = ({serie, eliminarSerie}) => {
    return (
        <div className="cita">
            <p>Fecha fabricación: <span>{serie.manufactureDate}</span> </p>
            <p>Lote: <span>{serie.manufactureBatch}</span> </p>
            <p>Cod. log procesado: <span>{serie.packagingCode}</span> </p>
            <p>Núm. pedido: <span>{serie.orderNumber}</span> </p>
            <p>Número Albarán: <span>{serie.deliveryNote}</span> </p>
            <p>Fecha entrega: <span>{serie.deliveryDate}</span> </p>
            <p>Cabecera: <span>{serie.idiHeader}</span> </p>
            <p>Cod. log: <span>{serie.idiLogisticCode}</span> </p>
            <p>Fecha entrega: <span>{serie.deliveryDate}</span> </p>
            <p>Cabecera: <span>{serie.idiHeader}</span> </p>
            <p>Cod. log: <span>{serie.packagingCode}</span> </p>
            <p>Serie Inicial: <span>{serie.serieInicial}</span> </p>
            <p>Serie Final: <span>{serie.serieFinal}</span> </p>

            <button
                className="button eliminar u-full-width"
                onClick={ () => eliminarSerie(serie.id)  }
            >Eliminar &times;</button>
        </div>
    )
}

export default Serie
