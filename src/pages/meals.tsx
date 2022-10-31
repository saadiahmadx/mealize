import { SimpleDay, Meal, Day } from "../components/single_meal"
import axios from "axios";
import { useState, useEffect } from "react";


export default function Meals(){
    const [days, setDays] = useState<Day[]>();

    const getMealPlan = async () => {
        console.log("Geenerating meal plan...")
        let response = await axios.get("https://ec2-44-203-126-101.compute-1.amazonaws.com:5000",{params:{protein:50, carbs: 50, fats: 50}})
        return response.data
    }

    const updateWeek = async () => {
        getMealPlan().then((res)=>{
            let newDays:Day[] = [];
            res.forEach((day:any)=>{
                let breakfast:Meal = {label: "Breakfast", components: day.breakfast}
                let lunch:Meal = {label: "Lunch", components: day.lunch}
                let dinner:Meal = {label: "Dinner", components: day.dinner}
                let dayOfWeek:Day = {label: "Test", components: [breakfast,lunch,dinner]}
                newDays.push(dayOfWeek)
            })
            setDays(newDays)
        })
    }

    useEffect(()=>{
        updateWeek()
    },[])

    useEffect(()=>{console.log(days)},[days])

    return(
        <div className="flex flex-col">

            <div className="p-5 flex flex-row justify-between gap-1 overflow-hidden ">
                {days?
                <>
                {days.map((day)=>{
                    return SimpleDay(day)
                })}
                </>
                :'Loading...'}
            </div>

            <br/>

            <button onClick={updateWeek} className="text-white bg-[#159539] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Generate new week
            </button>

        </div>

    )
}