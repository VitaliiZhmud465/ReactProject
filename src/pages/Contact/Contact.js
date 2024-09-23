import ContactDesc from "components/ContactPage/ContactDesc/ContactDesc";
import ContactSlide from "components/ContactPage/ContactSlide/ContactSlide";
import HomeLayout from "layouts/HomeLayout/HomeLayout";
import React from "react";

function ContactPage(props) {
  return (
    <HomeLayout>
      <ContactSlide/>
      <ContactDesc/>
    </HomeLayout>
  );
}

export default ContactPage;
