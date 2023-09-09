import React, {Component} from "react";
import PropTypes from 'prop-types';

export class MenuOptions extends Component {

    render() {
        return <form className="col-6 form-inline">
            <label className="col-6">{this.props.label}</label>
            <select className="col-6 form-control form-control-sm">
                {this.props.options.map(elem =>
                    <option key={elem}>{elem}</option>)}
            </select>
        </form>
    }
}

MenuOptions.propTypes = {
    label: PropTypes.string,
    options: PropTypes.array,
}