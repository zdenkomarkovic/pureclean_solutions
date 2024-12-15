import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaViber } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const CiscenjeNis = () => {
  return (
    <div className=" bg-black ">
      <div className=" container px-[8px] lg:px-[50px] pb-[50px]  text-left mx-auto">
        <h2 className="text-[37px] py-[25px] lg:text-[78px] lg:py-[60px] text-center  text-primary">
          Pure Clean Solutions Čišćenje Niš
        </h2>
        <p className="text-[20px]  text-white  lg:text-[30px] py-[10px]">
          Pozovite{" "}
          <span className="text-primary font-bold">Pure Clean Solutions</span> i
          zakazite profesionalno čišćenje vašeg prostora. Naša agencija za
          čišćenje specijalizovana je za pružanje visokokvalitetnih usluga
          čišćenja koje se mogu prilagoditi svim vašim potrebama. Bilo da se
          radi o stambenim prostorima, poslovnim objektima, kancelarijama,
          industrijskim zgradama ili drugim vrstama prostora, mi smo tu da vam
          pomognemo da očuvate čistoću i higijenu na najvišem nivou. Naš tim
          stručnjaka koristi najsavremenija sredstva i opremu, a svaki zadatak
          obavljamo sa pažnjom na detalje i potpunu posvećenost.
        </p>
        <p className="text-[20px] text-white  lg:text-[30px] py-[10px]">
          Naša ponuda uključuje različite usluge čišćenja, uključujući
          svakodnevno, dubinsko čišćenje, čišćenje nakon renoviranja, kao i
          specijalizovane usluge kao što su čišćenje tepiha, prozora i
          nameštaja. Bez obzira na vrstu čišćenja, mi se uvek trudimo da se
          prilagodimo vašim specifičnim zahtevima. Naš tim je obučen da koristi
          ekološki prihvatljive i sigurne proizvode koji garantuju visok nivo
          efikasnosti i zaštitu vašeg zdravlja i imovine.
        </p>
        <p className="text-[20px] text-white  lg:text-[30px] py-[10px]">
          Naša agencija je poznata po tome što se brine o svim aspektima
          čišćenja, od redovnog održavanja do dubinskog čišćenja prostora koji
          nisu često u upotrebi. Ako vam je potrebna hitna usluga ili želite
          dogovoriti redovno čišćenje, možete se osloniti na nas da će posao
          biti obavljen brzo i efikasno. Sve naše usluge su fleksibilne, tako da
          možemo raditi u skladu sa vašim rasporedom i specifičnim potrebama.
        </p>
        <p className="text-[20px]  text-white  lg:text-[30px] py-[10px]">
          Kada izaberete{" "}
          <span className="text-primary font-bold">Pure Clean Solutions</span>,
          birate pouzdanu kompaniju koja ne pravi kompromis kada je u pitanju
          kvalitet. Kroz naše profesionalne usluge čišćenja, vaš prostor će uvek
          izgledati besprekorno, sa dugotrajnim efektima. Garantujemo da ćete
          biti zadovoljni rezultatima, jer nam je važno da svaki prostor koji
          očistimo bude besprekorno čist i osvežen. Naš cilj je da vaš prostor
          bude zdrav, siguran i prijatan za boravak ili rad.
        </p>
        <p className="text-[20px] text-white  lg:text-[30px] py-[10px]">
          Kontaktirajte nas danas i uverite se zašto su mnogi naši klijenti
          odabrali nas kao svoju primarnu agenciju za čišćenje. Sa{" "}
          <span className="text-primary font-bold">Pure Clean Solutions</span>,
          vaš prostor je u sigurnim rukama. Vaše zadovoljstvo je naša najveća
          motivacija, i trudićemo se da pružimo najbolju moguću uslugu koja će
          prevazići vaša očekivanja. Svi naši radnici su obučeni i spremni da
          reše čak i najzahtevnije zadatke čišćenja, tako da možete biti sigurni
          da ćemo se pobrinuti za svaki detalj.
        </p>
        <p className="text-[20px] mb-20 text-white  lg:text-[30px] py-[10px]">
          Bez obzira na to da li vam je potrebna usluga za poslovne prostore ili
          vašu kuću, možete računati na nas da ćemo obaviti posao sa pažnjom,
          efikasnošću i visokim standardima.{" "}
          <span className="text-primary font-bold">Pure Clean Solutions</span>{" "}
          čišćenje u Nišu prepustite nama, jer smo mi experti u svom poslu.
        </p>
        {/* 
        <div className="">
          <div className="flex flex-col lg:flex-row mx-auto justify-center gap-3 lg:gap-10 items-center">
            <a href="tel:+381631210359">
              <button className="px-8  py-[7px] flex gap-5 items-center border-b-[1px] mx-auto  border-primary text-white text-[20px]">
                Pozovite{" "}
                <FaPhone className="text-[25px] lg:text-[35px] text-primary" />{" "}
                +381 63 1210359
              </button>
            </a>
            <a href="viber://contact?number=%2B381631210359">
              <button className="px-8 py-[7px] flex gap-5 items-center border-b-[1px] mx-auto  border-primary text-white text-[20px]">
                Viber{" "}
                <FaViber className="text-[28px] lg:text-[35px] p-1 bg-purple-600 text-white rounded-xl rounde" />{" "}
                +381 63 1210359
              </button>
            </a>
            <a href="https://wa.me/381631210359">
              <button className="px-8 py-[7px] flex gap-5 items-center border-b-[1px] mx-auto border-primary text-white text-[20px]">
                WhatsApp{" "}
                <FaWhatsappSquare className="text-[30px] lg:text-[35px] rounded-2xl text-green-700 " />{" "}
                +381 63 1210359
              </button>
            </a>
          </div>
          <div className="flex pt-4 lg:pt-12 gap-10 lg:gap-20 text-[33px] lg:text-[40px] justify-center ">
            <a
              href="https://www.instagram.com/pureclean_solutions_nis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="p-1 bg-red-400 rounded-xl text-white" />
            </a>
            <a
              href="https://www.facebook.com/share/14anRHH1Uf/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-blue-500" />
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CiscenjeNis;
