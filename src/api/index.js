import {
    PostRequest,
    GetRequest,
    PutRequest,
    DeleteRequest,
    servie
} from "./request"


export function setTokenHeader(token){
    servie.defaults.headers.common["Authorization"] = `Bearer ${token}`
}

// export function login(data) {
//     return servie({
//         method:"POST",
//         url:"/Admin/Login",
//         data
//     })
// }
export function login(data) {
    return PostRequest("/Admin/Login",data)
}





