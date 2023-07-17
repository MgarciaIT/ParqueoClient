/****************************************************************
 * @author Manuel Garcia                                        *
 * @date 20/05/2023                                             *
 * @description Modulo Para URL de la Api                       *
****************************************************************/

import axios from 'axios'

export const makeRequest = axios.create({
    baseURL: "https://parqueosantaneco-a789cc438046.herokuapp.com/",
    withCredentials: true
})