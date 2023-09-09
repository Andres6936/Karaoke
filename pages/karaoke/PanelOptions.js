import React, {Component} from "react";
import {Title} from "./Title";

export class PanelOptions extends Component {

    render() {
        return <div className="row row-cols-1 p-2 bg-light border">
            <Title title="Options" />
            <div className="col btn-group">
                <button className="btn btn-secondary">Find</button>
                <button className="btn btn-secondary">List Tracks</button>
                <button className="btn btn-secondary" onClick={this.props.prevArtist}>Prev Artist</button>
                <button className="btn btn-secondary" onClick={this.props.nextArtist}>Next Artist</button>
            </div>
        </div>
    }
}