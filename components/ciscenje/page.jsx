// "use client";

// import Image from "next/image";
// import React, { useEffect, useRef, useState } from "react";

// const Ciscenje = () => {
//   const containerRef = useRef(null); // Referenca na roditeljski `div`
//   const [hasAnimated, setHasAnimated] = useState(false); // Da li je animacija pokrenuta

//   useEffect(() => {
//     const handleScroll = () => {
//       const rect = containerRef.current?.getBoundingClientRect();
//       if (rect) {
//         // Proveravamo da li je div ušao u ekran (top < window.innerHeight)
//         if (rect.top < window.innerHeight * 0.8 && !hasAnimated) {
//           setHasAnimated(true); // Pokreće animaciju
//         } else if (rect.top > window.innerHeight && hasAnimated) {
//           setHasAnimated(false); // Resetuje animaciju kada div izađe iz ekrana
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [hasAnimated]);

//   return (
//     <div
//       id="ciscenje"
//       className="px-2 py-4 container lg:pb-[100px]  mx-auto lg:px-10 text-center"
//     >
//       <div ref={containerRef} className="relative lg:flex gap-20 items-center">
//         <h2
//           className={` z-50 absolute left-0 right-0 text-[34px] lg:text-[50px] py-[10px] font-bold lg:py-[80px] text-center text-primary transform transition-transform duration-1000 ease-in-out ${
//             hasAnimated ? "scale-100 opacity-100" : "scale-50 opacity-10"
//           } `}
//         >
//           Čišćenje
//         </h2>
//         <div
//           className={`transform transition-transform duration-1000 ease-in-out ${
//             hasAnimated
//               ? "translate-y-0 opacity-50"
//               : "translate-y-20 opacity-0"
//           } absolute bg-black opacity-50 w-full h-[65px] rounded-t-3xl lg:hidden z-30`}
//         ></div>
//         <Image
//           src="/ciscenje.jpg"
//           width={750}
//           height={600}
//           alt="ciscenje"
//           className={` rounded-3xl transform transition-transform duration-1000 ease-in-out ${
//             hasAnimated
//               ? "translate-y-0 opacity-100"
//               : "translate-y-20 opacity-0"
//           } shadow-xl `}
//         />
//       </div>
//     </div>

//     // <div
//     //   id="ciscenje"
//     //   className="px-2 container lg:pb-[100px]  mx-auto lg:px-10 text-center"
//     // >
//     //   <h2 className="text-[34px] lg:text-[50px] py-[30px] lg:py-[80px] text-center text-primary">
//     //     Čišćenje
//     //   </h2>
//     //   <div className=" lg:flex gap-20 items-center">
//     //     {/* <div className="absolute bg-black opacity-50 w-full h-[55px] rounded-t-3xl lg:hidden"></div> */}
//     //     <Image
//     //       src="/ciscenje.jpg"
//     //       width={750}
//     //       height={600}
//     //       alt="ciscenje"
//     //       className="rounded-3xl"
//     //     />
//     //     <div className="lg:text-left py-[30px] lg:py-0">
//     //       <p className="text-[18px] lg:text-[28px]">
//     //         Učinite vaš prostor blistavim uz usluge profesionalnog čišćenja!
//     //         Bilo da je u pitanju stan, poslovni prostor ili kancelarija,
//     //         PureClean Solutions garantuje besprekornu higijenu i pažnju prema
//     //         svakom detalju. Naš tim koristi kvalitetna sredstva i efikasne
//     //         metode kako bi obezbedio čistoću koja traje. Prepustite brigu nama i
//     //         uživajte u savršenoj svežini vašeg prostora!
//     //       </p>
//     //     </div>
//     //   </div>
//     // </div>
//   );
// };

// export default Ciscenje;
