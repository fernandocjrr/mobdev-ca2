import { LikeService } from '../../services/(dis)like.service';
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
    isLiked = false;
    isDisliked = false;
    characterId = null;

    constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private likeService: LikeService) { }

    ngOnInit() {
        this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getCharacter(this.characterId).subscribe(res => {
            this.character = res[0];
        });

        this.likeService.isLikedCharacter(this.characterId).then(liked => {
            this.isLiked = liked;
        });

        this.likeService.isDislikedCharacter(this.characterId).then(disliked => {
            this.isDisliked = disliked;
        });
    }

    likeCharacter() {
        this.likeService.likeCharacter(this.characterId).then(() => {
            this.isLiked = true;
            this.isDisliked = false;
        });
    }

    dislikeCharacter(){
        this.likeService.dislikeCharacter(this.characterId).then(() => {
            this.isLiked = false;
            this.isDisliked = true;
        });
    }

    noStatusCharacter(){
        this.likeService.noStatusCharacter(this.characterId);
        this.isLiked = false;
        this.isDisliked = false;
    }
}
