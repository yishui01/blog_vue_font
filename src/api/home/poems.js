import request from '../../modules/front/request'
import HOME_PREFIX from "./prefix";

//创建
export function getPoems(data) {
    return request({
        url: HOME_PREFIX + "/poems/list",
        method: "get",
        data
    })
}