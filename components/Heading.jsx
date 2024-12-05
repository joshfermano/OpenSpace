const Heading = ({ title }) => {
  return (
    <section className="mb-8">
      <h1 className="text-3xl font-bold tracking-tight text-black-soft">
        {title}
      </h1>
      <div className="h-1 w-20 bg-black-soft mt-2"></div>
    </section>
  );
};
export default Heading;
