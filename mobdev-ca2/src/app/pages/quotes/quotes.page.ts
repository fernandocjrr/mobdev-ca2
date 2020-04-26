import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-quotes',
    templateUrl: './quotes.page.html',
    styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {

    quotes: Observable<any>;
    author: string = '';

    constructor(private router: Router, private api: ApiService) { }

    ngOnInit() {
        this.quotes = this.api.getQuotes();
        this.quotes.subscribe(data => { console.log('my data', data); });
    }
    openDetails(quote) {
        let quoteID = quote.quote_id;
        this.router.navigateByUrl(`/tabs/quotes/${quoteID}`);
    }

    //Pass the author typed in the search toolbar to getQuotesByAuthor method which returns all quotes by the author.
    //The search is not case sensitive but the whole name and surname need to be typed in order to return the right collection.
    filter() {
        this.quotes = this.api.getQuotesByAuthor(this.author);
        this.quotes.subscribe(data => { console.log('my data', data); });
    }
}
