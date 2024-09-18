const Nutrition = () => {
  return (
    <div>
      <h1 className="text-Brown-800 text-4xl font-titles py-8 font-semibold">
        Nutrition
      </h1>
      <p className="pb-4">The table below shows nutritional values per serving without the additional fillings.</p>
     <table className="w-full ">
      <tr className="border-b-[1px] border-Stone-150">
        <td className="pl-[5%] w-[50%]">Calories</td>
        <td className="text-Brown-800 font-bold py-2">277kcal</td>
      </tr>
      <tr className="border-b-[1px] border-Stone-150 ">
        <td className="pl-[5%] w-[50%]">Carbs</td>
        <td className="text-Brown-800 font-bold py-2">0g</td>
      </tr>
      <tr className="border-b-[1px] border-Stone-150 ">
        <td className="pl-[5%] w-[50%]">Protein</td>
        <td className="text-Brown-800 font-bold py-2">20g</td>
      </tr>
      <tr>
        <td className="pl-[5%] w-[50%]">Fat</td>
        <td className="text-Brown-800 font-bold">22g</td>
      </tr>
    </table>
    </div>
  )
}

export default Nutrition
