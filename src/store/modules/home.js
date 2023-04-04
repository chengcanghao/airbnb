import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
    name:'home',
    initialState:{
        productList:[
            {id:1,title:'fan',price:99}
        ]
    },
    reducers:{

    }
    }

)
const {} = homeSlice.actions
export default homeSlice.reducer