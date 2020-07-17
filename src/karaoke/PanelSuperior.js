import React, {Component} from "react";
import {PanelArtist} from "./PanelArtist";
import {PanelTrack} from "./PanelTrack";

export class PanelSuperior extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentArtist : 0,
            currentTrack: 0,
        }
    }

    /**
     * @returns {[string]} List with the names of artists.
     */
    filterArtists(){
        let artists = [];
        this.props.data.forEach(artist => {
            artists.push(artist.name);
        })
        return artists;
    }

    /**
     * @param indexArtist {number} Index in the array of actual artists.
     * @returns {[string]} List with the name of artist's track.
     */
    filterTracks(indexArtist){
        let tracks = [];
        this.props.data[indexArtist].tracks.forEach(track =>
            tracks.push(track.name));
        return tracks;
    }

    render() {
        return <div className="row row-cols-2">
            <PanelArtist listArtists={this.filterArtists()}
                         listTracks={this.filterTracks(this.state.currentArtist)}
                         image={this.props.data[this.state.currentArtist].img}/>
            <PanelTrack data={this.props.data}/>
        </div>
    }
}