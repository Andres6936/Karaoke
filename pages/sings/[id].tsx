import {getAllTracksId, getTrackById, Track} from "../../lib/artists";
import HandThumbsUp from "../../icons/HandThumbsUp";
import Reply from "../../icons/Reply";

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
                className={`flex flex:5 flex-shrink:300 flex:col bg:black bg:url('${track.image}') bg:cover bg:top`}>
            </section>

            <section className={"flex flex:3 flex:col bg:black color:white px:1rem py:1rem"}>
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

                    <div className={"flex flex:col"}>
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
            </section>
        </main>

    )
}