interface Props {
    logo: React.ReactNode;
    name: string;
}

const Company = ({ logo, name }: Props) => {
  return (
    <div className="flex flex-row items-center gap-4 text-white">
        {logo}
        <h3 className="text-lg font-semibold">{name}</h3>
    </div>
  );
};

export default Company;
