const authentication = {
    baseUrl: 'https://api.sucredoux-movie.nomoredomainsclub.ru',
    headers: {
        "Content-Type": "application/json",
    }
}

export default class MainApi {

    constructor(authentication) {
        this._url = authentication.baseUrl;
        this._headers = authentication.headers;
    }

    #onResponse(res){
        if (res.ok) {
          return res.json();
        } return Promise.reject(`${res.statusText}`);        
    }

    registerUser(data) {
        return fetch(`${this._url}/signup`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                password: data.password            
            })
          })
          .then((res) => {
            return this.#onResponse(res)
          })
    }

    signInUser(data) {
        return fetch(`${this._url}/signin`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        })
        .then((res) => {
            return this.#onResponse(res)
        })
    }

    checkRegistration(jwt) {
        return fetch(`${this._url}/users/me`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${jwt}`
            }
        })
        .then((res) => {
            return this.#onResponse(res)
        })
    }

    getSavedMovies(jwt) {
        return fetch(`${this._url}/movies`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then((res) => {
            return this.#onResponse(res)
        })
    }

    saveMovie(data) {
        return fetch (`${this._url}/movies`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('jwt')}`
            },
            body: JSON.stringify({
                movieId: data.movieId,
                nameRU: data.nameRU,
                nameEN: data.nameEN,
                director: data.director,
                country: data.country,
                year: data.year,
                duration: data.duration,
                description: data.description,
                image: data.image,
                trailerLink: data.trailerLink,
                thumbnail: data.thumbnail
            })
            })
            .then((res) => {
                return this.#onResponse(res)
              })
        }
    
    removeMovie(movieId) {
        return fetch (`${this._url}/movies/${movieId}`, {
            method: 'DELETE',
              headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${localStorage.getItem('jwt')}`
          },
          })
          .then((res) => {
            return this.#onResponse(res)
          })
    }

    fetchUserInfo(jwt) {
        return fetch (`${this._url}/users/me`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("jwt")}`
            }
        })
        .then((res) => {
            return this.#onResponse(res)
        })
    }

    editUserInfo(data) {
        return fetch (`${this._url}/users/me`, {
            method: 'PATCH' ,
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('jwt')}`
            },    
            body: JSON.stringify({
                name: data.name,
                email: data.email
          })
        })
        .then((res) => {
          return this.#onResponse(res)
        })
    }    
}

const mainApi = new MainApi(authentication);
export { mainApi };
