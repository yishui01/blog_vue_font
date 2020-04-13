import request from '../../utils/request'
import BACK_PREFIX from "./prefix";

export function updatePass(data) {
    return request({
        url: BACK_PREFIX + "/update/pass",
        method: "post",
        data
    })
}

//创建
export function createApi(data) {
    return request({
        url: BACK_PREFIX + "/user/create",
        method: "post",
        data
    })
}

//更新
export function updateApi(data) {
    return request({
        url: BACK_PREFIX + "/user/update",
        method: "post",
        data
    })
}

//删除
export function deleteApi(id) {
    return request({
        url: BACK_PREFIX + `/user/delete`,
        method: "post",
        data: "id=" + id //这是传formData
    })
}

//获取列表
export function getListApi(param) {
    return request({
        url: BACK_PREFIX + "/user/list",
        method: "get",
        params: param
    })
}