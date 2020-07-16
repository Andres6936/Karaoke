import React, {Component} from "react";
import {Title} from "./Title";

export class PanelArtist extends Component {

    render() {
        return <div className="col bg-light border p-2">
            <Title title="Artists"/>

            <section className="row mx-2">
                <form className="col-6 form-inline">
                    <label className="col-6">Categories</label>
                    <select className="col-6 form-control form-control-sm">
                        <option>Bachata</option>
                        <option>Salsa</option>
                        <option>Rock</option>
                    </select>
                </form>

                <form className="col-6 form-inline">
                    <label className="col-5">Artists</label>
                    <select className="col-7 form-control form-control-sm">
                        <option>AC/DC</option>
                        <option>Romeo</option>
                        <option>J. Balvin</option>
                    </select>
                </form>
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