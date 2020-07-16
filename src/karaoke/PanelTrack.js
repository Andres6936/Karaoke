import React, {Component} from "react";

export class PanelTrack extends Component {

    render() {
        return <div className="col">
            <header className="col-12">
                <h4 className="text-muted">Track</h4>
            </header>

            <section className="row">
                <div className="col-12 form-inline mb-2">
                    <label className="col-4">Name</label>
                    <input className="form-control form-control-plaintext"
                           type="text" value={this.props.data[0].tracks[0].name} />
                </div>

                <div className="col-12 form-inline mb-2">
                    <label className="col-4">Duration</label>
                    <input className="form-control form-control-plaintext"
                           type="text" value={this.props.data[0].tracks[0].duration} />
                </div>

                <div className="col-12 form-inline mb-2">
                    <label className="col-4">Difficulty</label>
                    <input className="form-control form-control-plaintext"
                           type="text" value={this.props.data[0].tracks[0].difficulty} />
                </div>

                <div className="col-12 form-inline mb-2">
                    <label className="col-4">Gender</label>
                    <input className="form-control form-control-plaintext"
                           type="text" value="Comodin" />
                </div>
            </section>
            <section className="row">

            </section>
        </div>
    }
}