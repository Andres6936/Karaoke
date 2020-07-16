import React, {Component} from "react";
import {Title} from "./Title";

export class PanelInferior extends Component {

    render() {
        return <div className="row row-cols-2">
            <section className="col col-6">
                <Title title="List of Play"/>
            </section>

            <section className="col col-6">
                <Title title="Options List of Play"/>

                <div className="btn-group col-12">
                    <button className="btn btn-primary">Add List</button>
                    <button className="btn btn-primary">Modify List</button>
                    <button className="btn btn-danger">Delete List</button>
                </div>
            </section>
        </div>
    }
}