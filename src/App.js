import React, {Component} from 'react';
import {artists} from './artists';
import {PanelSuperior} from "./karaoke/PanelSuperior";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.data = artists;
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="col-lg-8 offset-lg-2 mt-5">
                    <PanelSuperior data={this.data}/>

                    <div className="row row-cols-2">
                        <section className="col col-8">
                            <header className="col-12">
                                <h4 className="text-muted">List of Play</h4>
                            </header>
                        </section>
                        <section className="col col-4">
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
                </div>
            </div>
        );
    }
}
