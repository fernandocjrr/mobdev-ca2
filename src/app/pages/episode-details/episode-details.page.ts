import { LikeService } from '../../services/(dis)like.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-episode-details',
    templateUrl: './episode-details.page.html',
    styleUrls: ['./episode-details.page.scss'],
})
export class EpisodeDetailsPage implements OnInit {

    episode: any;
    isLiked = false;
    isDisliked = false;
    episodeId = null;

    constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private likeService: LikeService) { }

    ngOnInit() {

        this.episodeId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getEpisode(this.episodeId).subscribe(res => {
            this.episode = res[0];
        });

          this.likeService.isLikedEpisode(this.episodeId).then(liked => {
            this.isLiked = liked;
        });

        this.likeService.isDislikedEpisode(this.episodeId).then(disliked => {
            this.isDisliked = disliked;
        });
    }

    likeEpisode() {
        this.likeService.likeEpisode(this.episodeId).then(() => {
            this.isLiked = true;
            this.isDisliked = false;
        });
    }

    dislikeEpisode(){
        this.likeService.dislikeEpisode(this.episodeId).then(() => {
            this.isLiked = false;
            this.isDisliked = true;
        });
    }

    noStatusEpisode(){
        this.likeService.noStatusEpisode(this.episodeId);
        this.isLiked = false;
        this.isDisliked = false;
    }
}
