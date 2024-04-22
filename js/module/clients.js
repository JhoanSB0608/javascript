export const getAllFullNameSpanishClients = async () => {
    let res = await fetch("http://localhost:5501/clients")
    let data = await res.json();
    let dataUpdate = data.map(val => {
        return {
            name: val.name,
        }
    })
    return dataUpdate;
}