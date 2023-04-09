import CCHRequest from "..";

export function getEntireRoomList(offset=0,size=40){
    return CCHRequest.get({

        url:"/entire/list",
        params:{
            offset,
            size
        }

    })
}