import logo from "../assets/pngwing.com.png"
const Header = () => {
    return (
        <nav className="sticky top-0 w-full bg-[#333] py-[20px]">
            <ul className="flex justify-between items-center px-[50px]">
                <li className="w-[50px] flex items-center">
                    <img className="w-full" src={logo} alt="Logo" />
                    <p className="text-2xl text-white font-semibold">Pokedex</p>
                </li>
                <li>
                    <a className="text-[20px] text-white font-semibold hover:border-b-2 duration-75" href="/">Home</a>
                </li>
            </ul>
        </nav>
    );
}

export default Header;