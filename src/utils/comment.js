//替换字符串中的表情符号
function transOwO(str,map) {
    return str.replace(/:(\w*):/g,function(m,p1,p2,p3){
        //m,p1,p2,p3 //:hehe: hehe 0 :hehe:
        m = "'"+m+"'"
        for (var i in map){
            for (let z = 0; z < map[i].container.length;z++){
                if ( map[i].container[z].desc == m){
                    return '<img style="vertical-align: text-bottom" src="'+map[i].container[z].icon+'" />'
                }
            }
        }
        return m
    });
}
export {transOwO}
