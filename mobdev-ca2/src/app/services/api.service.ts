import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

     getCharacters() {
        return this.http.get('https://breakingbadapi.com/api/characters')
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

    //getQuotes() {
    //    return this.http.get('https://8100-fa133542-953b-4a3c-9ea0-c20038ba9568.ws-eu01.gitpod.io/assets/quotes.json')
    //}


    getQuote(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/quotes/${id}`)
    }

    //getQuote(id) {
     //   return this.http.get('https://8100-fa133542-953b-4a3c-9ea0-c20038ba9568.ws-eu01.gitpod.io/assets/quotes.json')
    //}

    getDeaths() {
        return this.http.get(`https://breakingbadapi.com/api/death-count?name=Gustavo+Fring`)
    }
    

}