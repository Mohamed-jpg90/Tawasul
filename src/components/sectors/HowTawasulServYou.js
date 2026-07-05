"use client";

import { useState } from "react";
import Card from "../shared/Card";

export default function HowTawasulServesYou({
//   sectionTitle,
  tabs,
}) {
  const [activeTab, setActiveTab] = useState(tabs[0].title);

  const currentTab = tabs.find(
    (tab) => tab.title === activeTab
  );

  return (
    <section className="howTawasulServesYou">

      <div className="sectionText">
        <h2 className="headerSeciont">
        كيف يخدمك "تــــواصل" كشركة تسويق؟
        </h2>
      </div>

      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.title}
            className={activeTab === tab.title ? "activeTab" : ""}
            onClick={() => setActiveTab(tab.title)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <Card
        right={currentTab.card.right}
        headnumber={currentTab.card.headNumber}
        headtext={currentTab.card.headText}
        img={currentTab.card.img}
        subtitles={currentTab.card.subtitles}
      />

    </section>
  );
}