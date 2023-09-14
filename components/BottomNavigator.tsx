import {useRouter} from "next/router";

export default function BottomNavigator() {
    const router = useRouter();

    return (
        <nav className={"flex flex:row justify-content:between bg:white sticky bottom:0 bt:1px|solid|#CCCCCC88"}>
            <div className={"flex flex:1 py:1rem align-items:end justify-content:center"}>
                <div onClick={() => router.push("/")}
                     className={"flex flex:col align-items:center justify-content:center"}>
                    <div className={"w:1.5rem h:1.5rem r:50% bg:black"}></div>
                    <span>Home</span>
                </div>
            </div>

            <div className={"flex flex:1 justify-content:center"}>
                <div className={"w:5rem h:5rem r:50% bg:black translateY(-1.5rem)"}>
                </div>
            </div>

            <div className={"flex flex:1 py:1rem align-items:end justify-content:center"}>
                <div onClick={() => router.push("/profile")}
                     className={"flex flex:col align-items:center justify-content:center"}>
                    <div className={"w:1.5rem h:1.5rem r:50% bg:black"}></div>
                    <span>Profile</span>
                </div>
            </div>
        </nav>
    )
}