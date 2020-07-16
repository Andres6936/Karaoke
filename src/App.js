import React, {Component} from 'react';
import {artists} from './artists';
import {PanelSuperior} from "./karaoke/PanelSuperior";
import {PanelInferior} from "./karaoke/PanelInferior";

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
                    <PanelInferior/>
                </div>
            </div>
        );
    }
}
