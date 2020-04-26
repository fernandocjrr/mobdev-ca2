import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-deaths',
    templateUrl: './deaths.page.html',
    styleUrls: ['./deaths.page.scss'],
})
export class DeathsPage implements OnInit {

    deaths: any;
    name: string = '';

    constructor(private router: Router, private api: ApiService, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {

        this.deaths = this.api.getDeathCount(this.name);
        this.deaths.subscribe(data => { console.log('my data', data); });
        
    }
}
