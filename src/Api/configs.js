export const urls = {
    v1: ''
}
export const base_url = urls.v1
export const endpoints = {
    auth:{
        login: '/user/login',   //'/auth/login'
        signup: '/user/signup',
    },
    
}
const configs = {
    endpoints:endpoints,
    base_url:base_url,
}

export default configs