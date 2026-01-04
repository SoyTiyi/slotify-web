interface Props {
    href: string;
    label: string;
}

const NavbarLink = ({ href, label }: Props) => {
    return (
        <a href={href} className="mx-5 text-muted font-semibold hover:text-primary pointer">{label}</a>
    );
}

export default NavbarLink;