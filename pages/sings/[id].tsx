import {getAllTracksId, getTrackById, Track} from "../../lib/artists";
import HandThumbsUp from "../../icons/HandThumbsUp";
import Reply from "../../icons/Reply";
import ChevronLeft from "../../icons/ChevronLeft";
import ThreeDots from "../../icons/ThreeDots";
import Soundwave from "../../icons/Soundwave";

export async function getStaticProps({params}) {
    const track = await getTrackById(params.id);
    return {
        props: {
            track
        }
    }
}

export async function getStaticPaths() {
    const paths = await getAllTracksId();
    return {
        paths,
        fallback: false,
    }
}

export default function Sing({track}) {
    return (
        <main className={"flex flex:col min-h:100vh"}>
            <section
                className={`position:relative flex flex:5 flex-shrink:300 flex:col min-h:50% bg:black color:white bg:url('${track.image}') bg:cover bg:top`}>
                <div className={"position:absolute top:1rem left:1rem"}>
                    <ChevronLeft size={24}/>
                </div>


                <div className={"position:absolute top:1rem right:1rem"}>
                    <ThreeDots size={24}/>
                </div>


                <div className={"position:absolute bottom:1rem right:1rem"}>
                    <Soundwave size={24}/>
                </div>
            </section>

            <section className={"position:relative flex flex:2 max-h:50% flex:col bg:black color:white px:1rem py:1rem gap:1rem"}>
                <article className={"flex flex:row align-items:center justify-content:space-between gap:1rem"}>
                    <div className={"flex flex:row align-items:center gap:1rem"}>
                        <div className={"w:2.5rem h:2.5rem bg:white r:50%"}></div>
                        <div className={"flex flex:col"}>
                            <h3>{track.artist}</h3>
                            <span className={"font-size:0.8rem opacity:0.7"}>2023-10-14</span>
                        </div>
                    </div>

                    <button
                        className={"w:8rem py:0.3rem r:1rem border:1px|solid|white bg:black color:white"}>
                        Follow
                    </button>
                </article>

                <article className={"position:relative flex flex:1 flex:col gap:1rem"}>
                    <header>
                        <h2>Comments 2</h2>
                    </header>

                    <div className={"flex flex:col gap:1rem"}>
                        <div className={"flex flex:row align-items:center justify-content:space-between gap:1rem"}>
                            <div className={"flex flex:row align-items:center gap:1rem"}>
                                <div className={"w:2.5rem h:2.5rem bg:white r:50%"}></div>
                                <div className={"flex flex:col"}>
                                    <div className={"flex flex:row gap:0.5rem"}>
                                        <h4>Marks</h4>
                                        <span className={"opacity:0.7"}>2 hrs ago</span>
                                    </div>
                                    <p className={"font-size:0.9rem"}>OMG, that's beautiful</p>
                                </div>
                            </div>

                            <div className={"flex flex:col justify-content:center align-items:center"}>
                                <HandThumbsUp size={22}/>
                                <span className={"font-size:0.8rem"}>2</span>
                            </div>
                        </div>

                        <div className={"flex flex:row align-items:center justify-content:space-between gap:1rem"}>
                            <div className={"flex flex:row align-items:center gap:1rem"}>
                                <div className={"w:2.5rem h:2.5rem bg:transparent r:50%"}></div>
                                <div className={"w:2.5rem h:2.5rem bg:white r:50%"}></div>
                                <div className={"flex flex:col"}>
                                    <div className={"flex flex:row gap:0.5rem"}>
                                        <h5 className={"lh:1.8 r:0.3rem px:0.3rem bg:sky-30 color:sky-80"}>Author</h5>
                                        <h4>Marks</h4>
                                        <span className={"opacity:0.7"}>2 hrs ago</span>
                                    </div>
                                    <p className={"font-size:0.9rem"}>OMG, that's beautiful</p>
                                </div>
                            </div>

                            <div className={"flex flex:col justify-content:center align-items:center"}>
                                <HandThumbsUp size={22}/>
                                <span className={"font-size:0.8rem"}>2</span>
                            </div>
                        </div>
                    </div>

                    <div
                        className={"flex flex:row justify-content:space-between align-items:center position:absolute left:0 right:0 bottom:0 gap:2rem"}>
                        <input className={"flex flex:1 border:none r:1rem bg:#111111 py:0.5rem px:1rem color:white"}
                               type="text" placeholder={"Comments are welcome!"}/>

                        <div className={"flex flex:row gap:1rem"}>
                            <div className={"flex flex:col justify-content:center align-items:center"}>
                                <HandThumbsUp size={22}/>
                                <span className={"font-size:0.8rem"}>12</span>
                            </div>

                            <div className={"flex flex:col justify-content:center align-items:center"}>
                                <Reply size={22}/>
                                <span className={"font-size:0.8rem"}>2</span>
                            </div>
                        </div>
                    </div>
                </article>

                <div className={"position:absolute right:15 bottom:85 w:4rem h:4rem bg:white r:50%"}></div>
            </section>
        </main>

    )
}