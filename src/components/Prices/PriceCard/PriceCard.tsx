interface Props {
    title: string;
    price: string;
    description: string;
    benefiets: string[];
    isMostPopular?: boolean;
}

const PriceCard = (props: Props) => {
    return (
        <div>
            <h4>Title</h4>
            <p>Descripción del plan y sus beneficios.</p>
        </div>
    );
}
export default PriceCard;