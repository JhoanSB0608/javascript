// 13 Devuelve un listado con todos los pagos que se realizaron en el 
// año 2008 mediante Paypal. Ordene el resultado de mayor a menor.

export const getAllPaymentsFromPayPalEachYear = async () => {
    let res = await fetch("http://localhost:5506/payments?payment=PayPal")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        let { date_payment } = val
        let [year] = date_payment.split("-")
        if (year == "2008") {
            dataUpdate.push(val)
        }
    });
    dataUpdate.sort((a, b) => {
        const dateA = new Date(a.date_payment);
        const dateB = new Date(b.date_payment);
        return dateB - dateA;
    });
    return dataUpdate
}

//14. Devuelve un listado con todas las formas de pago que aparecen en la tabla pago. Tenga en cuenta que no deben aparecer formas de pago repetidas.

export const getAllPaymentsMethods = async () => {
    let res = await fetch('http://localhost:5506/payments');
    let data = await res.json();
    let paymentMethodsSet = new Set(data.map(item => item.payment));
    let uniquePaymentMethods = [...paymentMethodsSet];
    return uniquePaymentMethods;
}

//Obtener el pago de algun cliente mediante codigo
export const getPaymentByClientCode = async (code = "") => {
    let res = await fetch("http://localhost:5506/payments?code_client=${code}");
    let data = await res.json();
    return data;
}

export const getAllClientsWhoPaid = async(code)=>{
    let res = await fetch("http://localhost:5506/payments?code_client=${code}")
    let data =await res.json();
    return data;

}