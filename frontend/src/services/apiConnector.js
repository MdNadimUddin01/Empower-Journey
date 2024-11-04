import axios from "axios";


export const axiosInstance = await axios.create({});

export const apiConnector = async(method , url , bodyData , headers , params) =>{

    return axiosInstance(
        {
            method : `${method}`,
            url:bodyData ? bodyData:null,
            headers : headers ? headers : null,
            params : params ? params : null
        }

    )
}