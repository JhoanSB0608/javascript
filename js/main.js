import { 
    getAllOficceAndCodeCity, 
    getAllOficceCityAndMovil 
} from "./module/offices.js";
import { 
    getAllFullNameAndEmailsAndBoss,
    getBossFullNameAndEmail,
    getAllFullnamePositionDiferentSalesRepresentative
} from "./module/employees.js";

import { 
    getAllClientsFromCityAndCode,
    getAll
} from "./module/clients.js";

import { 
    getAllPaymentsFromPayPalEachYear 
} from "./module/payments.js";

console.log(await getAll());