import React, {Component} from "react";

export class PanelArtist extends Component {

    render() {
        return <div className="col bg-light border p-2">
            <header className="col-12">
                <h4 className="text-muted border-bottom">Artists</h4>
            </header>

            <section className="row mx-2">
                <form className="col-6 form-inline">
                    <label className="col-6">Categories</label>
                    <select className="col-6 form-control form-control-sm">
                        <option>Bachata</option>
                        <option>Salsa</option>
                        <option>Rock</option>
                    </select>
                </form>

                <form className="col-6 form-inline">
                    <label className="col-5">Artists</label>
                    <select className="col-7 form-control form-control-sm">
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
    }
}