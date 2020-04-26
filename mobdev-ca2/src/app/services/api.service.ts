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

    //getEpisodes() {
    //    return this.http.get('https://8100-fa133542-953b-4a3c-9ea0-c20038ba9568.ws-eu01.gitpod.io/assets/episodes.json')
    //}

    getEpisode(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/episodes/${id}`);
    }

    //getEpisode(id) {
    //   return this.http.get(`https://8100-fa133542-953b-4a3c-9ea0-c20038ba9568.ws-eu01.gitpod.io/assets/episodes.json`)
    //}

    getCharacters(limit: number, offset: number) {
        return this.http.get(`https://breakingbadapi.com/api/characters?limit=${limit}&offset=${offset}`)
    }


    //getCharacters() {
    //    return this.http.get('https://8100-fa133542-953b-4a3c-9ea0-c20038ba9568.ws-eu01.gitpod.io/assets/characters.json')
    //}

    getCharacter(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/characters/${id}`)
    }

    //getCharacter(id) {
    //    return this.http.get('https://8100-fa133542-953b-4a3c-9ea0-c20038ba9568.ws-eu01.gitpod.io/assets/characters.json')
    //}

    getQuotes() {
        return this.http.get('https://breakingbadapi.com/api/quotes')
    }

    getQuotesByAuthor(author: String) {
        return this.http.get(`https://breakingbadapi.com/api/quote?author=${author}`)
    }

    //getQuotes() {
    //    return this.http.get('https://8100-fa133542-953b-4a3c-9ea0-c20038ba9568.ws-eu01.gitpod.io/assets/quotes.json')
    //}


    getQuote(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/quotes/${id}`)
    }

    //getQuote(id) {
    //   return this.http.get('https://8100-fa133542-953b-4a3c-9ea0-c20038ba9568.ws-eu01.gitpod.io/assets/quotes.json')
    //}

    getDeathCount(name: String) {
        return this.http.get(`https://breakingbadapi.com/api/death-count?name=${name}`)
    }


}