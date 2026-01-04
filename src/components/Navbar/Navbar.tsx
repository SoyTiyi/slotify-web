import { useState } from 'react';
import NavbarLink from './NavbarLink/NavbarLink';
import NavbarTitle from './NavbarTitle/NavbarTitle';
import NavbarToggleButton from './NavbarToggleButton/NavbarToggleButton';


export type Link = {
    id: number;
    href: string;
    label: string;
}

const links: Link[] = [
    { id: 1, href: '#products', label: 'Productos' },
    { id: 2, href: '#price', label: 'Precios' },
    { id: 3, href: '#security', label: 'Seguridad' },
    { id: 4, href: '#contact', label: 'Contacto' },
]; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="flex items-center justify-between p-4 bg-base text-white relative">
            <NavbarTitle />
            
            <NavbarToggleButton isOpen={isOpen} toggleMenu={toggleMenu} />
            
            <div className="hidden md:block">
                {links.map((link) => (
                    <NavbarLink key={link.id} href={link.href} label={link.label} />
                ))}
            </div>

            <div className="hidden md:flex space-x-2">
                <button className="bg-secondary font-semibold text-muted px-4 py-2 rounded ml-2 hover:text-primary cursor-pointer">Ingresar</button>
                <button className="bg-primary font-bold text-white px-6 py-2 rounded-xl cursor-pointer">Prueba gratis</button>
            </div>

            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-base flex flex-col items-center py-4 space-y-4 md:hidden shadow-lg z-50 border-t border-gray-700">
                    {links.map((link) => (
                        <NavbarLink key={link.id} href={link.href} label={link.label} />
                    ))}
                    <div className="flex flex-col space-y-2 w-full px-8">
                        <button className="bg-secondary font-semibold text-muted px-4 py-2 rounded hover:text-primary cursor-pointer w-full">Ingresar</button>
                        <button className="bg-primary font-bold text-white px-6 py-2 rounded-xl cursor-pointer w-full">Prueba gratis</button>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;