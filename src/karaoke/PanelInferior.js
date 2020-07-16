import React, {Component} from "react";

export class PanelInferior extends Component {

    render() {
        return <div className="row row-cols-2">
            <section className="col col-6">
                <header className="col-12">
                    <h4 className="text-muted">List of Play</h4>
                </header>
            </section>
            <section className="col col-6">
                <header className="col-12">
                    <h4 className="text-muted">Options List of Play</h4>
                </header>

                <div className="btn-group col-12">
                    <button className="btn btn-primary">Add List</button>
                    <button className="btn btn-primary">Modify List</button>
                    <button className="btn btn-danger">Delete List</button>
                </div>
            </section>
        </div>
    }
}