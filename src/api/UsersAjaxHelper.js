const BASE_URL = 'http://localhost:3000/api';

export const fetchUsers = async () => {
    try {
      const response = await fetch(`${BASE_URL}/users`, {
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const result = await response.json();
      console.log(result);
      return result.users;
    } catch (err) {
      console.error(err);
    }
  }

export const fetchUsersById = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/users/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        });
        const result = await response.json();
        console.log(result);
        return result.users;
    } catch (err) {
        console.error(err);
    }
}

export const fetchUsersByEmail = async (email) => {
    try {
        const response = await fetch(`${BASE_URL}/users/${email}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        });
        const result = await response.json();
        console.log(result);
        return result.users;
    } catch (err) {
        console.error(err);
    }
}

export async function registerUser(userObj) {
    try {
        const response = await fetch(`${BASE_URL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "password": userObj.password,
              "email": userObj.email,
              "firstName": userObj.firstName,
              "lastName": userObj.lastName,
              "address": userObj.address,
              "isAdministrator": userObj.isAdministrator
            })
        });
        const result = await response.json();
        console.log("sign up response: ", result);
        return result.token;
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}
  
export const login = async (username, password) => {
    try {
        const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": username,
            "password": password 
        })
        });
        const result = await response.json();
        console.log(result);
        return result.token;
    } catch (err) {
        console.error(err);
    }
}