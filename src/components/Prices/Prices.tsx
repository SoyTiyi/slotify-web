import PriceCard from "./PriceCard/PriceCard";

interface PricePlan {
    title: string;
    price: string;
    description: string;
    benefits: string[];
    isMostPopular?: boolean;
    buttonText?: string;
}

const pricePlans: PricePlan[] = [
    {
        title: "Starter",
        price: "29",
        description: "Ideal para profesionales independientes.",
        benefits: [
            "1 usuario",
            "Hasta 100 citas/mes",
            "Recordatorios por Email"
        ],
        buttonText: "Comenzar"
    },
    {
        title: "Profesional",
        price: "59",
        description: "Para negocios en crecimiento.",
        benefits: [
            "Hasta 5 usuarios",
            "Citas ilimitadas",
            "Recordatorios por WhatsApp",
            "Pagos online"
        ],
        isMostPopular: true,
        buttonText: "Comenzar prueba gratis"
    },
    {
        title: "Business",
        price: "99",
        description: "Para grandes equipos y cadenas.",
        benefits: [
            "Usuarios ilimitados",
            "API Access",
            "Soporte prioritario 24/7",
            "Reportes avanzados"
        ],
        buttonText: "Contactar ventas"
    }
];

const Prices = () => {
    return(
        <section id="price" className="flex flex-col items-center text-center text-white mt-24  gap-6 px-4">
            <h3 className="text-5xl font-semibold">Planes simples y transparentes</h3>
            <p className="text-2xl text-muted mt-2">Prueba cualquiera de nuestros planes gratis por 14 días. Sin tarjeta de crédito.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 w-full max-w-7xl">
                {pricePlans.map((plan) => (
                    <PriceCard
                        key={plan.title}
                        title={plan.title}
                        price={plan.price}
                        description={plan.description}
                        benefiets={plan.benefits}
                        isMostPopular={plan.isMostPopular}
                        buttonText={plan.buttonText}
                    />
                ))}
            </div>
        </section>
    );
}

export default Prices;