import {TrackByArtist} from "../lib/artists";
import {useRouter} from "next/router";

type Props = {
    tracks: TrackByArtist[]
}

export default function TrendingSongs({tracks}: Props) {
    const router = useRouter();

    return (
        <article className={"flex flex:col gap:1rem"}>
            <header className={"flex flex:row justify-content:space-between align-items:center"}>
                <h3>Trending songs</h3>
                <span className={"bg:pink-58 color:white py:0.1rem px:0.7rem r:1rem"}>See all</span>
            </header>

            <div className={"flex flex:col gap:1rem"}>
                {tracks.map(track => (
                    <div className={"flex flex:row gap:1rem"} onClick={() => router.push("/sings/" + track.id)}>
                        <div className={"min-w:7rem min-h:7rem bg:black r:1rem"}></div>
                        <div className={"flex flex:col"}>
                            <h4 className={"line-height:1.2rem mb:0.5rem"}>{track.track}</h4>
                            <p>{track.artist} - Soundtrack</p>
                        </div>
                    </div>
                ))}
            </div>
        </article>
    )
}