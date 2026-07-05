"use client";

import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import './home.css'
const questions = [
  {
    id: 1,
    question: "ما هي منصة تواصل؟",
    answer:
      "تواصل هي منصة تساعدك على إنشاء موقع إلكتروني وإدارة محتواه وخدماته وعملائه من مكان واحد.",
  },
  {
    id: 2,
    question: "هل أحتاج إلى خبرة برمجية لاستخدام المنصة؟",
    answer:
      "لا، يمكنك إنشاء وإدارة موقعك بسهولة بدون كتابة أي كود أو الحاجة إلى خبرة برمجية.",
  },
  {
    id: 3,
    question: "هل يمكنني تعديل محتوى الموقع لاحقاً؟",
    answer:
      "نعم، يمكنك تعديل النصوص والصور والخدمات والصفحات في أي وقت من لوحة التحكم.",
  },
  {
    id: 4,
    question: "هل الموقع يعمل على الهاتف؟",
    answer:
      "نعم، جميع المواقع التي يتم إنشاؤها من خلال تواصل متجاوبة وتعمل على الجوال والتابلت والكمبيوتر.",
  },
  {
    id: 5,
    question: "هل يمكنني استخدام اسم نطاق خاص بي؟",
    answer:
      "نعم، يمكنك ربط موقعك باسم نطاق خاص بك مثل example.com بسهولة.",
  },
  {
    id: 6,
    question: "هل يوجد دعم فني؟",
    answer:
      "نعم، فريق الدعم الفني متاح لمساعدتك في أي مشكلة أو استفسار أثناء استخدام المنصة.",
  },
];

export default function ComanQustion() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section className="comanQustion" dir="rtl">
      <div className="comanQustionContent">
        <div className="sectionText">  
          <h2 className="headerSeciont">الأسئلة الشائعة</h2>

          <p>
       وفّر وقتك! شوف الأسئلة الشائعة يمكن تلقى اللي تدور عليه 
          </p>
        </div>

        <div className="questionsContainer">
          {questions.map((item) => (
            <Accordion
              key={item.id}
              expanded={expanded === `panel${item.id}`}
              onChange={handleChange(`panel${item.id}`)}
              className="questionAccordion"
              disableGutters
              elevation={0}
              sx={{
                backgroundColor:"#f5f5f5"
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${item.id}-content`}
                id={`panel${item.id}-header`}
                className="questionSummary"
              >
                <h3>{item.question}</h3>
              </AccordionSummary>

              <AccordionDetails className="questionDetails">
                <p>{item.answer}</p>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}