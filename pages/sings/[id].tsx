import {getAllTracksId, getTrackById, Track} from "../../lib/artists";

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

            <section className={"flex flex:4 flex:col bg:black color:white px:1rem py:1rem"}>
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
            </section>
        </main>

    )
}