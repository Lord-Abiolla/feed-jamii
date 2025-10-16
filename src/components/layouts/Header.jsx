import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="top-4 flex gap-9 items-center justify-between border-1 border-green-700 bg-[#d0dfc0] mb-4 mx-4 rounded-full shadow-2xl sticky z-[1000]">
            <div className="p-2">
                <h1 className="ml-30 font-merienda text-4xl font-semibold text-center p-3 text-[#1C3C25]">
                    feed-Jamii
                </h1>
            </div>
            <div className="p-2 flex gap-4 mr-30">
                <Link to={"/signin"}>
                    <button
                        className="font-merienda border-2 border-[#1C3C25] bg-transparent px-3 w-30 cursor-pointer rounded-3xl font-semibold text-center p-3 text-[#1C3C25] hover:bg-[#1C3C25] hover:text-white"
                    >
                        Sign In
                    </button>
                </Link>
                <Link to={"/signup"}>
                    <button className="font-merienda bg-green-900 px-3 w-40 cursor-pointer rounded-3xl font-semibold text-center p-3 text-white hover:bg-transparent hover:text-[#1C3C25] hover:border-2 hover:border-[#1C3C25]">
                        Get started
                    </button>
                </Link>
            </div>
            {/* <hr className="mt-2 bg-gray-400" /> */}
        </div>
    )
}

export default Header;