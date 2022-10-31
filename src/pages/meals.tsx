import { SimpleMeal, Meal, FoodItem } from "../components/single_meal"


export default function Meals(){
    let foods:FoodItem[] = [{name:"Broccoli", quantity: 2},{name:"Cheese", quantity: 10},{name:"Chicken", quantity: 20}];
    let meal:Meal = {day: "Tuesday (10/19)", components: foods}


    return(
        <div className="flex flex-col">

            <div className="p-5 flex flex-row justify-between gap-5 overflow-hidden ">
                {SimpleMeal(meal)}
                {SimpleMeal(meal)}
                {SimpleMeal(meal)}
            </div>

            <br/>

            <button className="text-white bg-[#159539] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Generate new week
            </button>

        </div>

    )
}