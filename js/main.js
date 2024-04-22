import prompt from 'async-prompt'

import { 
    getAllFullNameAndEmailsAndBoss,
    getBossFullNameAndEmail, getAllFullNamePositionDiferentSalesRepresentative
} from "./module/employees.js";

// console.log(await getAllFullNameAndEmailsAndBoss())
// console.log(await getBossFullNameAndEmail());
console.log(await getAllFullNamePositionDiferentSalesRepresentative())

// import { 
//     getAllFullNameSpanishClients
// } from "./module/clients.js";

// console.log(await getAllFullNameSpanishClients())
