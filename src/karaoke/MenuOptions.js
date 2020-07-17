import React, {Component} from "react";

export class MenuOptions extends Component {

    render() {
        return <form className="col-6 form-inline">
            <label className="col-5">{this.props.label}</label>
            <select className="col-7 form-control form-control-sm">
                {this.props.options.map(elem =>
                    <option>{elem}</option>)}
            </select>
        </form>
    }
}