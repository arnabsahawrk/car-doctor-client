import errorPic from "../assets/images/error/Frame.png";

const ErrorPage = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="w-screen h-screen flex flex-col items-center justify-center p-10">
        <img className="size-full object-contain" src={errorPic} alt="404" />
      </div>
    </section>
  );
};

export default ErrorPage;
