import React, {Component} from 'react';

export default class App extends Component {

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

                            </section>
                            <section>
                                <form className="form-inline">
                                    <select className="form-control">
                                        <option>Highway to Hell</option>
                                    </select>
                                    <button className="btn btn-block" type="submit">Add Track</button>
                                </form>
                            </section>
                        </div>
                        <div className="col">
                            <header>
                                <h1>Track</h1>
                            </header>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
