import {Artist} from "../lib/artists";

type Props = {
    artists: Artist[]
}

export default function TrendingSongs(props: Props) {
    return (
        <article className={"flex flex:col gap:1rem"}>
            <header>
                <h3>Trending songs</h3>
            </header>

            <div className={"flex flex:col gap:1rem"}>
                {props.artists.map(artist => (
                    <div className={"flex flex:row gap:1rem"}>
                        <div className={"w:7rem h:7rem bg:black r:1rem"}></div>
                        <div className={"flex flex:col"}>
                            <h4>A Whole New World</h4>
                            <p>{artist.name} - Soundtrack</p>
                        </div>
                    </div>
                ))}
            </div>
        </article>
    )
}