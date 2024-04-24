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

// 9. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los 
// pedidos que no han sido entregados a tiempo.

export const getAllOrderCodeClientCodeAndOrdersThatHaveNotBeenDeliveredOnTime = async () => {
    let res = await fetch("http://localhost:5508/requests?status=Entregado");
    let data = await res.json();
    let overdueOrders = [];
    data.forEach(order => {
        if (order.date_delivery > order.date_wait) {
            overdueOrders.push({
                code_request: order.code_request,
                code_client: order.code_client,
                date_wait: order.date_wait,
                date_delivery: order.date_delivery
            });
        }
    });
    return overdueOrders;
};

// 10. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos 
// cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada.

export const getAllOrderCodeClientCodeAndDeliveryDateLeastTwoDaysBefore = async () => {
    let res = await fetch("http://localhost:5508/requests");
    let data = await res.json();
    let overdueOrders = [];
    data.forEach(order => {
        let deliveryDate = new Date(order.date_delivery);
        let waitDate = new Date(order.date_wait);
        let differenceInDays = (deliveryDate - waitDate);
        if (differenceInDays >= 2) {
            overdueOrders.push({
                code_request: order.code_request,
                code_client: order.code_client,
                date_wait: order.date_wait,
                date_delivery: order.date_delivery
            });
        }
    });
    return overdueOrders;
};