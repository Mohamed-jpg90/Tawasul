import Image from "next/image";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";
import TawasulLogo from "../../imag/9433969339dc30ff23e7c765411625e87ebea061.png"; // عدّل المسار حسب مكان الصورة عندك
import './layout.css'
const services = [
  "برنامج ادارة شركات التصميم الداخلي",
  "برنامج ادارة شركات التوظيف",
  "برنامج ادارة شركات تنظيم المعارض و المؤتمرات",
  "برنامج ادارة شركات القانونية",
  "برنامج ادارة شركات الاستشارية",
  "برنامج ادارة شركات المعاملات",
  "برنامج ادارة شركات التسويق",
  "برنامج ادارة شركات التسويق العقاري",
  "برنامج ادارة شركات التطوير العقاري",
  "برنامج ادارة مكاتب المحاماة",
  "برنامج ادارة المصانع",
  "برنامج ادارة عيادات الاسنان والتجميل",
];

const aboutLinks = [
  { label: "الشروط و الاحكام", href: "#" },
  { label: "تعدم كشريك", href: "#" },
  { label: "تعرف على تواصل", href: "#" },
  { label: "تصل بنا", href: "#" },
  { label: "سياسة الخصوصية", href: "#" },
];

const socialLinks = [
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaXTwitter, href: "#", label: "X" },
  { icon: FaTiktok, href: "#", label: "TikTok" },
];

export default function Footer() {
  return (
    <footer className={ "footer"} dir="rtl">
      <div className={ "container"}>
        {/* عمود تواصل معنا */}
        <div className={ 'column'}>
          <h3 className={ 'heading'}>تواصل معنا</h3>

          <p className={ 'label'}>جدة</p>
          <p className={ 'text'}>المكتب الرئيسي</p>
          <p className={ 'text'}>
            المركز الرئيسي للأعمال - حي الشاطئ - الواجهة البحرية - الطابق 43
          </p>

          <p className={ 'label'}>اتصل الان</p>
          <a href="tel:+966565653252" className={ 'contactLink'}>
            +966565653252
          </a>

          <p className={ 'label'}>البريد الالكتروني</p>
          <a
            href="mailto:wecare@Thefirstagencysa.com"
            className={ 'contactLink'}
          >
            wecare@Thefirstagencysa.com
          </a>
        </div>

        {/* عمود عن تواصل */}
        <div className={ 'column'}>
          <h3 className={ 'heading'}>عن تواصل</h3>
          <ul className={ 'linkList'}>
            {aboutLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={ 'link'}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* عمود الحلول التي يقدمها تواصل */}
        <div className={ 'column'}>
          <h3 className={ 'heading'}>الحلول التي يقدمها تواصل</h3>
          <ul className={ 'linkList'}>
            {services.map((service) => (
              <li key={service}>
                <a href="#" className={ 'link'}>
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${ 'column'} ${ 'brandColumn'}`}>
          <div className={ 'logoWrapper'}>
            <Image
              src={TawasulLogo}
              alt="Tawasul"
              className={ 'logoImage'}
              priority
            />
          </div>

          <div className={ 'socialRow'}>
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className={ 'socialIconFooter'}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}