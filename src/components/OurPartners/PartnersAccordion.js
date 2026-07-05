"use client";

import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EditNoteIcon from "@mui/icons-material/EditNote";
import HubIcon from "@mui/icons-material/Hub";
import InstagramIcon from "@mui/icons-material/Instagram";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import HandshakeIcon from "@mui/icons-material/Handshake";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import PaidIcon from "@mui/icons-material/Paid";
import GavelIcon from "@mui/icons-material/Gavel";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SchoolIcon from "@mui/icons-material/School";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import BadgeIcon from "@mui/icons-material/Badge";

import "./OurPartner.css";

// Edit the title / description text for each partner category here
const partners = [
  {
    id: "content",
    title: "شركاء المحتوى",
    description:
      "شركاء متخصصون في إنتاج وصياغة المحتوى بجودة عالية يناسب احتياجات عملك ويعزز حضورك الرقمي.",
    icon: <EditNoteIcon />,
  },
  {
    id: "tech",
    title: "شركاء التقنية",
    description:
      "شركاء تقنيون يقدمون حلولاً وأدوات برمجية تساعدك على تطوير وتشغيل مشروعك بكفاءة.",
    icon: <HubIcon />,
  },
  {
    id: "social",
    title: "شركاء إدارة الحسابات والتفاعل الاجتماعي",
    description:
      "شركاء يديرون حساباتك على منصات التواصل الاجتماعي ويعملون على رفع مستوى التفاعل معها.",
    icon: <InstagramIcon />,
  },
  {
    id: "marketing",
    title: "شركاء التسويق والتحليل",
    description:
      "شركاء يقدمون خدمات التسويق الرقمي وتحليل البيانات لمساعدتك على اتخاذ قرارات أفضل.",
    icon: <QueryStatsIcon />,
  },
  {
    id: "business-dev",
    title: "شركاء تطوير الأعمال",
    description:
      "شركاء يساعدونك على توسيع نطاق أعمالك وبناء شراكات استراتيجية جديدة.",
    icon: <HandshakeIcon />,
  },
  {
    id: "influencers",
    title: "شركاء صناع المحتوى والمؤثرين",
    description:
      "شبكة من صناع المحتوى والمؤثرين للتعاون معهم في حملاتك التسويقية.",
    icon: <CameraAltIcon />,
  },
  {
    id: "finance",
    title: "شركاء المحاسبة والتمويل",
    description:
      "شركاء متخصصون في الخدمات المحاسبية والمالية وحلول التمويل لمشروعك.",
    icon: <PaidIcon />,
  },
  {
    id: "legal",
    title: "شركاء القانون",
    description:
      "شركاء قانونيون يقدمون الاستشارات والخدمات القانونية اللازمة لحماية عملك.",
    icon: <GavelIcon />,
  },
  {
    id: "spaces",
    title: "شركاء المساحات والمكاتب",
    description:
      "شركاء يوفرون مساحات عمل ومكاتب مرنة تناسب احتياجات فريقك.",
    icon: <ApartmentIcon />,
  },
  {
    id: "training",
    title: "شركاء التدريب والتطوير",
    description:
      "شركاء يقدمون برامج تدريبية وتطويرية لرفع كفاءة فريق عملك.",
    icon: <SchoolIcon />,
  },
  {
    id: "consulting",
    title: "شركاء الاستشارات",
    description:
      "شركاء استشاريون يساعدونك في اتخاذ القرارات الصحيحة لنمو مشروعك.",
    icon: <BusinessCenterIcon />,
  },
  {
    id: "branding",
    title: "شركاء العلامة التجارية",
    description:
      "شركاء متخصصون في بناء وتطوير هوية علامتك التجارية.",
    icon: <BadgeIcon />,
  },
];

export default function PartnersAccordion() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panelId) => (event, isExpanded) => {
    setExpanded(isExpanded ? panelId : false);
  };

  return (
    <div className="partners-grid" dir="rtl">
      {partners.map((partner) => (
        <div className="partner-card" key={partner.id}>
          <div className="partner-icon">{partner.icon}</div>
          <Typography className="partner-title">{partner.title}</Typography>

          <Accordion
            expanded={expanded === partner.id}
            onChange={handleChange(partner.id)}
            disableGutters
            elevation={0}
            square
            className="partner-accordion"
          >
            <AccordionSummary
              expandIcon={<KeyboardArrowDownIcon className="partner-expand-icon" />}
              aria-controls={`${partner.id}-content`}
              id={`${partner.id}-header`}
              className="partner-summary"
            >
              <Typography className="partner-more-link">اعرف المزيد</Typography>
            </AccordionSummary>

            <AccordionDetails className="partner-details">
              <Typography className="partner-description"> </Typography>
              <br />  
                {partner.description}
             
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
}