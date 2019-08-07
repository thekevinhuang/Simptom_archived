export function googleLogin(authResult) {
    return function(dispatch) {
        return fetch('/api/auth/request', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin',
            body: JSON.stringify(authResult)
        })
        .then(result => result.json())
        .then((responseJson)=> {
            dispatch({type: 'LOGIN_SUCCESS', user:responseJson})
            if (typeof localStorage === 'object') {
                try {
                    //alert("you logged in!")
                    localStorage.setItem('current_user', JSON.stringify(responseJson))
                } catch (e) {
                    alert("There was an issue!")
                }
            }
        })
        .catch(error=>{
            dispatch({type: 'LOGIN_FAILURE', error:error})
        })
    }
}

export function userLogout() {
    return function (dispatch) {
        dispatch({type: "USER_LOGOUT", user:{}})
    }
}

export function userLogin(user) {
    return function (dispatch) {
        //fix route
        return fetch('/api/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin',
            body: JSON.stringify({user:user})
            .then(result=> result.json())
            .then((responseJson)=> {
                dispatch({type: "USER_LOGIN", user:responseJson})
                if (typeof localStorage === 'object'){
                    try{
                        localStorage.setItem("current_user", JSON.stringify(responseJson))
                    } catch (e){
                        alert("There was an issue with your login")
                    }
                }
            })
            .catch(error=>{
                dispatch({type: "LOGIN_FAILURE", error:error})
            })

        })
        
    }
}
//write signupUser