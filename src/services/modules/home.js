import CCHRequest from "..";

export function getHomeHighCP(){
    return CCHRequest.get({
        url:"/home/goodprice"
    })
}
export function getHomeHighScore(){
    return CCHRequest.get({
        url:"/home/highscore"
    })
}