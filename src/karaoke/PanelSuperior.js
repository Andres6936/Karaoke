import React, {Component} from "react";
import {PanelArtist} from "./PanelArtist";
import {PanelTrack} from "./PanelTrack";

export class PanelSuperior extends Component {

    render() {
        return <div className="row row-cols-2">
            <PanelArtist data={this.props.data}/>
            <PanelTrack data={this.props.data}/>
        </div>
    }
}