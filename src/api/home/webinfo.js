import request from '../../modules/front/request'
import HOME_PREFIX from "./prefix";

export function getWebInfo(webkey="music",pageNum=1,pageSize=50) {
    return request({
        url: HOME_PREFIX + "/webinfo/list",
        method: "get",
        data:{
            "web_key":webkey,
            "pageNum":pageNum,
            "pageSize":pageSize
        }
    })
}
