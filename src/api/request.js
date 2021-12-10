import axios from "axios"
import store from "@/store";
import router from "@/router";
import {show_alert} from "../utils/common";

var api_root = process.env["VUE_APP_API_ROOT"]

const servie = axios.create({
    baseURL: api_root,
    timeout: 2000
})

servie.interceptors.request.use(config => {
        store.commit("set_loading", true);
        return config;
    },
    error => {
        Promise.reject(error)
    }
)
servie.interceptors.response.use(res => {
        store.commit("set_loading", false);
        if (res === null || res === undefined) {
            show_alert("服务器错误", "error");
        }
        let data = res.data;
        if (data.Code !== "") {
            show_alert(data.Message, "error")
            return null;
        }
        return data.Data;
    },
    err => {
        if (err && err.response) {
            switch (err.response.status) {
                case 400:
                    err.message = err.response.data.error_description;
                    break;
                case 401:
                    err.message = "授权过期(401)";
                    router.push("/login");
                    break;
                case 403:
                    err.message = "拒绝访问(403)";
                    break;
                case 404:
                    err.message = "请求出错(404)";
                    break;
                case 408:
                    err.message = "请求超时(408)";
                    break;
                case 406:
                    err.message = err.response.data.Message;
                    break;
                case 500:
                    err.message = err.response.data.Message;
                    break;
                case 501:
                    err.message = "服务未实现(501)";
                    break;
                case 502:
                    err.message = "网络错误(502)";
                    break;
                case 503:
                    err.message = "服务不可用(503)";
                    break;
                case 504:
                    err.message = "网络超时(504)";
                    break;
                case 505:
                    err.message = "HTTP版本不受支持(505)";
                    break;
                default:
                    err.message = "连接出错(" + err.response.status + ")!";
            }
        } else {
            err.message = "连接服务器失败!";
        }
        show_alert(err.message, "error")
        return Promise.reject(err);
    })

function PostRequest(url, data) {
    return servie({
        method: "POST",
        url: url,
        data: data
    })
}
function PutRequest(url, data) {
    return servie({
        method: "POST",
        url: url,
        data: data
    })
}
function DeleteRequest(url){
    return servie({
        method: "DELETE",
        url: url,
    })
}
function GetRequest(url,params){
    return servie({
        method: "GET",
        url: url,
        params
    })
}

export {
    servie,
    PostRequest,
    PutRequest,
    DeleteRequest,
    GetRequest
}