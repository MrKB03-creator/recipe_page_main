const Hero = () => {
  return (
    <div className= "my-8">
      <h1 className="font-titles mb-8 text-5xl font-semibold text-Stone-900 max-sm:text-4xl">
        Simple Omelette Recipe
      </h1>
      <p className="text-base font-bod">
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
      <div className="bg-Rose-50 p-8 my-8 rounded-xl">
        <h2 className="text-Rose-800 text-2xl pb-4 font-semibold">Preparation time</h2>
        <ul className="list-disc ml-4 marker:text-Rose-800">
          <li className="pb-3 text-Stone-600 "><span className="text-Stone-800 pl-4 font-bold">Total</span>: Approximately 10 minutes</li>
          <li className="pb-3 text-Stone-600"><span className="text-Stone-800 pl-4 font-bold">Preparation</span>: 5 minutes</li>
          <li className="text-Stone-600"><span className="text-Stone-800 pl-4 font-bold">Cooking</span>: 5 minutes</li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
