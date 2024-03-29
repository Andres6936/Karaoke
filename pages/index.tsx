import {getTrackByArtist} from "../lib/artists";
import TrendingSongs from "../components/TrendingSongs";
import Search from "../icons/Search";
import Navigator from "../components/Navigator";
import {BlurhashCanvas} from "react-blurhash";
import BottomNavigator from "../components/BottomNavigator";

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
                        <header className={"flex flex:row justify-content:space-between align-items:center"}>
                            <h3>Following new records</h3>
                            <span className={"bg:pink-58 color:white py:0.1rem px:0.7rem r:1rem"}>See all</span>
                        </header>

                        <div className={"flex flex:row gap:1rem"}>
                            <div className={"position:relative w:7rem h:7rem"}>
                                <BlurhashCanvas
                                    className={"r:1rem position:absolute top:0 left:0 right:0 bottom:0 w:100% h:100%"}
                                    hash="UpH-lVD*R*j[~WM{RjkCx]V@RjbbR,oLM{kC"
                                    punch={1} />
                            </div>

                            <div className={"position:relative w:7rem h:7rem"}>
                                <BlurhashCanvas
                                    className={"r:1rem position:absolute top:0 left:0 right:0 bottom:0 w:100% h:100%"}
                                    hash="UWHVCUM{GlD*?=S2Ji-Wu1NrrawOu1jFw5R%"
                                    punch={1} />
                            </div>

                            <div className={"position:relative w:7rem h:7rem"}>
                                <BlurhashCanvas
                                    className={"r:1rem position:absolute top:0 left:0 right:0 bottom:0 w:100% h:100%"}
                                    hash="UIGj:5Xn%K%M~BR*R*%2yBxu%2fk-To1ozW;"
                                    punch={1} />
                            </div>
                        </div>
                    </article>


                    <article className={"flex flex:col gap:1rem"}>
                        <header className={"flex flex:row justify-content:space-between align-items:center"}>
                            <h3>Trending recordings</h3>
                            <span className={"bg:pink-58 color:white py:0.1rem px:0.7rem r:1rem"}>See all</span>
                        </header>

                        <div className={"flex flex:row gap:1rem"}>
                            <div className={"position:relative w:7rem h:7rem"}>
                                <BlurhashCanvas
                                    className={"r:1rem position:absolute top:0 left:0 right:0 bottom:0 w:100% h:100%"}
                                    hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
                                    punch={1} />
                            </div>
                            <div className={"flex flex:col"}>
                                <h4>A Whole New World</h4>
                                <p>Aladding - Soundtrack</p>
                            </div>
                        </div>

                        <div className={"flex flex:row gap:1rem"}>
                            <div className={"position:relative w:7rem h:7rem"}>
                                <BlurhashCanvas
                                    className={"r:1rem position:absolute top:0 left:0 right:0 bottom:0 w:100% h:100%"}
                                    hash="U9EL:3-q8^MH}5M{wF-;00RPaJt-%%NLtnIU"
                                    punch={1} />
                            </div>
                            <div className={"flex flex:col"}>
                                <h4>A Whole New World</h4>
                                <p>Aladding - Soundtrack</p>
                            </div>
                        </div>

                        <div className={"flex flex:row gap:1rem"}>
                            <div className={"position:relative w:7rem h:7rem"}>
                                <BlurhashCanvas
                                    className={"r:1rem position:absolute top:0 left:0 right:0 bottom:0 w:100% h:100%"}
                                    hash="UvDd$%?;%IxsVxoetOoeScRlaPf$RlR+ayod"
                                    punch={1} />
                            </div>
                            <div className={"flex flex:col"}>
                                <h4>A Whole New World</h4>
                                <p>Aladding - Soundtrack</p>
                            </div>
                        </div>
                    </article>

                    <TrendingSongs tracks={tracks}/>
                </section>
            </main>

            <BottomNavigator/>
        </>
    )
}