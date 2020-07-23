import React, {Component} from 'react';
import {artists} from './artists';
import {PanelSuperior} from "./karaoke/PanelSuperior";
import {PanelInferior} from "./karaoke/PanelInferior";
import {PanelOptions} from "./karaoke/PanelOptions";

/**
 * @property data {[{img: string, name: string, tracks:
 *      [{duration: number, difficulty: number, name: string, lyrics: string}]
 *  }]}
 */
export default class App extends Component {

    constructor(props) {
        super(props);

        this.data = artists;
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
        this.data.forEach(artist => {
            artists.push(artist.name);
        })
        return artists;
    }

    /**
     * @returns {[string]} List with the name of current artist's track.
     */
    filterTracks(){
        let tracks = [];
        this.data[this.state.currentArtist].tracks.forEach(track =>
            tracks.push(track.name));
        return tracks;
    }

    /**
     * @returns {string} Path to resource that represent the image
     *  of current artist.
     */
    getPathImage(){
        return this.data[this.state.currentArtist].img;
    }

    /**
     * @returns {{duration: number, difficulty: number, name: string, lyrics: string}}
     *  Information of current track based in the current artist.
     */
    getInfoTrack(){
        return {
            name: this.data[this.state.currentArtist].tracks[this.state.currentTrack].name,
            duration: this.data[this.state.currentArtist].tracks[this.state.currentTrack].duration,
            difficulty: this.data[this.state.currentArtist].tracks[this.state.currentTrack].difficulty,
            lyrics: this.data[this.state.currentArtist].tracks[this.state.currentTrack].lyrics,
        }
    }

    nextArtist(){
        // If it is the last artists in the list
        if (this.state.currentArtist === this.data.length - 1) {
            // Begin from zero (begin)
            this.setState({currentArtist: 0});
        } else {
            this.setState({currentArtist: this.state.currentArtist + 1})
        }
    }
    
    render() {
        return (
            <div className="container-fluid">
                <div className="col-lg-6 offset-lg-3 mt-5">
                    <PanelSuperior artists={this.filterArtists()} tracks={this.filterTracks()} image={this.getPathImage()} track={this.getInfoTrack()}/>
                    <PanelInferior/>
                    <PanelOptions nextArtist={this.nextArtist.bind(this)}/>
                </div>
            </div>
        );
    }
}
