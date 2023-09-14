import BottomNavigator from "../components/BottomNavigator";
import WrenchAdjustableCircleFill from "../icons/WrenchAdjustableCircleFill";

export default function Profile(){
    return (
        <>
            <main className={"flex flex:col min-h:90vh"}>
                <section className={"flex flex:1 flex:col gap:1rem px:1rem bg:pink-60 color:white py:1rem"}>
                    <div className={"flex justify-content:space-between align-items:center"}>
                        <h3>Profile</h3>
                        <WrenchAdjustableCircleFill size={22}/>
                    </div>

                    <div className={"flex justify-content:space-between align-items:center"}>
                        <div className={"flex flex:row align-items:center gap:1rem"}>
                            <div className={"w:4rem h:4rem r:50% bg:black "}></div>

                            <div className={"flex flex:col"}>
                                <h3>Alice</h3>
                                <span className={"font:light"}>ID: 0002232144966</span>
                            </div>
                        </div>

                        <span className={"b:1px|solid|white r:2rem px:1rem"}>Edit</span>
                    </div>

                    <div className={"flex flex:row gap:4rem align-items:center"}>
                        <div>
                            <h3>200</h3>
                            <span className={"font:light"}>Following</span>
                        </div>

                        <div>
                            <h3>50</h3>
                            <span className={"font:light"}>Followers</span>
                        </div>

                        <div>
                            <h3>50K</h3>
                            <span className={"font:light"}>Likes</span>
                        </div>
                    </div>
                </section>

                <section className={"flex flex:10 flex:col px:1rem bg:white py:1rem r:1.3rem translateY(-2rem)"}>

                </section>
            </main>

            <BottomNavigator/>
        </>
    )
}