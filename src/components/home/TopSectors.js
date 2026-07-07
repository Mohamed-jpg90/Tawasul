// import React from "react";
// import Image from "next/image";
// import './home.css'
// import success from "../../imag/success.png";
// import sector1 from "../../imag/sector1.png";
// import sector2 from "../../imag/sector2.png";
// import sector3 from "../../imag/sector3.png";
// import sector4 from "../../imag/sector4.png";
// import sector5 from "../../imag/sector5.png";
// import sector6 from "../../imag/sector6.png";

// export default function TopSectors() {
//   const sectors = [
//     {
//       img: sector1,
//       alt: "شركة برمجة",
//     },
//     {
//       img: sector2,
//       alt: "شركة تسويق",
//     },
//     {
//       img: sector3,
//       alt: "شركة عقارات",
//     },
//     {
//       img: sector4,
//       alt: "شركة تعليم",
//     },
//     {
//       img: sector5,
//       alt: "شركة طبية",
//     },
//     {
//       img: sector6,
//       alt: "شركة تجارة إلكترونية",
//     },
//   ];

//   return (
//     <section className="topsector">
//       <div className="topsectorContent">
//         <div className="topsectorText">
//           <h1 className="headerSeciont" >الآلاف من الشركات يعتمدون بشكل أساسي على حلول تواصل</h1>

//           <div className="successContent">
//             <Image src={success} alt="success" />
//             <h2>انضم لأكثر من 10,000 عميل ناجح في تواصل</h2>
//           </div>
//         </div>

//         <div className="sectorsGrid">
//           {sectors.map((sector, index) => (
//             <div className="sectorCard" key={index}>
//               <Image
//                 src={sector.img}
//                 alt={sector.alt}
//                 className="sectorImage"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import './home.css'
import success from "../../imag/success.png";
import sector1 from "../../imag/sector1.png";
import sector2 from "../../imag/sector2.png";
import sector3 from "../../imag/sector3.png";
import sector4 from "../../imag/sector4.png";
import sector5 from "../../imag/sector5.png";
import sector6 from "../../imag/sector6.png";

export default function TopSectors() {
  const sectors = [
    { img: sector1, alt: "شركة برمجة" },
    { img: sector2, alt: "شركة تسويق" },
    { img: sector3, alt: "شركة عقارات" },
    { img: sector4, alt: "شركة تعليم" },
    { img: sector5, alt: "شركة طبية" },
    { img: sector6, alt: "شركة تجارة إلكترونية" },
  ];

  return (
    <section className="topsector">
      <div className="topsectorContent">
        <div className="topsectorText">
          <h1 className="headerSeciont">الآلاف من الشركات يعتمدون بشكل أساسي على حلول تواصل</h1>

          <div className="successContent">
            <Image src={success} alt="success" />
            <h2>انضم لأكثر من 10,000 عميل ناجح في تواصل</h2>
          </div>
        </div>

        <Marquee pauseOnHover className="[--duration:25s]">
          {sectors.map((sector, index) => (
            <div className="sectorCard" key={index}>
              <Image src={sector.img} alt={sector.alt} className="sectorImage" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}