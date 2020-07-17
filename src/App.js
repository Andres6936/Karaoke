import React, {Component} from 'react';
import {artists} from './artists';
import {PanelSuperior} from "./karaoke/PanelSuperior";
import {PanelInferior} from "./karaoke/PanelInferior";
import {PanelOptions} from "./karaoke/PanelOptions";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.data = artists;
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="col-lg-6 offset-lg-3 mt-5">
                    <PanelSuperior data={this.data}/>
                    <PanelInferior/>
                    <PanelOptions/>
                </div>
            </div>
        );
    }
}
