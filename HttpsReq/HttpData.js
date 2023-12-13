

export async function GetData(){
    const res= await fetch("https://randomuser.me/api/?results=20");
    const myJson = await res.json();
    return myJson.results;
}