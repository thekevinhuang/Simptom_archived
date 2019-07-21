function userReducer (state={}, action) {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                currentUser: action.user
            }
        default:
            return state
    }
}

export default userReducer