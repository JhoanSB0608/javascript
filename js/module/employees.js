// 3. Devuelve un listado con el nombre, apellidos y email de los empleados 
// cuyo jefe tiene un código de jefe igual a 7.
export const getAllFullNameAndEmailsAndBoss = async () => {
    let res = await fetch("http://localhost:5502/employee?code_boss=7")
    let data = await res.json();
    let dataUpdate = data.map(val => {
        return {
            name: val.name,
            fullLastname: `${val.lastname1} ${val.lastname2}`,
            email: val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)[0]
        }
    })
    return dataUpdate;
}
// 4. Devuelve el nombre del puesto, nombre, apellidos y
//  email del jefe de la empresa.
export const getBossFullNameAndEmail = async () => {
    let res = await fetch("http://localhost:5502/employee")
    let data = await res.json();
    let dataUpdate = []
    data.forEach(val => {
        if (val.code_boss == null) {
            dataUpdate.push({
                position: val.position,
                name: val.name,
                fullLastname: `${val.lastname1} ${val.lastname2}`,
                email: val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)[0]

            })
        }
    })
    return dataUpdate
}

//5. Devuelve un listado con el nombre, apellidos y 
//puesto de aquellos empleados que no sean representantes de ventas.

export const getAllFullNamePositionDiferentSalesRepresentative = async () => {
    let res = await fetch("http://localhost:5502/employee?position_ne=Representante Ventas")
    let data = await res.json();
    let dataUpdate = []; // Inicializa dataUpdate como un array vacío en lugar de un objeto
    data.forEach(val => {
        if (val.code_boss != null) {
            dataUpdate.push({
                name: val.name,
                fullLastname: `${val.lastname1} ${val.lastname2}`,
                position: val.position,
            });
        }
    });
    return dataUpdate;
}

//Consultas Multitabla

// 8.Devuelve un listado con el nombre de los empleados junto con el nombre de sus jefes
export const getAllEmployeesAndBossNames = async () => {
    let res = await fetch('http://localhost:5502/employee').then(res => res.json());
    let dataUpdate = res.map(async (val) => {
        if (val.code_boss == null) {
            return { Director_general: `${val.name} ${val.lastname1} ${val.lastname2}`};
        }
        let [boss] = await getEmployeesByCode(val.code_boss);
        return {
            Empleado: `${val.name} ${val.lastname1} ${val.lastname2}`,
            JefeACargo: boss.name + ' ' + boss.lastname1 + ' ' + boss.lastname2
        };
    });
    return await Promise.all(dataUpdate);
};

// 9. Devuelve un listado que muestre el nombre de cada empleados, el nombre de su jefe y el nombre del jefe de sus jefe.
export const getAllEmployeeBossAndHisBossNames = async () => {
    let res = await fetch('http://localhost:5502/employee').then(res => res.json());
    let dataUpdate = res.map(async (val) => {
        if (val.code_boss == null) return { Director_general: `${val.name} ${val.lastname1} ${val.lastname2}` };
        let [boss] = await getEmployeesByCode(val.code_boss);
        if (boss.code_boss == null) return {
            Empleado: `${val.name} ${val.lastname1} ${val.lastname2}`,
            JefeACargo: `${boss.name} ${boss.lastname1} ${boss.lastname2}`
        };
        let [bossBoss] = await getEmployeesByCode(boss.code_boss);
        return {
            Empleado: `${val.name} ${val.lastname1} ${val.lastname2}`,
            JefeACargo: `${boss.name} ${boss.lastname1} ${boss.lastname2}`,
            JefeDeJefe: `${bossBoss.name} ${bossBoss.lastname1} ${bossBoss.lastname2}`
        };
    });
    return await Promise.all(dataUpdate);
};

// Consultas multitabla (Composición externa)
// 12. Devuelve un listado con los datos de los empleados que no 
// tienen clientes asociados y el nombre de su jefe asociado

export const getAllEmployNotClients = async()=>{
    let dataClients = await getAllClients();
    let dataEmployees = await getAllEmploy();
    let code_employee_sales_manager = [...new Set(dataClients.map(val => val.code_employee_sales_manager))]
    let employee_code = dataEmployees.map(val => val.employee_code)
    let codes = [
        code_employee_sales_manager,
        employee_code
    ]
    let code = codes.reduce((resultado, array) => resultado.filter(elemento => !array.includes(elemento)).concat(array.filter(elemento => !resultado.includes(elemento))))
    let employees = []
    for (let i = 0; i < code.length; i++) {
        let searchingEmployees = async() => await getEmployByCode(code[i])
        let [employee] = await searchingEmployees()
        if(!employee.code_boss) {
            let {
                code_boss,
                ...employeeUpdate
            } = employee
            employeeUpdate.name_boss = employee.name;
            employees.push(employeeUpdate)
            continue
        }
        let searchedBoss = async() => await getEmployByCode(employee.code_boss)
        let [boos] = await searchedBoss()
        let {
            code_boss,
            ...employeeUpdate
        } = employee
        employeeUpdate.name_boss = boos.name;
        employees.push(employeeUpdate)
    }
    return employees
}

// Obtener toda la informacion del empleado por codigo
export const getEmployeesByCode = async (code) => {
    let res = await fetch(`http://localhost:5502/employee?employee_code=${code}`)
    let data = await res.json();
    return data
}