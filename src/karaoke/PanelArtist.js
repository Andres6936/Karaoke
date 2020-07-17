import React, {Component} from "react";
import {Title} from "./Title";
import {MenuOptions} from "./MenuOptions";

export class PanelArtist extends Component {

    /**
     * @returns {[string]} List with the names of artists.
     */
    filterArtist(){
        let artists = [];
        this.props.data.forEach(artist => {
            artists.push(artist.name);
        })
        return artists;
    }

    render() {
        return <div className="col bg-light border p-2">
            <Title title="Artists"/>

            <section className="row mx-2">
                <MenuOptions label="Categories" options={["Bachata", "Sala", "Rock"]} />
                <MenuOptions label="Artists" options={this.filterArtist()} />
            </section>

            <section className="row my-4" >
                <img className="mx-auto border p-1" height="400px" src={this.props.data[0].img} alt="Photo"/>
            </section>

            <section className="row mx-2">
                <form className="col-12 form-inline">
                    <select className="col-5 form-control">
                        <option>Highway to Hell</option>
                    </select>
                    <button className="offset-1 col-5 btn btn-primary" type="submit">Add Track</button>
                </form>
            </section>
        </div>
    }
}