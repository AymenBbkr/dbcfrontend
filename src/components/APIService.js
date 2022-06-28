

export default class APIService {
    static baseUrl = "http://127.0.0.1:8000"

    static RegisterUser(body) {
        return fetch(`${this.baseUrl}/rest-auth/registration/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(body)

        })
            .then(resp => resp.json())

    }


    static getAllClients(token) {
        return fetch(`${this.baseUrl}/clients/info/?format=json`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },

        })
            .then(resp => resp.json())
            .catch(err => console.log(err))

    }

    static updateProfile(token, body) {
        return fetch(`${this.baseUrl}/profile/update/?format=json`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify(body)

        })
            .then(resp => resp.json())
            .catch(err => console.log(err))

    }

    static createOrUpdateUserLinks(token, body) {
        return fetch(`${this.baseUrl}/client-links/create/?format=json`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify(body)

        })
            .then(resp => resp.json())
            .catch(err => console.log(err))

    }
    static getLinks(token) {
        return fetch(`${this.baseUrl}/links/?format=json`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },

        })
            .then(resp => resp.json())
            .catch(err => console.log(err))

    }
    static getUserLink(token) {
        return fetch(`${this.baseUrl}/client/link/?format=json`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },

        })
            .then(resp => resp.json())
            .catch(err => console.log(err))

    }
  
    static getProfile(token) {
        return fetch(`${this.baseUrl}/profile/?format=json`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },

        })
            .then(resp => resp.json())
            .catch(err => console.log(err))

    }

    static addConnection(token, id) {

        const data = new FormData();
        data.append("client", id);
        return fetch(`${this.baseUrl}/connection/add/?format=json`, {
            method: 'POST',
            body: data,
            headers: {
                'Authorization': `Token ${token}`,
            },

        }).then(resp => resp.json())

    }

    static getClientDetails(token, id) {

        const data = new FormData();
        data.append("id", id);
        return fetch(`${this.baseUrl}/client-details/?format=json`, {
            method: 'POST',
            body: data,
            headers: {
                
                'Authorization': `Token ${token}`,
            },

        }).then(resp => resp.json())

    }
    static removeConnection(token, id) {

        const data = new FormData();
        data.append("id", id);
        return fetch(`${this.baseUrl}/connection/remove/?=`, {
            method: 'POST',
            body: data,
            headers: {
                'Authorization': `Token ${token}`,
            },

        }).then(resp => resp.json())

    }


    static getConnections(token) {
        return fetch(`${this.baseUrl}/clients/list/?format=json`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },

        })
            .then(resp => resp.json())
            .catch(err => console.log(err))

    }


}
