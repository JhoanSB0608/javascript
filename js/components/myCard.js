import {
    getAllSpanishClients,
    getAllMadridClients,
    getAllClientsAndSalesManagersNameWithTheCItyOfTheOffice,
    getAllClientsAndSalesManagersName,
    getAllClientsAndSalesManagersNameAndIfThereIsPayments,
    getAllClientsAndSalesManagersNameAndIfThereIsntPayments,
    getAllClientsAndSalesManagersNameAndIfThereIsPaymentsAndOfficeCity,
    getAllClientsAndSalesManagersNameAndIfThereIsntPaymentsAndOfficeCity,
    getAllClientsInFuenlabrada,
    getAllProductGamaThatAClientRequest,
    getAllClientsWhoHaventPaid,
    getAllClientsWhoHaventRequest,
    getAllClientsWhoHaveNeitherPaidNorRequest,
    getAllClientsWhoHaveRequestedButHaventPaid
} from "../module/client.js";
import {
    getAllFullNameAndEmailsAndBoss,
    getBossFullNameAndEmail,
    getAllFullnamePositionDiferentSalesRepresentative,
    getAllEmployeesAndBossesNames,
    getAllEmployeesWithBossNameAndTheBossesNames,
    getAllEmployeesThatDontHaveOffice,
    getAllEmployeesThatArentAssociatedWithAnyClient,
    getAllEmployeesThatArentAssociatedWithAnyClientAndDataOfHisOffice,
    getAllEmployeesThatArentAssociatedWithAnyClientOrOffice,
    getAllEmployeesThatArentAssociatedWithAnyClientAndHisBossName
} from "../module/employees.js";
import {
    getAllOficceAndCodeCity,
    getAllOficceCityAndMovil,
    getAllOfficesAddressWithClientsInFuenlabrada
} from "../module/offices.js"
import {
    getAllClientCodesOfPaymentsIn2008,
    getAllPaymentsFromPayPalEachYear,
    getAllPaymentMethods
} from "../module/payments.js"
import {
    getAllOrnamentalProductsWithMoreThan100Stock,
    getAllProductsThatNeverHasBeenRequested,
    getAllProductsThatNeverHasBeenRequestedWithItsNDI
} from "../module/product.js"
import {
    getAllRequestStatus,
    getAllRequestsOutOfTime,
    getAllRequestsWithTwoDaysOfAnticipation,
    getAllRequestsRejected2009,
    getAllRequestsDeliveredJanuary,
    getAllClientsWhoRecievedLateAProduct
} from "../module/requests.js"

