const authReducer = {loggedIn: false, user: {}, token: '', users: []} //user is the currentUser
const mainReducer = {
    general_data: [],
    loading: false,
    loadingKey: null,
    services: [],
    allPosts: [],
    // allPeople: []
  };
  
let initialStates = {}

export default initialStates = {
    authReducer: authReducer,
    mainReducer
}
