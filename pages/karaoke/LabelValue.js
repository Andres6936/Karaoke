import React, {Component} from "react";

export class LabelValue extends Component {

    render() {
        return <div className="col-12 form-inline mb-2">
            <label className="col-4 border-right">{this.props.name}</label>
            <input className="col-8 text-center form-control form-control-plaintext"
                   type="text" value={this.props.value} />
        </div>
    }
}