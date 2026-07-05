import "./home.css";
import Button from "../shared/Button";

import Icons from "../shared/Icons";
import Icon1 from '../../imag/icon1.png'
import Icon2 from '../../imag/icon2.png'
import Icon3 from '../../imag/icon3.png'
import Icon4 from '../../imag/icon4.png'
import Icon5 from '../../imag/icon5.jpg'
// import Icon6 from '../../imag/icon6.png'
export default function HeroSection() {
      const floatingIcons = [
    { image: Icon1, className: "floatingIcon1" },
    { image: Icon2, className: "floatingIcon2" },
    { image: Icon3, className: "floatingIcon3" },
    { image: Icon4, className: "floatingIcon4" },
    { image: Icon5, className: "floatingIcon5" },
  ];
    return (
        <section className="herosection">
            {/* Background ellipses */}
            <div className="heroEllipse heroEllipseRight"></div>
            <div className="heroEllipse heroEllipseLeft"></div>
        <div className="floatingIcons" aria-hidden="true">
        {floatingIcons.map((icon, index) => (
          <div key={index} className={`floatingIcon ${icon.className}`}>
            <Icons img={icon.image} />
          </div>
        ))}
      </div>
            <div className="herosectionContent">
                <div className="herosectionMainText">
                    <h1>
                        برنامجك الأمثل لإنشاء
                        <br />
                        <span className="secondtext">موقعك الإلكتروني</span>
                    </h1>
                </div>

                <div className="herosectionDiscription">
                    <p>
                        منصة "تواصل" توفر لك موقعًا شاملًا مع لوحة تحكم وإدارة محتوى تقدم
                        خصائص مميزة وفريدة لإدارة محتويات موقعك بسهولة مع إمكانيات متقدمة.
                    </p>
                </div>

                <div className="heroButtons">
                    <div>
                        <Button text="اتصل بنا" to="/contact" primary={true} />
                        <Button text="جرب تواصل" to="/register" primary={false} />
                    </div>
                    <div>
                        <p>14 يوماً تجربة مجانية - بدون بطاقة ائتمان</p>
                    </div>

                </div>
            </div>
        </section>
    );
}