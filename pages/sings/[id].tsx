import {getAllTracksId, getTrackById, Track} from "../../lib/artists";

export async function getStaticProps({ params }) {
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
        <>
            <main>
                {track.id}
                {track.name}
            </main>
        </>
    )
}