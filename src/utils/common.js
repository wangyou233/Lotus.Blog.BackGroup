import store from "@/store";
function show_alert(obj, type = "info") {
    if (typeof obj === "string") {
        obj = { title: obj, type: type };
    }
    store.commit("show_alert_dialog", obj);
}

export {show_alert}