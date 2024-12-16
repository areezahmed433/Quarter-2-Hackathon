
export default function Header() {
    return (
        <section>
            {/* Navbar */}
            <header className="bg-white shadow-md">
                <div className="container mx-auto flex justify-between items-center p-4">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-yellow-600">Furniro</div>

                    {/* Navigation Links */}
                    <nav className="space-x-6">
                        <a href="#" className="text-gray-700 hover:text-yellow-600">
                            Home
                        </a>
                        <a href="#" className="text-gray-700 hover:text-yellow-600">
                            Shop
                        </a>
                        <a href="#" className="text-gray-700 hover:text-yellow-600">
                            Blog
                        </a>
                        <a href="#" className="text-gray-700 hover:text-yellow-600">
                            Contact
                        </a>
                    </nav>

                    {/* Icons */}
                    <div className="flex space-x-4 text-gray-700">
                        <a href="#" className="hover:text-yellow-600">
                            <i className="fa fa-user"></i>
                        </a>
                        <a href="#" className="hover:text-yellow-600">
                            <i className="fa fa-heart"></i>
                        </a>
                        <a href="#" className="hover:text-yellow-600">
                            <i className="fa fa-shopping-cart"></i>
                        </a>
                    </div>
                </div>
            </header>
        </section>
    );
}