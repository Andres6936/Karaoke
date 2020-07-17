import React, {Component} from "react";

export class ListTracks extends Component {

    render() {
        return <form className="col-12 form-inline">
            <select className="col-5 form-control">
                {this.props.listTracks.map(elem =>
                    <option>{elem}</option>)}
            </select>
            <button className="offset-1 col-5 btn btn-primary" type="submit">Add Track</button>
        </form>
    }
}