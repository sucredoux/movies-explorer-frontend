import database from "./constants";

export default class MoviesApi {

    constructor(database) {
        this._url = database.baseUrl;
        this._headers = database.headers;
    }

    #onResponse(res) {
        if (res.ok) { 
            return res.json();           
        }   return Promise.reject(`Ошибка: ${res.statusText}`);
    }
    
    getAllMovies() {
        return fetch(`${this._url}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((res) => {
            return this.#onResponse(res)
        })
    }
}
     
const moviesApi = new MoviesApi(database);
export { moviesApi };
