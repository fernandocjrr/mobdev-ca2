import { FavouriteService } from '../../services/favourite.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-character-details',
    templateUrl: './character-details.page.html',
    styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

    character: any;
    isFavourite = false;
    characterId = null;

    constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private favouriteService: FavouriteService) { }

    ngOnInit() {
        
        this.characterId = this.activatedRoute.snapshot.paramMap.get('id');

        this.api.getCharacter(this.characterId).subscribe(res => {
            this.character = res[0];
        });

        this.favouriteService.isFavourite(this.characterId).then(isFav => {
            this.isFavourite = isFav;
        });
    }

        favouriteEpisode() {
        this.favouriteService.favouriteEpisode(this.characterId).then(() => {
            this.isFavourite = true;
        });
    }

    unfavouriteEpisode() {
        this.favouriteService.unfavouriteEpisode(this.characterId).then(() => {
            this.isFavourite = false;
        });
    }


}
