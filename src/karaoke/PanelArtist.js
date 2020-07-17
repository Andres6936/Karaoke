import React, {Component} from "react";
import {Title} from "./Title";
import {MenuOptions} from "./MenuOptions";
import {ListTracks} from "./ListTracks";

export class PanelArtist extends Component {

    render() {
        return <div className="col bg-light border p-2">
            <Title title="Artists"/>

            <section className="row mx-2">
                <MenuOptions label="Categories" options={["Bachata", "Sala", "Rock"]} />
                <MenuOptions label="Artists" options={this.props.listArtists} />
            </section>

            <section className="row my-4" >
                <img className="mx-auto border p-1" height="400px" src={this.props.image} alt="Photo"/>
            </section>

            <section className="row mx-2">
                <ListTracks listTracks={this.props.listTracks} />
            </section>
        </div>
    }
}