import React, {Component} from "react";
import {PanelArtist} from "./PanelArtist";
import {PanelTrack} from "./PanelTrack";

export class PanelSuperior extends Component {

    render() {
        return <div className="row row-cols-2">
            <PanelArtist artists={this.props.artists}
                         tracks={this.props.tracks}
                         image={this.props.image}/>
            <PanelTrack track={this.props.track}/>
        </div>
    }
}