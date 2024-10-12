import { navLists } from "../../constants"
import { appleImg, bagImg, searchImg } from "../../utils"


const Navbar = () => {
    return (
        <header className="
        w-full
        py-7
        sm:px-10
        px-5
        flex
        justify-between
        items-center
        bg-black
        top-0
        sticky
        z-30
        ">
            <nav className="
            flex
            w-full
            screen-max-width">
                <img src={appleImg} alt="Apple" width={14}
                    height={18} />

                <div className="
                flex
                flex-1
                justify-center
                max-sm:hidden">
                    {navLists.map((nav) =>
                    (
                        <div className="
                        
                        px-5
                        text-sm
                        cursor-pointer
                        text-gray
                        hover:text-white
                        transition-all" key={nav}>
                            {nav}
                        </div>
                    ))}
                </div>
                <div

                    className="flex
                baseline
                gap-7
                max-sm:justify-end
                max-sm:flex-1">
                    <img src={searchImg} alt="" width={18} height={18} />
                    <img src={bagImg} alt="" width={18} height={18} />
                </div>
            </nav>
        </header>
    )
}

export default Navbar