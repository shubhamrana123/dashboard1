import axios from "axios"
import { FETCH_ALL_POSTS } from "../../action-types"

export const handleCounterAction = (action_type: any, payload: any) => {
    return {
        type: action_type,
        payload: payload
    }
}

export const fetchPosts = () => async(dispatch: (arg0: { type: string; payload: any }) => void) => {
   try {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
    dispatch({
        type: FETCH_ALL_POSTS,
        payload: data
    })
   } catch(err: any) {
        console.warn('Axios Error Code --', err.code)
        dispatch({
            type: 'ERROR',
            payload: err
        })

   }
}