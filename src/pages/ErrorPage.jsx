import errorPic from "../assets/images/error/Frame.png";

const ErrorPage = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="w-full h-[calc(100vh-103px)] flex flex-col items-center justify-center p-10">
        <img className="size-full object-contain" src={errorPic} alt="404" />
      </div>
    </section>
  );
};

export default ErrorPage;
