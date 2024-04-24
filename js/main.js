// import { 
//     getAllOficceAndCodeCity, 
//     getAllOficceCityAndMovil 
// } from "./module/offices.js";
// import { 
//     getAllFullNameAndEmailsAndBoss,
//     getBossFullNameAndEmail,
//     getAllFullnamePositionDiferentSalesRepresentative
// } from "./module/employees.js";

// import { 
//     getAllClientsFromCityAndCode,
//     getAll, getAllClientsFromSpain, getListClientsPayIn2008
// } from "./module/clients.js";
// console.log(await getListClientsPayIn2008());

// import { 
//     getAllPaymentsFromPayPalEachYear 
// } from "./module/payments.js";

import { 
    getListStatusRequests, getAllClientCodeOrderedBefore,
    getAllOrderCodeClientCodeAndOrdersThatHaveNotBeenDeliveredOnTime,
    getAllOrderCodeClientCodeAndDeliveryDateLeastTwoDaysBefore, getAllOrdersThatWereRejectedIn2009,
    getAllOrdersDeliveredInTheMonthOfJanuaryOfAnyYear
} from "./module/request.js";
console.log(await getAllOrderCodeClientCodeAndDeliveryDateLeastTwoDaysBefore());
