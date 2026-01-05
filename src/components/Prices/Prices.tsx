import PriceCard from "./PriceCard/PriceCard";

interface PricePlan {
    title: string;
    price: string;
    description: string;
    benefits: string[];
    isMostPopular?: boolean;
}

const pricePlans: PricePlan[] = [
    {
        title: "Starter",
        price: "$10/mes",
        description: "Ideal para profesionales individuales",
        benefits: [
            "1 Usuario",
            "Hasta 100 sitas al mes",
            "Recordatorios por email"
        ]
    },
    {
        title: "Profesional",
        price: "$30/mes",
        description: "Para negocios en crecimiento",
        benefits: [
            "Hasta 10 usuarios",
            "Citas ilimitadas",
            "Recordatorios por email y WhatsApp",
            "Pagos online"
        ],
        isMostPopular: true
    },
    {
        title: "Business",
        price: "$59/mes",
        description: "Para grandes equipos y empresas",
        benefits: [
            "Usuarios ilimitados",
            "Soporte dedicado 24/7",
            "Acceso a API",
            "Reportes personalizados y avanzados"
        ]
    }
];

const Prices = () => {
    return(
        <div>
            <h3>Planes</h3>
            <p>Tiempos de prueba de 15 dias para cada plan, pruebas el producto primero antes de pagar por el.</p>

            <div>
                {pricePlans.map((plan) => (
                    <PriceCard
                        key={plan.title}
                        title={plan.title}
                        price={plan.price}
                        description={plan.description}
                        benefiets={plan.benefits}
                        isMostPopular={plan.isMostPopular}
                    />
                ))}
            </div>
        </div>
    );
}

export default Prices;