interface Props {
    icon: React.ReactNode;
    title: String;
    description: String;
}

const Feature = ({ icon, title, description }: Props) => {
    return (
        <div>
            <div>{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Feature;