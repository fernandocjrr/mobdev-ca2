import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {


    constructor(private http: HttpClient) { }


    getEpisodes() {
        return this.http.get(`https://www.breakingbadapi.com/api/episodes`);
    }

    getEpisode(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/episodes/${id}`);
    }

    getCharacters(limit: number, offset: number) {
        return this.http.get(`https://breakingbadapi.com/api/characters?limit=${limit}&offset=${offset}`)
    }

    getCharacter(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/characters/${id}`)
    }

    getQuotes() {
        return this.http.get('https://breakingbadapi.com/api/quotes')
    }

    getQuotesByAuthor(author: String) {
        return this.http.get(`https://breakingbadapi.com/api/quote?author=${author}`)
    }

    getQuote(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/quotes/${id}`)
    }

    getDeathCount(name: String) {
        return this.http.get(`https://breakingbadapi.com/api/death-count?name=${name}`)
    }


}