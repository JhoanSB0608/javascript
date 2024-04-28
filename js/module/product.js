//15. Devuelve un listado con todos los productos que pertenecen a la gama Ornamentales y que tienen más de 100 unidades en stock. 
// El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio.

export const getAllOrnamentalsProducts = async () => {
    let res = await fetch("http://localhost:5507/products?gama=Ornamentales&stock_gt=100");
    let data = await res.json();
    let dataUpdate = data.sort((a, b) => {
        return b.price_sale - a.price_sale
    })
    return dataUpdate;
}

//Obtener data de un producto mediante su codigo
export const getProductByCode = async (code = '') => {
    let res = await fetch(`http://localhost:5507/products?code_product=${code}`)
    let data = await res.json()
    return data
}