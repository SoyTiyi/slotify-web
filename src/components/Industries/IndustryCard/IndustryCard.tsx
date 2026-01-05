interface Props {
    imageSrc: string;
    title: string;
    description: string;
}

const IndustryCard = ({ imageSrc, title, description }: Props) => {
  return (
    <div className="flex flex-col bg-surface p-4 border border-border rounded-xl">
        <img src={imageSrc} alt={title} className="w-full h-32 object-cover rounded mb-4" />
        <h4 className="text-lg text-white font-semibold mb-2">{title}</h4>
        <p className="text-sm text-muted">{description}</p>
    </div>
  );
}

export default IndustryCard;