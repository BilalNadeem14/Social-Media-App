
import { getConfigs, getMessage, handleResponse, log, performNetworkRequest, dataToQueryParameter } from "./helperFunctions";
import { base_url } from './configs'
import config from "./configs"; //USE IN ACTIONS
export const post = async (endpoint, body, formData) => {
    const url = base_url + endpoint;
    const configs = getConfigs('POST', body, formData);
    // console.log('configs: ', configs)
    try {
        const networkResult = await performNetworkRequest(url, configs);
        const result = await handleResponse(networkResult);
        return Promise.resolve(result);
    } catch (e) {
        console.log('logging e', e)
        const message = getMessage(e);
        return Promise.reject(message);
    }
};
export const get = async (endpoint, queryParams) => {
    const url = base_url + endpoint + dataToQueryParameter(queryParams);
    const configs = getConfigs('GET');
    try {
        const networkResult = await performNetworkRequest(url, configs);
        const result = await handleResponse(networkResult);
        return Promise.resolve(result);
    } catch (e) {
        const message = getMessage(e);
        return Promise.reject(message);
    }
};
export const put = async (endpoint, body, formData) => {
    const url = base_url + endpoint;
    const configs = getConfigs('PUT', body, formData);
    try {
        const networkResult = await performNetworkRequest(url, configs);
        const result = await handleResponse(networkResult);
        return Promise.resolve(result);
    } catch (e) {
        const message = getMessage(e);
        return Promise.reject(message);
    }
};
export const deleteRequest = async (endpoint) => {
    const url = base_url + endpoint;
    const configs = getConfigs('DELETE');
    try {
        const networkResult = await performNetworkRequest(url, configs);
        const result = await handleResponse(networkResult);
        return Promise.resolve(result);
    } catch (e) {
        const message = getMessage(e);
        return Promise.reject(message);
    }
};
const api = {
    post: post,
    get: get,
    put: put,
    delete: deleteRequest
}
export default api;