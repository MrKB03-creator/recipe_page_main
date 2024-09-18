const Instructions = () => {
  return (
    <div>
      <h1 className="text-Brown-800 text-4xl font-titles py-8 font-semibold">
        Instructions
      </h1>
      <ol className="list-decimal marker:text-Brown-800 marker:font-bold ml-6">
        <li className="pl-6 pb-2">
          <span className="text-Stone-800 font-bold">Beat the eggs</span>: In a
          bowl, beat the eggs with a pinch of salt and pepper until they are
          well mixed. You can add a tablespoon of water or milk for a fluffier
          texture.
        </li>
        <li className="pl-6 pb-2">
          <span className="text-Stone-800 font-bold">Heat the pan</span>: Place
          a non-stick frying pan over medium heat and add butter or oil.
        </li>
        <li className="pl-6 pb-2">
          <span className="text-Stone-800 font-bold">Cook the omelette</span> :
          Once the butter is melted and bubbling, pour in the eggs. Tilt the pan
          to ensure the eggs evenly coat the surface.
        </li>
        <li className="pl-6 pb-2">
          <span className="text-Stone-800 font-bold">
            Add fillings (optional)
          </span>
          : When the eggs begin to set at the edges but are still slightly runny
          in the middle, sprinkle your chosen fillings over one half of the
          omelette.
        </li>
        <li className="pl-6 pb-2">
          <span className="text-Stone-800 font-bold">Fold and serve</span>: As
          the omelette continues to cook, carefully lift one edge and fold it
          over the fillings. Let it cook for another minute, then slide it onto
          a plate.
        </li>
        <li className="pl-6 pb-2">
          <span className="text-Stone-800 font-bold">Enjoy</span>: Serve hot,
          with additional salt and pepper if needed.
        </li>
      </ol>
    </div>
  );
};

export default Instructions;
