import type React from "react";
import { CiCalendar } from "react-icons/ci";
import { FaBell, FaUser  } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { BiStats } from "react-icons/bi";
import { RiCalendarScheduleFill } from "react-icons/ri";
import Feature from "./Feature/Feature";


type FeatureProps = {
    id: number;
    icon: React.ReactNode;
    title: String;
    description: String;
}

const features: FeatureProps[] = [
    {  
        id: 1, 
        icon: <CiCalendar className="text-primary h-8 w-8 bg-surface-2 border-border rounded-lg p-1"/>,
        title: "Organización",
        description: "Mantén todas tus tareas organizadas y accesibles en un solo lugar."
    },
    {
        id: 2,
        icon: <FaBell className="text-primary h-8 w-8 bg-surface-2 border-border rounded-lg p-1"/>,
        title: "Recordatorios Whatsapp",
        description: "Reduce el ausentismo hasta un 80% enviando recordatorios automáticos a tus clientes."
    },
    {
        id: 3,
        icon: <MdPayments className="text-primary h-8 w-8 bg-surface-2 border-border rounded-lg p-1"/>,
        title: "Pagos",
        description: "Cobra al momento de reservar para asegurar tus ingresos y reducir cancelaciones."
    },
    {
        id: 4,
        icon: <FaUser className="text-primary h-8 w-8 bg-surface-2 border-border rounded-lg p-1"/>,
        title: "Historial de Clientes",
        description: "Lleva un registro detallado de tratamientos/servicios recibidos por cada cliente."
    },
    {
        id: 5,
        icon: <BiStats className="text-primary h-8 w-8 bg-surface-2 border-border rounded-lg p-1"/>,
        title: "Reportes y Métricas",
        description: "Entiende tu negocio con gráficos claros sobre ingresos, citas y comportamiento de clientes."
    },
    {
        id: 6,
        icon: <RiCalendarScheduleFill className="text-primary h-8 w-8 bg-surface-2 border-border rounded-lg p-1"/>,
        title: "Sitio de Reservas",
        description: "Link personalizable para que tus clientes reserven en línea 24/7."
    }
];

const Features = () => {
  return (
    <section id="feature" className="flex flex-col items-center text-center text-white gap-6 p-8">
      <h2 className="text-4xl font-semibold">Todo lo que necesitas para crecer</h2>
      <p className="text-lg text-muted font-medium">
        Automatiza las tareas repetitivas y enfócate en lo que realmente
        importa: <b className="text-accent-highlight font-semibold">tus clientes.</b>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {features.map((feature) => (
          <Feature
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