export class Mycard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
        this.shadowRoot.innerHTML = /*html*/`
            <link rel="stylesheet" href="../css/myCard.css">
        `
    }
    async getAllSpanishClientsDesign() {
        let data = await getAllSpanishClients();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*HTML*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.name}</div>
                    </div>
                </div>
            `
        })
    }

    async getAllClientsAndSalesManagersNameWithTheCItyOfTheOfficeDesign() {
        let data = await getAllClientsAndSalesManagersNameWithTheCItyOfTheOffice();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del cliente: </b>${val.client_name}</p>
                            <p><b>Nombre del representante: </b>${val.employees_full_name}</p>
                            <p><b>Codigo de la oficina: </b>${val.employees_office_code}</p>
                            <p><b>Ciudad: </b>${val.city_employees}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    async getAllMadridClientsDesign() {
        let data = await getAllMadridClients();
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

    async getAllClientsAndSalesManagersNameDesign() {
        let data = await getAllClientsAndSalesManagersName();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del cliente: </b>${val.client_name}</p>
                            <p><b>Nombre del representante de ventas: </b>${val.sales_manager_complete_name}</p>
                        </div>
                    </div>
                </div>
            `
        })
    }

    async getAllClientsAndSalesManagersNameAndIfThereIsPaymentsDesign() {
        let data = await getAllClientsAndSalesManagersNameAndIfThereIsPayments();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del cliente: </b>${val.client_name}</p>
                            <p><b>Nombre del representante de ventas: </b>${val.sales_manager_complete_name}</p>
                        </div>
                    </div>
                </div>
            `
        })
    }

    async getAllClientsAndSalesManagersNameAndIfThereIsntPaymentsDesign() {
        let data = await getAllClientsAndSalesManagersNameAndIfThereIsntPayments();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del cliente: </b>${val.client_name}</p>
                            <p><b>Nombre del representante de ventas: </b>${val.sales_manager_complete_name}</p>
                        </div>
                    </div>
                </div>
            `
        })
    }

    async getAllClientsAndSalesManagersNameAndIfThereIsPaymentsAndOfficeCityDesign() {
        let data = await getAllClientsAndSalesManagersNameAndIfThereIsPaymentsAndOfficeCity();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del cliente: </b>${val.client_name}</p>
                            <p><b>Nombre del representante de ventas: </b>${val.sales_manager_complete_name}</p>
                            <p><b>Ciudad de la oficina del representante: </b>${val.office_city}</p>
                        </div>
                    </div>
                </div>
            `
        })
    }

    async getAllClientsAndSalesManagersNameAndIfThereIsntPaymentsAndOfficeCityDesign() {
        let data = await getAllClientsAndSalesManagersNameAndIfThereIsntPaymentsAndOfficeCity();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del cliente: </b>${val.client_name}</p>
                            <p><b>Nombre del representante de ventas: </b>${val.sales_manager_complete_name}</p>
                            <p><b>Ciudad de la oficina del representante: </b>${val.office_city}</p>
                        </div>
                    </div>
                </div>
            `
        })
    }

    async getAllClientsInFuenlabradaDesign() {
        let data = await getAllClientsInFuenlabrada();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name} # ${val.client_code}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Id: </b> ${val.id}</p>
                            <p><b>Nombre de contacto: </b>${val.contact_name} ${val.contact_lastname}</p>
                            <p><b>Codigo del empleado: </b>${val.code_employee_sales_manager}</p>
                            <p><b>Contacto: </b>${val.phone} - ${val.fax}</p>
                            <p><b>Direccion: </b>${val.address1} ${(val.address2) ? val.address2 : ""}</p>
                            <p><b>Ubicacion: </b>${val.country} ${val.region} ${val.city} ${val.postal_code}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    /*ESTA CONSULTA FALTA POR TERMINAR*/
    async getAllProductGamaThatAClientRequestDesign() {
        let data = await getAllProductGamaThatAClientRequest();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>Diferentes gamas de un producto de los clientes</div>
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


    async getAllClientsWhoHaventPaidDesign() {
        let data = await getAllClientsWhoHaventPaid();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name} # ${val.client_code}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Id: </b> ${val.id}</p>
                            <p><b>Nombre de contacto: </b>${val.contact_name} ${val.contact_lastname}</p>
                            <p><b>Codigo del empleado: </b>${val.code_employee_sales_manager}</p>
                            <p><b>Contacto: </b>${val.phone} - ${val.fax}</p>
                            <p><b>Direccion: </b>${val.address1} ${(val.address2) ? val.address2 : ""}</p>
                            <p><b>Ubicacion: </b>${val.country} ${(val.region) ? val.region : ""} ${val.city} ${val.postal_code}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    async getAllClientsWhoHaventRequestDesign() {
        let data = await getAllClientsWhoHaventRequest();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name} # ${val.client_code}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Id: </b> ${val.id}</p>
                            <p><b>Nombre de contacto: </b>${val.contact_name} ${val.contact_lastname}</p>
                            <p><b>Codigo del empleado: </b>${val.code_employee_sales_manager}</p>
                            <p><b>Contacto: </b>${val.phone} - ${val.fax}</p>
                            <p><b>Direccion: </b>${val.address1} ${(val.address2) ? val.address2 : ""}</p>
                            <p><b>Ubicacion: </b>${val.country} ${(val.region) ? val.region : ""} ${val.city} ${val.postal_code}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    async getAllClientsWhoHaveNeitherPaidNorRequestDesign() {
        let data = await getAllClientsWhoHaveNeitherPaidNorRequest();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name} # ${val.client_code}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Id: </b> ${val.id}</p>
                            <p><b>Nombre de contacto: </b>${val.contact_name} ${val.contact_lastname}</p>
                            <p><b>Codigo del empleado: </b>${val.code_employee_sales_manager}</p>
                            <p><b>Contacto: </b>${val.phone} - ${val.fax}</p>
                            <p><b>Direccion: </b>${val.address1} ${(val.address2) ? val.address2 : ""}</p>
                            <p><b>Ubicacion: </b>${val.country} ${(val.region) ? val.region : ""} ${val.city} ${val.postal_code}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    async getAllClientsWhoHaveRequestedButHaventPaidDesign() {
        let data = await getAllClientsWhoHaveRequestedButHaventPaid();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name} # ${val.client_code}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Id: </b> ${val.id}</p>
                            <p><b>Nombre de contacto: </b>${val.contact_name} ${val.contact_lastname}</p>
                            <p><b>Codigo del empleado: </b>${val.code_employee_sales_manager}</p>
                            <p><b>Contacto: </b>${val.phone} - ${val.fax}</p>
                            <p><b>Direccion: </b>${val.address1} ${(val.address2) ? val.address2 : ""}</p>
                            <p><b>Ubicacion: </b>${val.country} ${(val.region) ? val.region : ""} ${val.city} ${val.postal_code}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    async getAllFullNameAndEmailsAndBossDesign() {
        let data = await getAllFullNameAndEmailsAndBoss();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*HTML*/`
            <div class="report__card">
                <div class="card__title">
                    <div>${val.name} ${val.fullLastname}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del empleado: </b>${val.name}</p>
                        <p><b>Apellidos del empleado: </b>${val.fullLastname}</p>
                        <p><b>Correo electronico: </b>${val.email}</p>
                    </div>
                </div>
            </div>
            `;
        });
    }

    async getBossFullNameAndEmailDesign() {
        let data = await getBossFullNameAndEmail();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*HTML*/`
            <div class="report__card">
                <div class="card__title">
                    <div>${val.position}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Puesto: </b>${val.name} ${val.position}</p>
                        <p><b>Nombre del jefe de la empresa: </b>${val.name} ${val.fullLastname}</p>
                        <p><b>Correo electronico: </b>${val.email}</p>
                    </div>
                </div>
            </div>
            `;
        });
    }

    async getAllFullnamePositionDiferentSalesRepresentativeDesign() {
        let data = await getAllFullnamePositionDiferentSalesRepresentative();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*HTML*/`
            <div class="report__card">
                <div class="card__title">
                    <div>${val.name} ${val.fullLastname}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre completo del empleado: </b>${val.name} ${val.fullLastname}</p>
                        <p><b>Posición: </b>${val.position}</p>
                    </div>
                </div>
            </div>
            `;
        });
    }
    /*ESTA CONSULTA FALTA*/
    async getAllEmployeesAndBossesNamesDesign() {
        let data = await getAllEmployeesAndBossesNames();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*HTML*/`
            <div class="report__card">
                <div class="card__title">
                    <div>${val.name} ${val.fullLastname}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del empleado: </b>${val.Empleado}</p>
                        <p><b>Nombre del jefe: </b>${val.JefeACargo}</p>
                    </div>
                </div>
            </div>
            `;
        });
    }

    async getAllEmployeesWithBossNameAndTheBossesNamesDesign() {
        let data = await getAllEmployeesWithBossNameAndTheBossesNames();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*HTML*/`
            <div class="report__card">
                <div class="card__title">
                    <div>${val.name} ${val.lastname1} ${(val.lastname2) ? val.lastname2 : ""} # ${val.employee_code}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del empleado: </b>${val.Empleado}</p>
                        <p><b>Nombre del jefe: </b>${val.JefeACargo}</p>
                        <p><b>Nombre del jefe de su jefe: </b>${val.JefeDeJefe}</p>
                    </div>
                </div>
            </div>
            `;
        });
    }

    async getAllEmployeesThatDontHaveOfficeDesign() {
        let data = await getAllEmployeesThatDontHaveOffice();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*HTML*/`
            <div class="report__card">
                <div class="card__title">
                    <div>${val.name} ${val.lastname1} ${(val.lastname2) ? val.lastname2 : ""} # ${val.employee_code}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                    <p><b>Id: </b> ${val.id}</p>
                    <p><b>Cargo: </b>${val.position}</p>
                    <p><b>Jefe encargado: </b>${val.name_boss}</p>
                    <p><b>Numero de extencion: </b>${val.extension}</p>
                    <p><b>Correo electronico: </b>${val.email}</p>
                    </div>
                </div>
            </div>
            `;
        });
    }

    async getAllEmployeesThatArentAssociatedWithAnyClientDesign() {
        let data = await getAllEmployeesThatArentAssociatedWithAnyClient();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*HTML*/`
            <div class="report__card">
                <div class="card__title">
                    <div>${val.name} ${val.lastname1} ${val.lastname2} # ${val.employee_code}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Id: </b> ${val.id}</p>
                        <p><b>Cargo: </b>${val.position}</p>
                        <p><b>Oficina: </b>${val.code_office}</p>
                        <p><b>Numero de extencion: </b>${val.extension}</p>
                        <p><b>Correo electronico: </b>${val.email}</p>
                        <p><b>Codigo de jefe: </b>${val.code_boss}</p>
                    </div>
                </div>
            </div>
            `;
        });
    }

    async getAllEmployeesThatArentAssociatedWithAnyClientAndDataOfHisOfficeDesign() {
        let data = await getAllEmployeesThatArentAssociatedWithAnyClientAndDataOfHisOffice();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*HTML*/`
            <div class="report__card">
                <div class="card__title">
                    <div>${val.name} ${val.lastname1} ${val.lastname2} # ${val.employee_code}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Cargo: </b>${val.position}</p>
                        <p><b>Numero de extencion: </b>${val.extension}</p>
                        <p><b>Correo electronico: </b>${val.email}</p>
                        <p><b>Codigo de jefe: </b>${val.code_boss}</p>
                        <p><b>Oficina: </b>${val.code_office}</p>
                        <p><b>Ciudad de la oficina: </b>${val.city}</p>
                        <p><b>Pais de la oficina: </b>${val.country}</p>
                        <p><b>Region de la oficina: </b>${val.region}</p>
                        <p><b>Codigo postal de la oficina: </b>${val.postal_code}</p>
                        <p><b>Telefono movil de la oficina: </b>${val.movil}</p>
                        <p><b>Direccion de la oficina: </b>${val.address1} ${(val.address2) ? val.address2 : ""}</p>
                    </div>
                </div>
            </div>
            `;
        });
    }

    async getAllEmployeesThatArentAssociatedWithAnyClientAndDataOfHisOfficeDesign() {
        let data = await getAllEmployeesThatArentAssociatedWithAnyClientAndDataOfHisOffice();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*HTML*/`
            <div class="report__card">
                <div class="card__title">
                    <div>${val.name} ${val.lastname1} ${val.lastname2} # ${val.employee_code}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Id: </b>${val.id}</p>
                        <p><b>Cargo: </b>${val.position}</p>
                        <p><b>Numero de extencion: </b>${val.extension}</p>
                        <p><b>Correo electronico: </b>${val.email}</p>
                        <p><b>Codigo de jefe: </b>${val.code_boss}</p>
                    </div>
                </div>
            </div>
            `;
        });
    }

    async getAllEmployeesThatArentAssociatedWithAnyClientAndHisBossNameDesign() {
        let data = await getAllEmployeesThatArentAssociatedWithAnyClientAndHisBossName();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*HTML*/`
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

    async getAllOficceAndCodeCityDesign() {
        let data = await getAllOficceAndCodeCity();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*HTML*/`
            <div class="report__card">
                <div class="card__title">
                    <div>${val.code_office}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Ciudad: </b> ${val.city}</p>
                </div>
            </div>
            `;
        })
    }

    async getAllOficceCityAndMovilDesign() {
        let data = await getAllOficceCityAndMovil();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*HTML*/`
            <div class="report__card">
                <div class="card__title">
                    <div>${val.code_office}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Movil: </b> ${val.movil}</p>
                </div>
            </div>
            `;
        })
    }

    async getAllOfficesAddressWithClientsInFuenlabradaDesign() {
        let data = await getAllOfficesAddressWithClientsInFuenlabrada();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*HTML*/`
            <div class="report__card">
                <div class="card__title">
                    <div>${val.code_office}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Direccion: </b> ${val.Address}</p>
                </div>
            </div>
            `;
        })
    }

    async getAllClientCodesOfPaymentsIn2008Design() {
        let data = await getAllClientCodesOfPaymentsIn2008();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*HTML*/`
            <div class="report__card">
                <div class="card__title">
                    <div>${val.code_client}</div>
                </div>
            </div>
            `;
        })
    }

    async getAllPaymentsFromPayPalEachYearDesign() {
        let data = await getAllPaymentsFromPayPalEachYear();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*HTML*/`
            <div class="report__card">
                <div class="card__title">
                    <div>${val.id_transaction}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo del cliente: </b> ${val.code_client}</p>
                        <p><b>Fecha: </b> ${val.date_payment}</p>
                        <p><b>Total: </b> ${val.total}</p>
                        <p><b>Id: </b> ${val.id}</p>
                </div>
            </div>
            `;
        })
    }

    async getAllPaymentMethodsDesign() {
        let data = await getAllPaymentMethods();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*HTML*/`
            <div class="report__card">
                <div class="card__title">
                    <div>${val.payment_method}</div>
                </div>
            </div>
            `;
        })
    }

    async getAllOrnamentalProductsWithMoreThan100StockDesign() {
        let data = await getAllOrnamentalProductsWithMoreThan100Stock();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*HTML*/`
            <div class="report__card">
                <div class="card__title">
                    <div>${val.name} # ${val.code_product}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Dimension: </b> ${val.dimension}</p>
                        <p><b>Proveedor: </b> ${val.provider}</p>
                        <p><b>Stock: </b> ${val.stock}</p>
                        <p><b>Precio de venta: </b> ${val.price_sale}</p>
                        <p><b>Precio de proveedor: </b> ${val.price_provider}</p>
                        <p><b>Id: </b> ${val.id}</p>
                    </div>
                </div>
            </div>
            `;
        })
    }

    async getAllProductsThatNeverHasBeenRequestedDesign() {
        let data = await getAllProductsThatNeverHasBeenRequested();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*HTML*/`
            <div class="report__card">
                <div class="card__title">
                    <div>${val.name} # ${val.code_product}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Dimension: </b> ${val.dimension}</p>
                        <p><b>Proveedor: </b> ${val.provider}</p>
                        <p><b>Stock: </b> ${val.stock}</p>
                        <p><b>Precio de venta: </b> ${val.price_sale}</p>
                        <p><b>Precio de proveedor: </b> ${val.price_provider}</p>
                        <p><b>Id: </b> ${val.id}</p>
                    </div>
                </div>
            </div>
            `;
        })
    }

    async getAllProductsThatNeverHasBeenRequestedWithItsNDIDesign() {
        let data = await getAllProductsThatNeverHasBeenRequestedWithItsNDI();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*HTML*/`
            <div class="report__card">
                <div class="card__title">
                    <div>${val.name}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Descripción: </b> ${val.description}</p>
                        <p><b>Imagen: </b> ${val.image}</p>
                    </div>
                </div>
            </div>
            `;
        })
    }

    async getAllRequestStatusDesign() {
        let data = await getAllRequestStatus();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*HTML*/`
            <div class="report__card">
                <div class="card__title">
                    <div>${val.status}</div>
                </div>
            </div>
            `;
        })
    }

    async getAllRequestsOutOfTimeDesign() {
        let data = await getAllRequestsOutOfTime();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*HTML*/`
            <div class="report__card">
                <div class="card__title">
                    <div>${val.code_request}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo del cliente: </b> ${val.code_client}</p>
                        <p><b>Fecha esperada: </b> ${val.date_wait}</p>
                        <p><b>Fecha de entrega: </b> ${val.date_delivery}</p>
                    </div>
                </div>
            </div>
            `;
        })
    }

    async getAllRequestsWithTwoDaysOfAnticipationDesign() {
        let data = await getAllRequestsWithTwoDaysOfAnticipation();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*HTML*/`
            <div class="report__card">
                <div class="card__title">
                    <div>${val.code_request}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo del cliente: </b> ${val.code_client}</p>
                        <p><b>Fecha esperada: </b> ${val.date_wait}</p>
                        <p><b>Fecha de entrega: </b> ${val.date_delivery}</p>
                    </div>
                </div>
            </div>
            `;
        })
    }

    async getAllRequestsRejected2009Design() {
        let data = await getAllRequestsRejected2009();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*HTML*/`
            <div class="report__card">
                <div class="card__title">
                    <div>${val.code_request}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo del cliente: </b> ${val.code_client}</p>
                        <p><b>Fecha del pedido: </b> ${val.date_request}</p>
                        <p><b>Fecha esperada: </b> ${val.date_wait}</p>
                        <p><b>Fecha de entrega: </b> ${val.date_delivery}</p>
                        <p><b>Comentario: </b> ${(val.comment) ? val.comment : ""}</p>
                        <p><b>Id: </b>${val.id}</p>
                    </div>
                </div>
            </div>
            `;
        })
    }

    async getAllRequestsDeliveredJanuaryDesign() {
        let data = await getAllRequestsDeliveredJanuary();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*HTML*/`
            <div class="report__card">
                <div class="card__title">
                    <div>${val.code_request}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo del cliente: </b> ${val.code_client}</p>
                        <p><b>Fecha del pedido: </b> ${val.date_request}</p>
                        <p><b>Fecha esperada: </b> ${val.date_wait}</p>
                        <p><b>Fecha de entrega: </b> ${val.date_delivery}</p>
                        <p><b>Comentario: </b> ${(val.comment) ? val.comment : ""}</p>
                        <p><b>Id: </b>${val.id}</p>
                    </div>
                </div>
            </div>
            `;
        })
    }

    async getAllClientsWhoRecievedLateAProductDesign() {
        let data = await getAllClientsWhoRecievedLateAProduct();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*HTML*/`
            <div class="report__card">
                <div class="card__title">
                    <div>${val.client_name}</div>
                </div>
            </div>
            `;
        })
    }

    static get observedAttributes() {
        return ["logic"];
    }
    attributeChangedCallback(name, old, now) {
        if (name == "logic" && now == "client_1") this.getAllSpanishClientsDesign()
        if (name == "logic" && now == "client_2") this.getAllMadridClientsDesign()
        if (name == "logic" && now == "client_3") this.getAllClientsAndSalesManagersNameDesign()
        if (name == "logic" && now == "client_4") this.getAllClientsAndSalesManagersNameAndIfThereIsPaymentsDesign()
        if (name == "logic" && now == "client_5") this.getAllClientsAndSalesManagersNameAndIfThereIsntPaymentsDesign()
        if (name == "logic" && now == "client_6") this.getAllClientsAndSalesManagersNameAndIfThereIsPaymentsAndOfficeCityDesign()
        if (name == "logic" && now == "client_7") this.getAllClientsAndSalesManagersNameAndIfThereIsntPaymentsAndOfficeCityDesign()
        if (name == "logic" && now == "client_8") this.getAllClientsInFuenlabradaDesign()
        if (name == "logic" && now == "client_9") this.getAllClientsAndSalesManagersNameWithTheCItyOfTheOfficeDesign()
        if (name == "logic" && now == "client_10") this.getAllProductGamaThatAClientRequestDesign()
        if (name == "logic" && now == "client_11") this.getAllClientsWhoHaventPaidDesign()
        if (name == "logic" && now == "client_12") this.getAllClientsWhoHaventRequestDesign()
        if (name == "logic" && now == "client_13") this.getAllClientsWhoHaveNeitherPaidNorRequestDesign()
        if (name == "logic" && now == "client_14") this.getAllClientsWhoHaveRequestedButHaventPaidDesign() /*ESTA NO DESPLIEGA NADA YA QUE LA CONSULTA DE POR SI NO TIENE RESULTADO, NO EXISTE UN CLIENTE QUE HAYA PEDIDO Y NO PAGADO */

        if (name == "logic" && now == "employ_1") this.getAllFullNameAndEmailsAndBossDesign()
        if (name == "logic" && now == "employ_2") this.getBossFullNameAndEmailDesign()
        if (name == "logic" && now == "employ_3") this.getAllFullnamePositionDiferentSalesRepresentativeDesign()
        if (name == "logic" && now == "employ_4") this.getAllEmployeesAndBossesNamesDesign()
        if (name == "logic" && now == "employ_5") this.getAllEmployeesWithBossNameAndTheBossesNamesDesign()
        if (name == "logic" && now == "employ_6") this.getAllEmployeesThatDontHaveOfficeDesign()
        if (name == "logic" && now == "employ_7") this.getAllEmployeesThatArentAssociatedWithAnyClientDesign()
        if (name == "logic" && now == "employ_8") this.getAllEmployeesThatArentAssociatedWithAnyClientAndDataOfHisOfficeDesign()
        if (name == "logic" && now == "employ_9") this.getAllEmployeesThatArentAssociatedWithAnyClientOrOfficeDesign()
        if (name == "logic" && now == "employ_12") this.getAllEmployeesThatArentAssociatedWithAnyClientAndHisBossNameDesign()

        if (name == "logic" && now == "office_1") this.getAllOficceAndCodeCityDesign()
        if (name == "logic" && now == "office_2") this.getAllOficceCityAndMovilDesign()
        if (name == "logic" && now == "office_3") this.getAllOfficesAddressWithClientsInFuenlabradaDesign()

        if (name == "logic" && now == "payment_1") this.getAllClientCodesOfPaymentsIn2008Design()
        if (name == "logic" && now == "payment_2") this.getAllPaymentsFromPayPalEachYearDesign()
        if (name == "logic" && now == "payment_3") this.getAllPaymentMethodsDesign()

        if (name == "logic" && now == "product_1") this.getAllOrnamentalProductsWithMoreThan100StockDesign()
        if (name == "logic" && now == "product_2") this.getAllProductsThatNeverHasBeenRequestedDesign()
        if (name == "logic" && now == "product_3") this.getAllProductsThatNeverHasBeenRequestedWithItsNDIDesign()

        if (name == "logic" && now == "request_1") this.getAllRequestStatusDesign()
        if (name == "logic" && now == "request_2") this.getAllRequestsOutOfTimeDesign()
        if (name == "logic" && now == "request_3") this.getAllRequestsWithTwoDaysOfAnticipationDesign()
        if (name == "logic" && now == "request_4") this.getAllRequestsRejected2009Design()
        if (name == "logic" && now == "request_5") this.getAllRequestsDeliveredJanuaryDesign()
        if (name == "logic" && now == "request_6") this.getAllClientsWhoRecievedLateAProductDesign()
    }
}