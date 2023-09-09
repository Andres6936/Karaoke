import {getTrackByArtist} from "../lib/artists";
import TrendingSongs from "../components/TrendingSongs";
import Search from "../icons/Search";
import Navigator from "../components/Navigator";

export async function getStaticProps() {
    return {
        props: {
            tracks: await getTrackByArtist()
        }
    }
}


export default function Index({tracks}) {
    return (
        <>
            <main className={"flex flex:col px:1rem py:1rem gap:1rem"}>
                <section className={"flex flex:col"}>
                    <div className={"flex flex-basis:100% position:relative"}>
                        <input className={"flex flex-basis:100% bg:fade-90 border:none r:0.9rem pl:2.3rem py:0.3rem color:fade-80::placeholder "} type="text"
                               placeholder={"Search"}/>

                        <div className={"position:absolute top:8 left:9 color:fade-80"}>
                            <Search/>
                        </div>
                    </div>
                </section>

                <section className={"flex flex:col gap:1rem"}>
                    <Navigator/>

                    <article className={"flex flex:col gap:1rem"}>
                        <header>
                            <h3>Following new records</h3>
                        </header>

                        <div className={"flex flex:row gap:1rem"}>
                            <div className={"w:7rem h:7rem bg:black r:1rem"}></div>
                            <div className={"w:7rem h:7rem bg:black r:1rem"}></div>
                            <div className={"w:7rem h:7rem bg:black r:1rem"}></div>
                        </div>
                    </article>


                    <article className={"flex flex:col gap:1rem"}>
                        <header>
                            <h3>Trending recordings</h3>
                        </header>

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

                    <TrendingSongs tracks={tracks}/>
                </section>
            </main>

            <nav className={"flex flex:row justify-content:between bg:white sticky bottom:0"}>
                <div className={"flex flex:1 py:1rem align-items:end justify-content:center"}>
                    <div className={"flex flex:col align-items:center justify-content:center"}>
                        <div className={"w:1.5rem h:1.5rem r:50% bg:black"}></div>
                        <span>Home</span>
                    </div>
                </div>

                <div className={"flex flex:1 justify-content:center"}>
                    <div className={"w:5rem h:5rem r:50% bg:black translateY(-1.5rem)"}>
                    </div>
                </div>

                <div className={"flex flex:1 py:1rem align-items:end justify-content:center"}>
                    <div className={"flex flex:col align-items:center justify-content:center"}>
                        <div className={"w:1.5rem h:1.5rem r:50% bg:black"}></div>
                        <span>Profile</span>
                    </div>
                </div>
            </nav>
        </>
    )
}