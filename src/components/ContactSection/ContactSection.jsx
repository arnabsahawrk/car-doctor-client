import location from "../../assets/icons/location.svg";
import phone from "../../assets/icons/phone.svg";
import timeTable from "../../assets/icons/time-table.svg";
import ContactInfo from "./ContactInfo";
const ContactSection = () => {
  const contactInfo = [
    {
      img: timeTable,
      head: "We are open monday-friday",
      infoContact: "7:00 am - 9:00 pm",
    },
    {
      img: phone,
      head: "Have a question?",
      infoContact: "+2546 251 2658",
    },
    {
      img: location,
      head: "Need a repair? our address",
      infoContact: "Liza Street, New York",
    },
  ];
  return (
    <section
      id="contact"
      className="bg-[#151515] rounded-[10px] p-10 md:p-12 xl:p-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-8 md:gap-y-12 gap-x-8 md:justify-items-center">
        {contactInfo.map((info, idx) => (
          <ContactInfo key={idx} info={info} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
