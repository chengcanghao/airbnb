import CCHRequest from "..";

export function getHomeHighCP(){
    return CCHRequest.get({
        url:"/home/goodprice"
    })
}