import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <nav className="mx-[200px] mt-8">
                <img src="/images/touringcars.png" alt="Logo" className="w-full h-[30px]"/>

                <ul>
                    <Link to="/">
                        <li className="font-poppins font-medium text-[18px] text-[#0C0C0C]">
                            Sobre
                        </li>
                    </Link>
                    <li className="font-poppins">
                        <Link to="">
                            Contato
                        </Link>
                    </li>
                    <li className="font-poppins">
                        <Link to="">
                        Anunciar
                        </Link>
                    </li>
                    <li className="font-poppins">
                        <Link to="">
                        Estoque
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}