export const urls = {
    v1: 'http://dev71.onlinetestingserver.com/Clean-City-LLC/api'  //'http://dev61.onlinetestingserver.com/nogodi/v1'
}
export const base_url = urls.v1
export const endpoints = {
    auth:{
        login: '/user/login',   //'/auth/login'
        signup: '/user/signup',
    },
    general:{
        forAll: '/user',
        forgotPassword: '/user/forgotPassword',
        reject: '',
        services :'/user/services',
        home: '/user/home',
        contactUs: '/user/contactUs',
        packageDetails: '/user/packageDetail',
        serviceDetails: '/user/serviceDetail',
        bookpackage: '/user/bookpackage', 
        bookCustomPackage: '/user/bookownPackage', 
        ownPackageSlots: '/user/ownPackageSlots',
        packageSlots: '/user/packageSlots',
        serviceSlots: '/user/serviceSlots',
        changePassowrd: '/user/changePassowrd',
    }
}
const configs = {
    endpoints:endpoints,
    base_url:base_url,
}

export default configs