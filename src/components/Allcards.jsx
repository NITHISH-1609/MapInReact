import React from "react";
import contacts from "../contacts";
import Card from "./Card";

function Createcontact(contact) {
  return (
    <Card
      name={contact.name}
      phone={contact.phone}
      mail={contact.email}
      imgurl={contact.imgURL}
    />
  );
}

function Allcards() {
  return <div>{contacts.map(Createcontact)}</div>;
}

export default Allcards;
