export default function Navigator(){
    return (
        <nav className={"flex flex:row justify-content:between gap:1rem"}>
            <h3>Stage</h3>
            <h3 className={"font-weight:medium opacity:0.2"}>Following</h3>
            <h3 className={"font-weight:medium opacity:0.2"}>Recordings</h3>
            <h3 className={"font-weight:medium opacity:0.2"}>Songs</h3>
        </nav>
    )
}