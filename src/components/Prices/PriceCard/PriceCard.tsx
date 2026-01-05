import { FaCheck } from "react-icons/fa";

interface Props {
  title: string;
  price: string;
  description: string;
  benefiets: string[];
  isMostPopular?: boolean;
  buttonText?: string;
}

const PriceCard = ({
  title,
  price,
  description,
  benefiets,
  isMostPopular,
  buttonText,
}: Props) => {
  return (
    <div className={`relative flex flex-col bg-surface gap-6 p-6 md:p-8 rounded-2xl shadow-lg text-white text-left h-full ${
      isMostPopular
        ? "border-2 border-primary shadow-[0_0_30px_rgba(124,58,237,0.5)]"
        : "border border-border"
    }`}>
      {isMostPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-white text-sm font-medium px-4 py-2 rounded-full">
            Más popular
          </span>
        </div>
      )}
      <h4 className="text-2xl font-semibold text-white">{title}</h4>
      <div className="flex items-baseline gap-2">
        <p className="text-5xl font-bold">${price}</p>
        <p className="text-lg text-muted">/mes</p>
      </div>
      <p className="text-lg text-muted">{description}</p>
      <ul className="flex flex-col gap-4 list-inside">
        {benefiets.map((benefit, index) => (
          <li className="text-base text-muted" key={index}>
            <FaCheck className="inline mr-2 text-accent-success" />
            {benefit}
          </li>
        ))}
      </ul>

      <button
        className={`mt-auto ${isMostPopular ? "bg-primary" : "bg-surface"} ${
          isMostPopular ? "" : "border border-border"
        } ${isMostPopular ? "hover:bg-primary-hover" : "hover:bg-surface-2"} text-lg font-normal text-white py-3 px-6 rounded-xl transition-colors cursor-pointer`}
      >
        {buttonText || "Seleccionar Plan"}
      </button>
    </div>
  );
};
export default PriceCard;
