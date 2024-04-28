//Obtener detalles de un pedido mediante su codigo

export const getAllDetailsByOrderCode = async (code)=>{
    let res = await fetch(`http://localhost:5503/request_details?code_request=${code}`).then(response => response.json());
    return res
}