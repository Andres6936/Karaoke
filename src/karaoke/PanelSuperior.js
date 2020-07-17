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

    render() {
        return <div className="row row-cols-2">
            <PanelArtist listArtists={this.filterArtists()} data={this.props.data}/>
            <PanelTrack data={this.props.data}/>
        </div>
    }
}