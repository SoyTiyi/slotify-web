const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center text-white gap-8 py-24">
      <div className="flex text-primary bg-primary/10 rounded-full px-4 py-2 items-center border-primary border">
        <div className="w-2 h-2 bg-primary rounded-full mr-2" />
        <p className="font-medium">Nuevo: Integracion con Whatsapp Business</p>
      </div>

      <h1 className="text-8xl font-bold">
        Gestiona tus turnos <br />
        <b className="font-bold text-primary bg-gradient-to-r from-primary to-accent-highlight bg-clip-text text-transparent">
          sin caos.
        </b>
      </h1>

      <p className="font-normal text-text-secondary text-2xl">
        Calendario, Clientes, recordatorios automaticos y pagos en line. Todo lo
        que
        <br />
        necesitas para tu negocio en una sola plataforma
      </p>

      <div className="flex flex-col gap-4 mt-4 items-center md:flex-row sm:flex-col sm:gap-3">
        <button className="flex text-text-primary bg-primary px-10 py-3 rounded-xl font-semibold hover:bg-primary-hover transition cursor-pointer">
          Prueba gratis
          <svg
            className="w-6 h-6 ml-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M5 12H19M19 12L13 6M19 12L13 18"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </button>
        <button className="flex items-center text-text-primary bg-primary/10 rounded-xl px-10 py-3 border border-muted hover:bg-primary/20 transition cursor-pointer">
          <svg
            className="w-3 h-3 mr-2 bg-white rounded-full p-0.5"
            viewBox="-1 0 12 12"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#FFFFFF"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>play [#1000]</title> <desc>Created with Sketch.</desc>{" "}
              <defs> </defs>{" "}
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                {" "}
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-65.000000, -3803.000000)"
                  fill="#000000"
                >
                  {" "}
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    {" "}
                    <path
                      d="M18.074,3650.7335 L12.308,3654.6315 C10.903,3655.5815 9,3654.5835 9,3652.8985 L9,3645.1015 C9,3643.4155 10.903,3642.4185 12.308,3643.3685 L18.074,3647.2665 C19.306,3648.0995 19.306,3649.9005 18.074,3650.7335"
                      id="play-[#1000]"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
          Ver demo
        </button>
      </div>
    </div>
  );
};

export default Hero;
