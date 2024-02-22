const Container = ({ children }: any) => {
  return (
    <section className="w-screen flex justify-center items-center bg-black-gray lg:w-2/3">
      {children}
    </section>
  );
};

export default Container;
