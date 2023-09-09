import {TrackByArtist} from "../lib/artists";
import {useRouter} from "next/router";

type Props = {
    tracks: TrackByArtist[]
}

export default function TrendingSongs({tracks}: Props) {
    const router = useRouter();

    return (
        <article className={"flex flex:col gap:1rem"}>
            <header>
                <h3>Trending songs</h3>
            </header>

            <div className={"flex flex:col gap:1rem"}>
                {tracks.map(track => (
                    <div className={"flex flex:row gap:1rem"} onClick={() => router.push("/sings/" + track.id)}>
                        <div className={"w:7rem h:7rem bg:black r:1rem"}></div>
                        <div className={"flex flex:col"}>
                            <h4>{track.track}</h4>
                            <p>{track.artist} - Soundtrack</p>
                        </div>
                    </div>
                ))}
            </div>
        </article>
    )
}