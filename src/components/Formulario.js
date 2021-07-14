import React, { Fragment, useState } from 'react'
import uuid from 'uuid/v4'
const Formulario = ({crearSerie}) => {
    // Crear State de datos
    const [ serie, actualizarSerie ] = useState({
        manufactureDate: '',
        manufactureBatch: '',
        packagingCode: '',
        orderNumber: '',
        deliveryNote: '',
        deliveryDate: '',
        idiHeader: '',
        idiLogisticCode: '',
        serieInicial: '',
        serieFinal: '',
        idiManufacturerCode: '',
        idiReservedCode: '',
    })
    // State de error en caso de que falten datos
    const [ error, actualizarError ] = useState(false);

    // Función que se ejecuta cada vez que el usuario escribe en un input
    const actualizarState = e => {
        // primero un destructuring
        actualizarSerie({
            ...serie,
            [e.target.name]: e.target.value
        })
    }
    // extraer valores del state de datos que representa un artículo
    const {manufactureDate, manufactureBatch, packagingCode, orderNumber, deliveryNote, 
        deliveryDate, idiHeader, idiLogisticCode, serieInicial, serieFinal, idiManufacturerCode, idiReservedCode} = serie;
    // cuando el usuario presiona agregar serie
    const submitSerie = (e) => {
        e.preventDefault();
        // Validar campos
        if(manufactureDate.trim() === '' ||manufactureBatch.trim() === '' || 
        packagingCode.trim() === '' || orderNumber.trim() === '' || deliveryNote.trim() === '' || 
        deliveryDate.trim() === '' || idiHeader.trim() === '' || idiLogisticCode.trim() === '' ||
        serieInicial.trim() === '' || serieFinal.trim() === '' || idiManufacturerCode.trim() === '' || idiReservedCode.trim() === ''){
            actualizarError(true);
            return;
        }
        // eliminar mensaje de error en campos
        actualizarError(false);

        // asignar ID
        serie.id = uuid();

        // crear serie
        crearSerie(serie);

        // Reiniciar el formulario
        // actualizarSerie({
        //     manufactureDate: '',
        //     manufactureBatch: '',
        //     packagingCode: '',
        //     orderNumber: '',
        //     deliveryNote: '',
        //     deliveryDate: '',
        //     idiHeader: '',
        //     idiLogisticCode: '',
        //     IdiSerialNumber: '',
        //     idiManufacturerCode: '',
        //     idiReservedCode: ''
        // })
    };

    
    return (
        <Fragment>
            <h1>Crear Serie</h1>
            
            <form onSubmit={submitSerie}>
                {/* <h3>Reporte de material seriado</h3> */}
                    <label>Fecha de fabricación</label>
                    <input
                        type="text"
                        name="manufactureDate"
                        className="u-full-width"
                        placeholder="yyyy-mm-dd hh:mm:ss"
                        onChange={actualizarState}
                    />
                    <label>Lote</label>
                    <input
                        type="text"
                        name="manufactureBatch"
                        className="u-full-width"
                        placeholder="mm/yy"
                        onChange={actualizarState}
                    />
                    <label>Código logístico procesado</label>
                    <input
                        type="text"
                        name="packagingCode"
                        className="u-full-width"
                        placeholder="00######"
                        onChange={actualizarState}
                        
                    />
                    <label>Número de pedido</label>
                    <input
                        type="text"
                        name="orderNumber"
                        className="u-full-width"
                        placeholder="#"
                        onChange={actualizarState}
                    />
                    <label>Número de albarán</label>
                    <input
                        type="text"
                        name="deliveryNote"
                        className="u-full-width"
                        placeholder="#"
                        onChange={actualizarState}
                    />
                    <label>Fecha de entrega albarán</label>
                    <input
                        type="text"
                        name="deliveryDate"
                        className="u-full-width"
                        placeholder="yyyy-mm-dd hh:mm:ss"
                        onChange={actualizarState}
                    />

                {/* <h3> Identificación Materiales</h3> */}
                    <label>Cabecera</label>
                    <input
                        type="text"
                        name="idiHeader"
                        className="u-full-width"
                        placeholder="32"
                        onChange={actualizarState}
                    />         
                    <label>Código logístico</label>
                    <input
                        type="text"
                        name="idiLogisticCode"
                        className="u-full-width"
                        placeholder="00######"
                        onChange={actualizarState}
                    />                 
                    <label>Número de serie inicial</label>
                    <input
                        type="text"
                        name="serieInicial"
                        className="u-full-width"
                        placeholder="#"
                        onChange={actualizarState}
                    />
                    <label>Número de serie final</label>
                    <input
                        type="text"
                        name="serieFinal"
                        className="u-full-width"
                        placeholder="#"
                        onChange={actualizarState}
                    />
                    <label>Fabricante</label>
                    <input
                        type="text"
                        name="idiManufacturerCode"
                        className="u-full-width"
                        placeholder="32"
                        onChange={actualizarState}
        
                    />
                    <label>Posición de reserva</label>
                    <input
                        type="text"
                        name="idiReservedCode"
                        className="u-full-width"
                        placeholder="00"
                        onChange={actualizarState}
                    />
                    <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar serie</button>
            </form>
            { error ? <p className="alerta-error">Todos los campos son obligatorios</p> :null}
        </Fragment>
    )
}

export default Formulario;
