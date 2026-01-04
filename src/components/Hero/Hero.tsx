const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center text-white gap-6 py-18">
      <div className="flex text-primary bg-primary/10 rounded-full px-4 py-2 items-center border-primary border">
        <div className="w-2 h-2 bg-primary rounded-full mr-2" />
        <p className="font-medium">Nuevo: Integracion con Whatsapp Business</p>
      </div>

      <h1 className="text-8xl font-bold">
        Gestiona tus turnos <br />
        <b className="font-bold text-primary bg-gradient-to-r from-primary to-accent-highlight bg-clip-text text-transparent">sin caos.</b>
      </h1>

      <p className="font-normal text-text-secondary text-2xl">
        Calendario, Clientes, recordatorios automaticos y pagos en line. Todo lo que 
        <br/>
        necesitas para tu negocio en una sola plataforma
      </p>

      <div className="flex gap-4 mt-4 items-center">
        <button className="text-text-primary bg-primary px-6 py-3 rounded-xl font-semibold">Prueba gratis</button>
        <button className="text-text-primary bg-primary/10 rounded-xl px-6 py-3 border border-muted">Ver demo</button>
      </div>
    </div>
  );
};

export default Hero;
