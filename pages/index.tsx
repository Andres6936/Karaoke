export default function Index() {
    return (
        <>
            <main className={"flex flex:col px:1rem py:1rem"}>
                <section className={"flex flex:col"}>
                    <span>Search</span>
                </section>

                <section className={"flex flex:col"}>
                    <nav className={"flex flex:row justify-content:between gap:1rem"}>
                        <h3>Stage</h3>
                        <h3>Following</h3>
                        <h3>Recordings</h3>
                        <h3>Songs</h3>
                    </nav>

                    <div>
                        <h3>Following new records</h3>
                    </div>

                    <article className={"flex flex:row gap:1rem"}>
                        <div className={"w:7rem h:7rem bg:black r:1rem"}></div>
                        <div className={"w:7rem h:7rem bg:black r:1rem"}></div>
                        <div className={"w:7rem h:7rem bg:black r:1rem"}></div>
                    </article>

                    <div>
                        <h3>Trending recordings</h3>
                    </div>

                    <article className={"flex flex:col gap:1rem"}>
                        <div className={"flex flex:row gap:1rem"}>
                            <div className={"w:7rem h:7rem bg:black r:1rem"}></div>
                            <div className={"flex flex:col"}>
                                <h4>A Whole New World</h4>
                                <p>Aladding - Soundtrack</p>
                            </div>
                        </div>

                        <div className={"flex flex:row gap:1rem"}>
                            <div className={"w:7rem h:7rem bg:black r:1rem"}></div>
                            <div className={"flex flex:col"}>
                                <h4>A Whole New World</h4>
                                <p>Aladding - Soundtrack</p>
                            </div>
                        </div>

                        <div className={"flex flex:row gap:1rem"}>
                            <div className={"w:7rem h:7rem bg:black r:1rem"}></div>
                            <div className={"flex flex:col"}>
                                <h4>A Whole New World</h4>
                                <p>Aladding - Soundtrack</p>
                            </div>
                        </div>
                    </article>

                    <div>
                        <h3>Trending songs</h3>
                    </div>

                    <article className={"flex flex:col gap:1rem"}>
                        <div className={"flex flex:row gap:1rem"}>
                            <div className={"w:7rem h:7rem bg:black r:1rem"}></div>
                            <div className={"flex flex:col"}>
                                <h4>A Whole New World</h4>
                                <p>Aladding - Soundtrack</p>
                            </div>
                        </div>

                        <div className={"flex flex:row gap:1rem"}>
                            <div className={"w:7rem h:7rem bg:black r:1rem"}></div>
                            <div className={"flex flex:col"}>
                                <h4>A Whole New World</h4>
                                <p>Aladding - Soundtrack</p>
                            </div>
                        </div>

                        <div className={"flex flex:row gap:1rem"}>
                            <div className={"w:7rem h:7rem bg:black r:1rem"}></div>
                            <div className={"flex flex:col"}>
                                <h4>A Whole New World</h4>
                                <p>Aladding - Soundtrack</p>
                            </div>
                        </div>
                    </article>
                </section>
            </main>

            <nav className={"flex flex:row justify-content:between bg:white sticky bottom:0"}>
                <div className={"flex flex:1 py:1rem align-items:end justify-content:center"}>
                    <span>Home</span>
                </div>

                <div className={"flex flex:1 justify-content:center"}>
                    <div className={"w:5rem h:5rem r:50% bg:black translateY(-1.5rem)"}>
                    </div>
                </div>

                <div className={"flex flex:1 py:1rem align-items:end justify-content:center"}>
                    <span>Profile</span>
                </div>
            </nav>
        </>
    )
}