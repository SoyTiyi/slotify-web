import slotifyLogo from "../../logo.svg";

const Footer = () => {
    return (
        <footer className="flex flex-col md:flex-row items-center justify-between p-6 text-white mt-12">
            <div className="flex flex-row space-x-6 mb-4 md:mb-0">
                <img src={slotifyLogo} alt="Slotify Logo" className="h-8" />
                <a href="#" className="hover:underline">Slotify</a>
            </div>
            <p>© 2025 Slotify. Create by <a target="_blank" className="text-primary hover:underline" href="https://github.com/SoyTiyi">SoyTiyi</a>.</p>
        </footer>
    );
}

export default Footer;