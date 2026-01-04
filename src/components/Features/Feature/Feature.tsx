interface Props {
    icon: React.ReactNode;
    title: String;
    description: String;
}

const Feature = ({ icon, title, description }: Props) => {
    return (
        <div className="flex flex-col text-white text-left gap-6 p-4 border border-border rounded-lg bg-surface transparent hover:bg-border/60 transition">
            {icon}
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-muted font-medium">{description}</p>
        </div>
    );
}

export default Feature;