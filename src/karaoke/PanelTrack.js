import React, {Component} from "react";
import {Title} from "./Title";
import {LabelValue} from "./LabelValue";

export class PanelTrack extends Component {

    render() {
        return <div className="col bg-light border p-2">
            <Title title="Track"/>

            <section className="row">
                <LabelValue name="Name" value={this.props.data[0].tracks[0].name} />
                <LabelValue name="Duration" value={this.props.data[0].tracks[0].duration}/>
                <LabelValue name="Difficulty" value={this.props.data[0].tracks[0].difficulty}/>
                <LabelValue name="Gender" value="Comodin"/>
            </section>
            <section className="row p-4">
                <textarea>
                    {this.props.data[0].tracks[0].lyrics}
                </textarea>
            </section>
        </div>
    }
}