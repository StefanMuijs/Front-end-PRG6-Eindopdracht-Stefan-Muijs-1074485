import {Link} from "react-router";

function Home() {
    return (
        <>
            <h1 className="text-center pt-20 text-white text-7xl">WELKOM</h1>
            <img src="/lol.jpg" alt="League of Legends" className="mx-auto mt-10 w-1/2"/>
            <div className="text-center mt-5">
                <Link to={"/champions"} className="p-2 text-yellow-200">Champions</Link>
            </div>
        </>
    )
}

export default Home;