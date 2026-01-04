import { HiScissors } from "react-icons/hi2";
import { TbPlant2 } from "react-icons/tb";
import { CgGym } from "react-icons/cg";
import { GiHealthNormal } from "react-icons/gi";
import { MdOutlinePets } from "react-icons/md";
import Company from "./Company/Company";

interface Company {
  id: number;
  logo: React.ReactNode;
  name: string;
}

const companiesList: Company[] = [
  {
    id: 1,
    logo: <HiScissors className="h-6 w-6"/>,
    name: "BarberPro",
  },
  {
    id: 2,
    logo: <TbPlant2 className="h-6 w-6"/>,
    name: "IreneEstetica",
  },
  {
    id: 3,
    logo: <CgGym className="h-6 w-6"/>,
    name: "Flux",
  },
  {
    id: 4,
    logo: <GiHealthNormal className="h-6 w-6"/>,
    name: "MedCate",
  },
  {
    id: 5,
    logo: <MdOutlinePets className="h-6 w-6"/>,
    name: "VetLife",
  },
];

const Companies = () => {
  return (
    <div className="flex flex-col items-center gap-6 py-16 px-4 bg-surface border border-border">
      <p className="text-muted">Confian en nostros multiples clientes</p>

      <div className="flex flex-col gap-4 md:flex-row space-x-16 justify-center">
        {companiesList.map((company) => (
          <Company key={company.id} logo={company.logo} name={company.name} />
        ))}
      </div>
    </div>
  );
};

export default Companies;
