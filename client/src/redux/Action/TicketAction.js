import { CREATE_TICKET, CREATE_TICKET_FAIL, CREATE_TICKET_SECCESS, GET_TICKET_INFO, GET_TICKET_INFO_FAIL, GET_TICKET_INFO_SECCESS } from "../ActionTypes/ActionTypes"
import axios from "axios"


export const CreateTicket = (ticket, token) => async (dispatch) => {
    console.log(token)
    dispatch({
        type: CREATE_TICKET,
    });
    try {
        const res = await axios.post("/ticket/Create",
            ticket,
            {
                headers: {
                    'authorization': token
                }
            }
        )
        dispatch({
            type: CREATE_TICKET_SECCESS,
            payload: res.data
        })


    } catch (error) {
        dispatch({
            type: CREATE_TICKET_FAIL,
            payload: error
        })
    }

}

export const getuserinfo  = (ticket, token) => async (dispatch) => {
    console.log(token)
    dispatch({
        type: GET_TICKET_INFO,
    });
    try {
        const res = await axios.post("/ticket/GetTicketinfo",
            ticket,
            {
                headers: {
                    'authorization': token
                }
            }
        )
        dispatch({
            type: GET_TICKET_INFO_SECCESS,
            payload: res.data
        })


    } catch (error) {
        dispatch({
            type: GET_TICKET_INFO_FAIL,
            payload: error
        })
    }

}

