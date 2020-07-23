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
     * @returns {[string]} List with the name of current artist's track.
     */
    filterTracks(){
        let tracks = [];
        this.props.data[this.state.currentArtist].tracks.forEach(track =>
            tracks.push(track.name));
        return tracks;
    }

    /**
     * @returns {string} Path to resource that represent the image
     *  of current artist.
     */
    getPathImage(){
        return this.props.data[this.state.currentArtist].img;
    }

    /**
     * @returns {{duration: number, difficulty: number, name: string, lyrics: string}}
     *  Information of current track based in the current artist.
     */
    getInfoTrack(){
        return {
            name: this.props.data[this.state.currentArtist].tracks[this.state.currentTrack].name,
            duration: this.props.data[this.state.currentArtist].tracks[this.state.currentTrack].duration,
            difficulty: this.props.data[this.state.currentArtist].tracks[this.state.currentTrack].difficulty,
            lyrics: this.props.data[this.state.currentArtist].tracks[this.state.currentTrack].lyrics,
        }
    }

    render() {
        return <div className="row row-cols-2">
            <PanelArtist artists={this.filterArtists()}
                         tracks={this.filterTracks()}
                         image={this.getPathImage()}/>
            <PanelTrack track={this.getInfoTrack()}/>
        </div>
    }
}