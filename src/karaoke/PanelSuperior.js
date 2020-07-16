import React, {Component} from "react";

export class PanelSuperior extends Component {

    render() {
        return <div className="row row-cols-2">
            <div className="col bg-light border p-2">
                <header className="col-12">
                    <h4 className="text-muted border-bottom">Artists</h4>
                </header>

                <section className="row">
                    <form className="col-6 form-inline">
                        <label>Categories</label>
                        <select className="form-control">
                            <option>Bachata</option>
                            <option>Salsa</option>
                            <option>Rock</option>
                        </select>
                    </form>

                    <form className="col-6 form-inline">
                        <label>Artists</label>
                        <select className="form-control">
                            <option>AC/DC</option>
                            <option>Romeo</option>
                            <option>J. Balvin</option>
                        </select>
                    </form>
                </section>
                <section className="row my-4" >
                    <img className="mx-auto border p-1" height="400px" src={this.props.data[0].img} alt="Photo"/>
                </section>
                <section>
                    <form className="form-inline">
                        <select className="form-control">
                            <option>Highway to Hell</option>
                        </select>
                        <button className="btn btn-primary" type="submit">Add Track</button>
                    </form>
                </section>
            </div>
            <div className="col">
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
        </div>
    }
}