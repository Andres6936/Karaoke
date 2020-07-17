import React, {Component} from "react";
import {PanelArtist} from "./PanelArtist";
import {PanelTrack} from "./PanelTrack";

export class PanelSuperior extends Component {

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
     * @returns {[string]} List with the name of tracks.
     */
    filterTracks(){
        let tracks = [];
        this.props.data[0].tracks.forEach(track =>
            tracks.push(track.name));
        return tracks;
    }

    render() {
        return <div className="row row-cols-2">
            <PanelArtist listArtists={this.filterArtists()} listTracks={this.filterTracks()} data={this.props.data}/>
            <PanelTrack data={this.props.data}/>
        </div>
    }
}