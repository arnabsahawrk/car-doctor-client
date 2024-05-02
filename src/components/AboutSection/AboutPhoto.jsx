import person from "../../assets/images/about_us/person.jpg";
import part from "../../assets/images/about_us/parts.jpg";

const AboutPhoto = () => {
  return (
    <div className="relative">
      <img
        className="object-cover rounded-xl lg:max-w-[460px] h-[473px]"
        src={person}
        alt="Person"
      />
      <img
        className="object-cover border-[10px] lg:max-w-[327px] w-1/2 lg:w-full h-1/2 lg:h-[332px] border-white rounded-xl absolute -bottom-1/4 -right-2 lg:bottom-0 lg:right-0 lg:translate-x-1/4 lg:translate-y-1/4"
        src={part}
        alt="Part"
      />
    </div>
  );
};

export default AboutPhoto;
