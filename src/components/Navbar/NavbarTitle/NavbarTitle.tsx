import logo from "../../../assets/images/slotify-icon.png";

const NavbarTitle = () => {
  return (
    <div className="flex items-center">
      <a href="/" className="bg-primary rounded-lg p-1 flex items-center justify-center mr-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className="w-8 h-8"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 4.5v2" />
          <path d="M13 4.5v2" />
          <path d="M5.5 8h10" />
          <path d="M6 6.5h11a1.8 1.8 0 0 1 1.8 1.8v6.6a1.8 1.8 0 0 1-1.8 1.8H6A1.8 1.8 0 0 1 4.2 15V8.3A1.8 1.8 0 0 1 6 6.5z" />
          <path d="M7.2 10.2h.01M10.2 10.2h.01M13.2 10.2h.01" />
          <path d="M7.2 12.6h.01M10.2 12.6h.01M13.2 12.6h.01" />
          <path d="M17.2 20.6c-2.2-2.2-3.3-4-3.3-5.6a3.3 3.3 0 1 1 6.6 0c0 1.6-1.1 3.4-3.3 5.6z" />
          <path d="M15.7 14.9l1 1 1.9-2" />
        </svg>
      </a>
      <a href="/" className="text-text-primary font-bold text-xl">Slotify</a>
    </div>
  );
};

export default NavbarTitle;
