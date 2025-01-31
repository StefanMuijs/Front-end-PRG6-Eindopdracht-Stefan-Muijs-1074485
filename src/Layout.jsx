import {Link, Outlet} from "react-router";

function Layout(){
    return(
        <>
            <nav className="p-2 bg-gray-900 text-center p-5">
                <Link to={"/"} className="p-2 text-white">Home</Link>
                <Link to={"/about"} className="p-2 text-white">About</Link>
                <Link to={"/champions"} className="p-2 text-white">Champions</Link>
                <Link to={"/champions/create"} className="p-2 text-white">CreateChampion</Link>
            </nav>

            <main className="bg-gray-800 min-h-[100vh]">
                <Outlet/>
            </main>
        </>
    )
}

export default Layout;
