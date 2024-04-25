import { getEmployeesByCode } from './employees.js'; import { getPaymentByClientCode } from './payments.js'; import { getOfficesByCode } from './office.js';

// 6. Devuelve un listado con el nombre de los todos los clientes españoles.
export const getAllClientsfromSpain = async () => {
    let res = await fetch("http://localhost:5501/clients?country=Spain")
    let data = await res.json();
    let dataUpdate = data.map(val => {
        return {
            name: val.client_name,
            country: val.country
        }
    })
    return dataUpdate;
}

// 16. Devuelve un listado con todos los clientes que sean de la 
// ciudad de Madrid y cuyo representante de ventas tenga el código 
// de empleado 11 o 30.
export const getAllClientsFromCityAndCode = async()=>{
    let res = await fetch("http://localhost:5501/clients?city=Madrid")
    let data = await res.json();
    let clientUpdate = [];
    clientUpdate = data.filter(val => val.code_employee_sales_manager == 11 || val.code_employee_sales_manager == 30);
    return clientUpdate
}

// Consultas multitabla

// 1.Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.

export const getAllClientNameAndSalesManager = async () => {
    let res = await fetch("http://localhost:5501/clients");
    let data = await res.json();
    for(let i=0; i<data.length; i++){
        let [dataEmployee] = await getEmployeesByCode(data[i].code_employee_sales_manager)
        data[i] = {
            Client_name: data[i].client_name,
            Manager_name: `${dataEmployee.name} ${dataEmployee.lastname1} ${dataEmployee.lastname2}`
        }
    }
    return data;
}

// 2. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.
export const getAllClientNameAndSalesManagerWithPayment = async () => {
    let payment = await getPaymentByClientCode()
    let dataUpdate = []
    for(const val of payment){
        let res = await fetch(`http://localhost:5501/clients?client_code=${val.code_client}`);
        let data = await res.json();
        let [dataEmployee] = await getEmployeesByCode(data[0].code_employee_sales_manager)
        if(!dataUpdate.some(elmt => elmt.Client_name == data[0].client_name)){
            let datos = ({
                Client_name: data[0].client_name,
                Client_Code: val.code_client,
                Manager_name: `${dataEmployee.name} ${dataEmployee.lastname1} ${dataEmployee.lastname2}`,
                Manager_Code: dataEmployee.employee_code
            })
            dataUpdate.push(datos)
        }
    }
    return dataUpdate;
}

// 3. Muestra el nombre de los clientes que **no** hayan realizado pagos junto con el nombre de sus representantes de ventas.

export const getAllClientNameAndSalesManagerWithoutPayment = async () => {
    let res = await fetch("http://localhost:5501/clients").then(res => res.json());
    let dataUpdate = [];
    for(const val of res){
        let [employee] = await getEmployeesByCode(val.code_employee_sales_manager);
        let [pago] = await getPaymentByClientCode(val.client_code)
        if(pago == undefined) dataUpdate.push({
            Client_name: val.client_name,
            clientCode: val.client_code,
            Manager_name: `${employee.name} ${employee.lastname1} ${employee.lastname2}`,
            Manager_Code: val.code_employee_sales_manager
        })
    }
    return dataUpdate;
}

// 4.Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la 
// ciudad de la oficina a la que pertenece el representante.

export const getAllAlreadyClientsPaymentsAndManagerOffices = async() =>{
    let clients = await getAllClientNameAndSalesManagerWithPayment();
    let dataUpdate = [];
    for(const client of clients){
        let [dataEmployee] = await getEmployeesByCode(client.Manager_Code);
        let [offices] = await getOfficesByCode(dataEmployee.code_office);
        if(!dataUpdate.some(elmt => elmt.Client_name == client.Client_name)){
            dataUpdate.push({
                Client_name: client.Client_name,
                Manager_name: `${dataEmployee.name} ${dataEmployee.lastname1} ${dataEmployee.lastname2}`,
                Manager_City: offices.city
            })
        }
    }
    return dataUpdate;
}

// 5.Devuelve el nombre de los clientes que no hayan hecho pagos y el nombre de sus representantes 
// junto con la ciudad de la oficina a la que pertenece el representante.

export const getAllNotAlreadyClientsPaymentsAndManagerOffices = async() =>{
    let clients = await getAllClientNameAndSalesManagerWithoutPayment();
    let dataUpdate = [];
    for(const client of clients){
        let [dataEmployee] = await getEmployeesByCode(client.Manager_Code);
        let [offices] = await getOfficesByCode(dataEmployee.code_office);
        if(!dataUpdate.some(elmt => elmt.Client_name == client.Client_name)){
            dataUpdate.push({
                Client_name: client.Client_name,
                Manager_name: `${dataEmployee.name} ${dataEmployee.lastname1} ${dataEmployee.lastname2}`,
                City: offices.city
            })
        }
    }
    return dataUpdate;
}

// 6 Lista la dirección de las oficinas que tengan clientes en Fuenlabrada.

export const getAllOfficeswithFuenlabradaClients = async () =>{
    let res = await fetch("http://localhost:5501/clients?city=Fuenlabrada").then(res => res.json());
    let dataUpdate = [];
    for(const val of res){
        let [employee] = await getEmployeesByCode(val.code_employee_sales_manager)
        let {code_office} = employee
        let [officeDirection] = await getOfficesByCode(code_office)
        dataUpdate.push({
            cliente: val.client_name,
            encargado: `${employee.name} ${employee.lastname1} ${employee.lastname2}`,
            Oficina: code_office,
            direccionOficina: `${officeDirection.address1} ${officeDirection.address2}`
        })
    }
    return dataUpdate;
}

// 7. Devuelve el nombre de los clientes y el nombre de sus representantes
// junto con la ciudad de la oficina a la que pertenece el representante.
export const getAll = async()=>{
    let res = await fetch("http://localhost:5501/clients")
    let client = await res.json();
    for (let i = 0; i < client.length; i++) {
        // Actualiza la data clientes eliminando identificadores que no queremos
        let { 
            id:id_client,
            limit_credit,
            postal_code:postal_code_client,
            country:country_client,
            region:region_client,
            city,
            address2:address2_client,
            address1:address1_client,
            fax,
            phone,
            ...clientUpdate} = client[i]
            client[i] = clientUpdate
        // Realizamos la consulta al fucion modular de los empleados para buscar
        // la informacion del empleado segun su id de la data cliente anterior
        // buscada
        let [employee] = await getEmployeesByCode(clientUpdate.code_employee_sales_manager)
        
        let {
            id:id_employee,
            extension,
            email,
            code_boss,
            position,
            ...employeeUpdate
        } = employee
        let [office] = await getOfficesByCode(employeeUpdate.code_office)
        let {
            id:id_office,
            country,
            region,
            postal_code,
            movil,
            address1,
            address2,
            ...officeUpdate
        } = office
        let data = {...clientUpdate, ...employeeUpdate, ...officeUpdate}
        // {  
        //     client_code: 38,
        //     client_name: 'El Jardin Viviente S.L',
        //     contact_name: 'Justin',
        //     contact_lastname: 'Smith',
        //     code_employee_sales_manager: 31,
        //     employee_code: 31,
        //     name: 'Mariko',
        //     lastname1: 'Kishi',
        //     lastname2: '',
        //     code_office: 'SYD-AU',
        //     city: 'Sydney'
        //   }
        client[i] = {
            client_name: `${data.client_name}`,
            employees_full_name: `${data.name} ${data.lastname1} ${data.lastname2}`,
            employees_office_code: data.code_office,
            city_employees: data.city
        }
        
    }
    return client;
}