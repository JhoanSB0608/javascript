export const getAllProfile = async()=> {
    let conecion = await fetch ("https://localhost:300/profile", {method: "GET"});
    let data = await  conecion.json();
    return data;
}

export const postProfile = async(name)=> {
    let conexion = await fetch("https://localhost:300/profile",
    {
        method: "POST",
        body: JSON.stringify({name})
    }
    );
    let data = await conexion.json();
    return data
}