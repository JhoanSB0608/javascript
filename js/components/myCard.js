import { 
    getAllClientsFromCityAndCode, getAllClientsfromSpain,
    getAll, getAllClientNameAndSalesManager,
    getAllClientNameAndSalesManagerWithPayment,
    getAllClientNameAndSalesManagerWithoutPayment,
    getAllAlreadyClientsPaymentsAndManagerOffices,
    getAllNotAlreadyClientsPaymentsAndManagerOffices,
    getAllOfficeswithFuenlabradaClients,
    getAllClientsWithALateDeliveryArrive,
    getClientPayments_At_2008,
} from "../module/clients.js";
import {
    getAllEmployNotClients, getAllFullNameAndEmailsAndBoss,
    getBossFullNameAndEmail, getAllFullNamePositionDiferentSalesRepresentative,
    getAllEmployeesAndBossNames, getAllEmployeeBossAndHisBossNames,
} from "../module/employees.js";

import {
    getAllDifferentGammasFromEachClient
} from "../module/gama.js"

export class Mycard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = /*html*/`
            <link rel="stylesheet" href="../css/myCard.css">  
        `
    }
    async getAllDesign(){
        let data = await getAll();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name} y Oficina a la que pertenece el representante</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del cliente: </b>${val.client_name}</p>
                            <p><b>Ciudad: </b>${val.city_client}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllClientsFromCityAndCodeDesign(){
        let data = await getAllClientsFromCityAndCode();
        data.forEach(val => {
            let money = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val.limit_credit);
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name} # ${val.client_code}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Id: </b> ${val.id}</p>
                            <p><b>Codigo del empleado: </b>${val.code_employee_sales_manager}</p>
                            <p><b>Contacto: </b>${val.phone} - ${val.fax}</p>
                            <p><b>Nombre del representante: </b>${val.contact_name} ${val.contact_lastname}</p>
                            <p><b>Dirrecion: </b>${val.address1} ${(val.address2) ? val.address2 : ""}</p>
                            <p><b>Ubicacion: </b>${val.country} ${val.region} ${val.city} ${val.postal_code}</p>
                            <p><b>Total a prestar: </b>${money}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllEmployNotClientsDesign(){
        let data = await getAllEmployNotClients();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.name} ${val.lastname1} ${val.lastname2} # ${val.employee_code}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Id: </b> ${val.id}</p>
                            <p><b>Cargo: </b>${val.position}</p>
                            <p><b>Oficina: </b>${val.code_office}</p>
                            <p><b>Jefe encargado: </b>${val.name_boss}</p>
                            <p><b>Numero de extencion: </b>${val.extension}</p>
                            <p><b>Correo electronico: </b>${val.email}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllClientNameAndSalesManagerDesign(){
        let data = await getAllClientNameAndSalesManager();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>Cliente y Manager</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del cliente: </b> ${val.Client_name}</p>
                            <p><b>Nombre del representante: </b>${val.Manager_name} </p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllClientNameAndSalesManagerWithPaymentDesign(){
        let data = await getAllClientNameAndSalesManagerWithPayment();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>Clientes que han realizado pagos y sus representantes de ventas</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del cliente: </b> ${val.Client_name}</p>
                            <p><b>Codigo del cliente: </b>${val.Client_Code} </p>
                            <p><b>Nombre del representante: </b>${val.Manager_name} </p>
                            <p><b>Codigo del representante: </b>${val.Manager_Code} </p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllClientNameAndSalesManagerWithoutPaymentDesign(){
        let data = await getAllClientNameAndSalesManagerWithoutPayment();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>Clientes que NO han realizado pagos y sus representantes de ventas</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del cliente: </b> ${val.Client_name}</p>
                            <p><b>Codigo del cliente: </b>${val.Client_Code} </p>
                            <p><b>Nombre del representante: </b>${val.Manager_name} </p>
                            <p><b>Codigo del representante: </b>${val.Manager_Code} </p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllAlreadyClientsPaymentsAndManagerOfficesDesign(){
        let data = await getAllAlreadyClientsPaymentsAndManagerOffices();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>Clientes que han realizado pagos, sus representantes de ventas y ciudad de la oficina</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del cliente: </b> ${val.Client_name}</p>
                            <p><b>Nombre del representante: </b>${val.Manager_name} </p>
                            <p><b>Ciudad del representante: </b>${val.Manager_City} </p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllNotAlreadyClientsPaymentsAndManagerOfficesDesign(){
        let data = await getAllNotAlreadyClientsPaymentsAndManagerOffices();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>Clientes que NO han realizado pagos, sus representantes de ventas y ciudad de la oficina</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del cliente: </b> ${val.Client_name}</p>
                            <p><b>Nombre del representante: </b>${val.Manager_name} </p>
                            <p><b>Oficina del representante: </b>${val.City} </p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllOfficeswithFuenlabradaClientsDesign(){
        let data = await getAllOfficeswithFuenlabradaClients();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>Dirección de las oficinas con clientes en Fuenlabrada</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del cliente: </b> ${val.cliente}</p>
                            <p><b>Nombre del representante: </b>${val.encargado} </p>
                            <p><b>Oficina: </b>${val.Oficina} </p>
                            <p><b>Direccion de la oficina: </b>${val.direccionOficina} </p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllClientsWithALateDeliveryArriveDesign(){
        let data = await getAllClientsWithALateDeliveryArrive();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Clientes a los que no se les ha entregado a tiempo un pedido</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del cliente: </b> ${val[0].Client_name}</p>
                            <p><b>Fecha estimada: </b>${val[0].Fecha_Estimada} </p>
                            <p><b>Fecha entregada: </b>${val[0].Fecha_Entregada} </p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllClientsfromSpainDesign(){
        let data = await getAllClientsfromSpain();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Clientes Españoles</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del cliente: </b> ${val.name}</p>
                            <p><b>Pais: </b>${val.country} </p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getClientPayments_At_2008Design(){
        let data = await getClientPayments_At_2008();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Clientes que realizaron algún pago en 2008</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Codigo del cliente: </b> ${val.ClientCode}</p>
                            <p><b>Fecha: </b>${val.fecha} </p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllFullNameAndEmailsAndBossDesign(){
        let data = await getAllFullNameAndEmailsAndBoss();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Nombre completo de los empleados cuyos jefes tienen codigo 7</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del empleado: </b> ${val.name}</p>
                            <p><b>Apellido del empleado: </b>${val.fullLastname} </p>
                            <p><b>Email del empleado: </b>${val.email} </p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getBossFullNameAndEmailDesign(){
        let data = await getBossFullNameAndEmail();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Nombre completo, email y puesto del jefe de la empresa</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del jefe: </b> ${val.name}</p>
                            <p><b>Apellido del jefe: </b>${val.fullLastname} </p>
                            <p><b>Email del jefe: </b>${val.email} </p>
                            <p><b>Puesto del jefe: </b>${val.position} </p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllFullNamePositionDiferentSalesRepresentativeDesign(){
        let data = await getAllFullNamePositionDiferentSalesRepresentative();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Nombre completo y puesto de los empleados que no son representantes de ventas</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del empleado: </b> ${val.name}</p>
                            <p><b>Apellido del empleado: </b>${val.fullLastname} </p>
                            <p><b>Puesto del empleado: </b>${val.position} </p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllEmployeesAndBossNamesDesign(){
        let data = await getAllEmployeesAndBossNames();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Nombre del empleado y nombre de su jefe</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del empleado: </b> ${val.Empleado}</p>
                            <p><b>Nombre del jefe: </b>${val.JefeACargo} </p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllEmployeeBossAndHisBossNamesDesign(){
        let data = await getAllEmployeeBossAndHisBossNames();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Nombre del empleado y nombre del jefe de su jefe</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del empleado: </b> ${val.Empleado}</p>
                            <p><b>Nombre del jefe: </b>${val.JefeACargo} </p>
                            <p><b>Nombre del jefe de su jefe: </b>${val.JefeDeJefe} </p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    async getAllDifferentGammasFromEachClientDesign(){
        let data = await getAllDifferentGammasFromEachClient();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Nombre del empleado y nombre del jefe de su jefe</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Codigo del cliente: </b> ${val.codigoCliente}</p>
                            <p><b>Diferentes gamas de un producto: </b>${val.gamasDistintas} </p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    
    static get observedAttributes() {
        return ["logic"];
    }
    attributeChangedCallback(name, old, now) {
        if(name=="logic" && now=="client_6") this.getAllDesign()
        if(name=="logic" && now=="client_16") this.getAllClientsFromCityAndCodeDesign()
        if(name=="logic" && now=="client_1") this.getAllClientNameAndSalesManagerDesign()
        if(name=="logic" && now=="client_2") this.getAllClientNameAndSalesManagerWithPaymentDesign()
        if(name=="logic" && now=="client_3") this.getAllClientNameAndSalesManagerWithoutPaymentDesign()
        if(name=="logic" && now=="client_4") this.getAllAlreadyClientsPaymentsAndManagerOfficesDesign()
        if(name=="logic" && now=="client_5") this.getAllNotAlreadyClientsPaymentsAndManagerOfficesDesign()
        if(name=="logic" && now=="client_10") this.getAllOfficeswithFuenlabradaClientsDesign()
        if(name=="logic" && now=="client_7") this.getAllClientsWithALateDeliveryArriveDesign()
        if(name=="logic" && now=="client_8") this.getAllClientsfromSpainDesign()
        if(name=="logic" && now=="client_9") this.getClientPayments_At_2008Design()
        if(name=="logic" && now=="employ_1") this.getAllFullNameAndEmailsAndBossDesign()
        if(name=="logic" && now=="employ_2") this.getBossFullNameAndEmailDesign()
        if(name=="logic" && now=="employ_3") this.getAllFullNamePositionDiferentSalesRepresentativeDesign()
        if(name=="logic" && now=="employ_4") this.getAllEmployeesAndBossNamesDesign()
        if(name=="logic" && now=="employ_5") this.getAllEmployeeBossAndHisBossNamesDesign()
        if(name=="logic" && now=="employ_6") this.getAllEmployNotClientsDesign()
        if(name=="logic" && now=="gama_1") this.getAllDifferentGammasFromEachClientDesign()
        
    }
}