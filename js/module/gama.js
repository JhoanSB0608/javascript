import { getAllDetailsByOrderCode } from './delivery_details.js'; import { getProductByCode } from './product.js';  import {getAllOrdersByClientCode} from './request.js'

//11. Devuelve un listado de las diferentes gamas de producto que ha comprado cada cliente.
export const getAllDifferentGammasFromEachClient = async ()=>{
    let clientes = await fetch("http://localhost:5501/clients").then(response => response.json());
    
    let ordenes = [];
    for(const val of clientes){
        let {client_code} = val;
        let orden = await getAllOrdersByClientCode(client_code);
        orden.forEach((val, i) => {
            ordenes.push({
                codeClient: client_code,
                code_request: val.code_request
            })
        });
    }
    for(const val of ordenes){
        let detalles = await getAllDetailsByOrderCode(val.code_request);
        let codePdt = [];
        detalles.forEach(elmt => {
            codePdt.push(elmt.product_code);
        });
        ordenes[ordenes.indexOf(val)].codigo_producto = codePdt
        let codigos = [...ordenes[ordenes.indexOf(val)].codigo_producto]
        let gamma = ordenes[ordenes.indexOf(val)].gamasDistintas = []
        for(const elmt of codigos){
            let [producto] = await getProductByCode(elmt)
            if(producto != undefined){
                if(!gamma.some(prot => prot == producto.gama)){
                    gamma.push(producto.gama)
                }
            } else gamma.push(`El codigo ${elmt} No existe`)
        }
        ordenes[ordenes.indexOf(val)] = {
            codigoCliente: val.codeClient,
            gamasDistintas: val.gamasDistintas
        }
    }
    return ordenes;
}