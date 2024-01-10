const Header = () => {
    return (
        <header className="bg-blue-500 p-4" h>
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-white text-xl font-bold">Your Logo</div>

                {/* Navigation Links */}
                <nav className="space-x-4">
                    <a href="#" className="text-white">Home</a>
                    <a href="#" className="text-white">About</a>
                    <a href="#" className="text-white">Services</a>
                    <a href="#" className="text-white">Contact</a>
                </nav>
            </div>
        </header>
    );
}

export default Header