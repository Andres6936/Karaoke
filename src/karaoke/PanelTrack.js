import React, {Component} from "react";
import {Title} from "./Title";
import {LabelValue} from "./LabelValue";

export class PanelTrack extends Component {

    render() {
        return <div className="col bg-light border p-2">
            <Title title="Track"/>

            <section className="row">
                <LabelValue name="Name" value={this.props.track.name} />
                <LabelValue name="Duration" value={this.props.track.duration}/>
                <LabelValue name="Difficulty" value={this.props.track.difficulty}/>
                <LabelValue name="Gender" value="Comodin"/>
            </section>
            <section className="row p-4">
                <textarea rows="10" className="col-12 bg-light border" readOnly={true}>
                    {this.props.track.lyrics}
                </textarea>
            </section>
        </div>
    }
}