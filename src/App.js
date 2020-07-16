import React, {Component} from 'react';
import {artists} from './artists';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.data = artists;
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="col-lg-8 offset-lg-2">
                    <div className="row row-cols-2">
                        <div className="col">
                            <header>
                                <h1>Artists</h1>
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
                            <section>
                                <img className="border p-1" height="400px" src={this.data[0].img} alt="Photo"/>
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
                            <header>
                                <h1>Track</h1>
                            </header>

                            <section className="row">
                                <div className="col-12 form-inline mb-2">
                                    <label className="col-4">Name</label>
                                    <input className="form-control form-control-plaintext"
                                           type="text" value={this.data[0].tracks[0].name} />
                                </div>

                                <div className="col-12 form-inline mb-2">
                                    <label className="col-4">Duration</label>
                                    <input className="form-control form-control-plaintext"
                                           type="text" value={this.data[0].tracks[0].duration} />
                                </div>

                                <div className="col-12 form-inline mb-2">
                                    <label className="col-4">Difficulty</label>
                                    <input className="form-control form-control-plaintext"
                                           type="text" value={this.data[0].tracks[0].difficulty} />
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

                    <div className="row row-cols-2">
                        <section className="col col-8">
                            <header><h1>List of Play</h1></header>
                        </section>
                        <section className="col col-4">
                            <header><h1>Options List of Play</h1></header>

                            <button className="btn btn-block">Add List</button>
                            <button className="btn btn-block">Modify List</button>
                            <button className="btn btn-block">Delete List</button>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}
