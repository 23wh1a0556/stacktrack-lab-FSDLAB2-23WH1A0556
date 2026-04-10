// TODO: Set the base URL for your API
const BASE_URL="http://bvrithcloud.com/api";
export const getTasks = async(status)=>{
    const res = await fetch(`${BASE_URL}/taska?status=${status}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "x-student-id":"23WH1A0556"
        }
    });
    return res.json();
}
