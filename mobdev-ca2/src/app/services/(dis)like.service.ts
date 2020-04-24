import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const LIKED_EPI = 'likedEpisodes';
const DISLIKED_EPI = 'dislikedEpisodes';
const LIKED_CHAR = 'likedCharacters';
const DISLIKED_CHAR = 'dislikedCharacters';

@Injectable({
    providedIn: 'root'
})
export class LikeService {

    constructor(private storage: Storage, private storageChar: Storage) { }

    //=============================CHARACTERS===============================

    getAllLikedCharacters() {
        return this.storageChar.get(LIKED_CHAR);
    }

    getAllDislikedCharacters() {
        return this.storageChar.get(DISLIKED_CHAR);
    }

    isLikedCharacter(characterId) {
        return this.getAllLikedCharacters().then(result => {
            return result && result.indexOf(characterId) !== -1;
        });
    }


    isDislikedCharacter(characterId) {
        return this.getAllDislikedCharacters().then(result => {
            return result && result.indexOf(characterId) !== -1;
        });
    }

    likeCharacter(characterId) {
        this.removeDislikedCharacter(characterId);
        return this.getAllLikedCharacters().then(result => {
            if (result) {
                result.push(characterId);
                return this.storageChar.set(LIKED_CHAR, result);
            } else {
                return this.storageChar.set(LIKED_CHAR, [characterId]);
            }
        });
    }

    dislikeCharacter(characterId) {
        this.removeLikedCharacter(characterId);
        return this.getAllDislikedCharacters().then(result => {
            if (result) {
                result.push(characterId);
                return this.storageChar.set(DISLIKED_CHAR, result);
            } else {
                return this.storageChar.set(DISLIKED_CHAR, [characterId]);
            }
        });
    }

    removeLikedCharacter(characterId) {
        return this.getAllLikedCharacters().then(result => {
            if (result && result.indexOf(characterId) !== -1) {
                var index = result.indexOf(characterId);
                result.splice(index, 1);
                return this.storageChar.set(LIKED_CHAR, result);
            }
        });
    }

    removeDislikedCharacter(characterId) {
        return this.getAllDislikedCharacters().then(result => {
            if (result && result.indexOf(characterId) !== -1) {
                var index = result.indexOf(characterId);
                result.splice(index, 1);
                return this.storageChar.set(DISLIKED_CHAR, result);
            }
        });
    }

    noStatusCharacter(characterId) {
        this.removeDislikedCharacter(characterId);
        this.removeLikedCharacter(characterId);
    }

    //=============================EPISODES===============================

    getAllLikedEpisodes() {
        return this.storage.get(LIKED_EPI);
    }

    getAllDislikedEpisodes() {
        return this.storage.get(DISLIKED_EPI);
    }

    isLikedEpisode(episodeId) {
        return this.getAllLikedEpisodes().then(result => {
            return result && result.indexOf(episodeId) !== -1;
        });
    }


    isDislikedEpisode(episodeId) {
        return this.getAllDislikedEpisodes().then(result => {
            return result && result.indexOf(episodeId) !== -1;
        });
    }

    likeEpisode(episodeId) {
        this.removeDislikedEpisode(episodeId);
        return this.getAllLikedEpisodes().then(result => {
            if (result) {
                result.push(episodeId);
                return this.storage.set(LIKED_EPI, result);
            } else {
                return this.storage.set(LIKED_EPI, [episodeId]);
            }
        });
    }

    dislikeEpisode(episodeId) {
        this.removeLikedEpisode(episodeId);
        return this.getAllDislikedEpisodes().then(result => {
            if (result) {
                result.push(episodeId);
                return this.storage.set(DISLIKED_EPI, result);
            } else {
                return this.storage.set(DISLIKED_EPI, [episodeId]);
            }
        });
    }

    removeLikedEpisode(episodeId) {
        return this.getAllLikedEpisodes().then(result => {
            if (result && result.indexOf(episodeId) !== -1) {
                var index = result.indexOf(episodeId);
                result.splice(index, 1);
                return this.storage.set(LIKED_EPI, result);
            }
        });
    }

    removeDislikedEpisode(episodeId) {
        return this.getAllDislikedEpisodes().then(result => {
            if (result && result.indexOf(episodeId) !== -1) {
                var index = result.indexOf(episodeId);
                result.splice(index, 1);
                return this.storage.set(DISLIKED_EPI, result);
            }
        });
    }

    noStatusEpisode(episodeId) {
        this.removeDislikedEpisode(episodeId);
        this.removeLikedEpisode(episodeId);
    }

}
