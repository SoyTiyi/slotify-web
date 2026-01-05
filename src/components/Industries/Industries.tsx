import barberPhoto from "../../assets/images/barber.png";
import clinicPhoto from "../../assets/images/clinic.png";
import spaPhoto from "../../assets/images/spa.png";
import gymPhoto from "../../assets/images/gym.png";
import IndustryCard from "./IndustryCard/IndustryCard";
import arrow from "../../assets/icons/arrow.svg";
import { FaArrowRightLong } from "react-icons/fa6";

const Industries = () => {
  return (
    <section id="industry" className="flex flex-col bg-surface md:flex-row justify-between items-center gap-24 px-6 py-12 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-auto">
        <IndustryCard
          imageSrc={barberPhoto}
          title="Barberia"
          description="Gestiona multiples barberos y comisiones"
        />
        <IndustryCard
          imageSrc={gymPhoto}
          title="Gimnasio"
          description="Mantén a tus clientes en forma con horarios flexibles"
        />
        <IndustryCard
          imageSrc={spaPhoto}
          title="Spa y Estetica"
          description="Servicios personalizados a tus clientes"
        />
        <IndustryCard
          imageSrc={clinicPhoto}
          title="Clinica"
          description="Gestiona citas y pacientes de manera eficiente"
        />
      </div>

      <div className="text-white max-w-lg inline-block align-middle">
        <h3 className="text-4xl font-bold mb-4">Adaptado a tu industria</h3>

        <p className="text-lg text-muted mb-4">
          No importa si cortas cabello, realizas camisas o atiendes pacientes.
          Slotify se configura segun las necesidades de tu rubro para que no
          tengas que cambiar tu forma de trabajar.
        </p>

        <div className="flex flex-col gap-4 list-disc list-inside mt-8">
          <div className="flex gap-2 items-center">
            <img src={arrow} alt="Arrow Icon" className="w-6 h-6 mb-2" />
            <p className="text-lg text-white">
              Configuracion de horarios flexibles
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <img src={arrow} alt="Arrow Icon" className="w-6 h-6 mb-2" />
            <p className="text-lg text-white">Gestion Multiples Sucursales</p>
          </div>
          <div className="flex gap-2 items-center">
            <img src={arrow} alt="Arrow Icon" className="w-6 h-6 mb-2" />
            <p className="text-lg text-white">
              Perfiles de Empleados y Comisiones
            </p>
          </div>
        </div>

        <button className="flex items-center text-lg text-primary mt-6 font-semibold hover:text-primary-hover cursor-pointer">
          Explorar casos de exito
          <FaArrowRightLong className="ml-2" />
        </button>
      </div>
    </section>
  );
};

export default Industries;
