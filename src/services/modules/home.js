import CCHRequest from "..";

export function getHomeHighCPData(){
    return CCHRequest.get({
        url:"/home/goodprice"
    })
}
export function getHomeHighScoreData(){
    return CCHRequest.get({
        url:"/home/highscore"
    })
}

export function getHomeDiscountData(){
    return CCHRequest.get({
        url:"/home/discount"
    })
}
export function getHomeRecommendData(){
    return CCHRequest.get({
        url:"/home/hotRecommenddest"
    })
}