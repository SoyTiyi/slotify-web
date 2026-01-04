import logo from "../../../assets/images/slotify-logo.png";

const NavbarTitle = () => {
  return (
    <div className="flex items-center h-12">
      <a href="/" className="relative flex items-center justify-center -my-6 -mr-5">
        <img src={logo} alt="Slotify Logo" className="h-24 w-24 object-contain"/>
      </a>
      <a href="/" className="text-text-primary font-bold text-xl">Slotify</a>
    </div>
  );
};

export default NavbarTitle;
