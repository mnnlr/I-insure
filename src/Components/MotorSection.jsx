import React from "react";
import Card from "./Card";

const MotorSection = () => {
  const cards = [
    {
      title: "Motor",
      imageUrl:
        "https://www.renewbuy.com/sites/default/files/2023-08/Motor%20Insurance%20%282%29.png",
      link: "/product/motorinsuranceform",
    },
    {
      title: "Health",
      imageUrl:
        "https://www.bajajallianz.com/content/dam/bagic/index/motor-insurance-online-policy.png",
      link: "/product/healthinsuranceform",
    },
    {
      title: "Miscellaneous",
      imageUrl:
        "https://www.renewbuy.com/sites/default/files/2023-08/Motor%20Insurance%20%282%29.png",
      link: "/product/miscellaneousinsuranceform",
    },
    {
      title: "Fire",
      imageUrl:
        "https://www.bajajallianz.com/content/dam/bagic/index/motor-insurance-online-policy.png",
      link: "/product/fireinsuranceform",
    },
    {
      title: "Marine",
      imageUrl:
        "https://www.bajajallianz.com/content/dam/bagic/index/motor-insurance-online-policy.png",
      link: "/product/marininsuranceform",
    },
    {
      title: "Engineering",
      imageUrl:
        "https://www.renewbuy.com/sites/default/files/2023-08/Motor%20Insurance%20%282%29.png",
      link: "/product/engineeringinsuranceform",
    },
    {
      title: "Rural",
      imageUrl:
        "https://www.bajajallianz.com/content/dam/bagic/index/motor-insurance-online-policy.png",
      link: "/product/ruralinsuranceform",
    },
    {
      title: "PMSBY",
      imageUrl:
        "https://www.renewbuy.com/sites/default/files/2023-08/Motor%20Insurance%20%282%29.png",
      link: "/product/pmfbyinsuranceform",
    },
    {
      title: "PMFBY",
      imageUrl:
        "https://www.renewbuy.com/sites/default/files/2023-08/Motor%20Insurance%20%282%29.png",
      link: "/product/pmsbyinsuranceform",
    },
    {
      title: "Withdrawn",
      imageUrl:
        "https://www.renewbuy.com/sites/default/files/2023-08/Motor%20Insurance%20%282%29.png",
      link: "/product/withdrawnsection",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-32">PRODUCTS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            imageUrl={card.imageUrl}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default MotorSection;
