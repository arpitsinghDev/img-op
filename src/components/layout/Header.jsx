import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";  // ✅ Import Link for React Routing

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    
    const routeData = [
        { name: "Home", link: "/" },
        { name: "ConvertTo", link: "/convert" },
        { name: "Merge", link: "/merge" },
        { name: "BulkUpload", link: "/bulk" },
        { name: "About", link: "/about" }
    ];

    return (
        <nav className="bg-blue-600 text-white p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-xl font-bold">Brand</Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    {routeData.map((e, i) => (
                        <li key={i + e.name}>
                            <Link to={e.link} className="hover:text-gray-200">{e.name}</Link>  {/* ✅ Use Link */}
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden flex flex-col space-y-2 mt-4 bg-blue-700 p-4 rounded-lg">
                    {routeData.map((e, i) => (
                        <li key={i + e.name}>
                            <Link to={e.link} className="block py-2">{e.name}</Link>  {/* ✅ Use Link */}
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
