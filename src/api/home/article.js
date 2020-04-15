import request from '../../modules/front/request'
import HOME_PREFIX from "./prefix";

//创建
export function getArticle(data) {
    return request({
        url: HOME_PREFIX + "/article/list",
        method: "get",
        params:data
    })
}

export function getDetail(sn) {
    return request({
        url: HOME_PREFIX + "/article/detail",
        method: "get",
        params: {sn:sn}
    })
}

