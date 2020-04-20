import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';	

@Component({
    selector: 'app-episode-details',
    templateUrl: './episode-details.page.html',
    styleUrls: ['./episode-details.page.scss'],
})
export class EpisodeDetailsPage implements OnInit {
    episodedetails: any;
    constructor(private router: ActivatedRoute, private api: ApiService) { }

    ngOnInit() {
               	
    let id = this.router.snapshot.paramMap.get('id');
    this.api.getEpisodeDetails(id,this.episodedetails);
    }

}
