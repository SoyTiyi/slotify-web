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
        icon: <CiCalendar />,
        title: "Organización",
        description: "Mantén todas tus tareas organizadas y accesibles en un solo lugar."
    },
    {
        id: 2,
        icon: <FaBell />,
        title: "Recordatorios Whatsapp",
        description: "Reduce el ausentismo hasta un 80% enviando recordatorios automáticos a tus clientes."
    },
    {
        id: 3,
        icon: <MdPayments />,
        title: "Pagos",
        description: "Cobra al momento de reservar para asegurar tus ingresos y reducir cancelaciones."
    },
    {
        id: 4,
        icon: <FaUser />,
        title: "Historial de Clientes",
        description: "Lleva un registro detallado de tratamientos/servicios recibidos por cada cliente."
    },
    {
        id: 5,
        icon: <BiStats />,
        title: "Reportes y Métricas",
        description: "Entiende tu negocio con gráficos claros sobre ingresos, citas y comportamiento de clientes."
    },
    {
        id: 6,
        icon: <RiCalendarScheduleFill />,
        title: "Sitio de Reservas",
        description: "Link personalizable para que tus clientes reserven en línea 24/7."
    }
];

const Features = () => {
  return (
    <div className="text-white">
      <h2>Todo lo que necesitas para crecer</h2>
      <p>
        Automatiza las tareas repetitivas y enfócate en lo que realmente
        importa: tus clientes.
      </p>
      <div>
        {features.map((feature) => (
          <Feature
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
