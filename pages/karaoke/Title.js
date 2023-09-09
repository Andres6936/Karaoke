import React, {Component} from "react";

export class Title extends Component {

    render() {
        return <header className="col-12">
            <h4 className="text-muted border-bottom">{this.props.title}</h4>
        </header>
    }
}