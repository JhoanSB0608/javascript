// 7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.
export const getListStatusRequests=async()=>{
    let res = await fetch("http://localhost:5508/requests")
    let data = await res.json();
    let dataupdateset= new Set(data.map(dev=>dev.status))
    let dataUpdate=[...dataupdateset]
    return dataUpdate
}

//8. Devuelve un listado con el código de cliente de aquellos clientes que realizaron algún pago en 2008. 
// Tenga en cuenta que deberá eliminar aquellos códigos de cliente que aparezcan repetidos. Resuelva la consulta

export const getAllClientCodeOrderedBefore = async () => {
    let res = await fetch("http://localhost:5508/requests");
    let data = await res.json();
    let dataUpdate = [];
    let clientCodesSet = new Set();
    data.forEach(val => {
        let [year] = val.date_request.split("-");
        if (year == 2008 && !clientCodesSet.has(val.code_client)) {
            dataUpdate.push({ ClientCode: val.code_client, fecha: val.date_request });
            clientCodesSet.add(val.code_client); 
        }
    });
    return dataUpdate;
};