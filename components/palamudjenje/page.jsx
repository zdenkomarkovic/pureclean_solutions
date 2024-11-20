import React from "react";

const Palamudjenje = () => {
  return (
    <div id="palamudjenje" className="bg-red-100 py-[500px]  text-center">
      <h2 className="text-[50px]">Kontakt</h2>
      <p>Pozovite nas klikom na</p>
      <a href="tel:+381659742000">
        <button className="p-4 border-2 rounded-full">
          Mobilni: +381 65 9742000
        </button>
      </a>
      <a href="viber://chat?number=%2B381641967267">
        <button className="p-4 border-2 rounded-full">
          Viber: +381 65 9742000
        </button>
      </a>
      <a href="https://wa.me/381641967267">
        <button className="p-4 border-2 rounded-full">
          WhatsApp: +381 65 9742000
        </button>
      </a>
    </div>
  );
};

export default Palamudjenje;
