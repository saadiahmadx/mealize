
export interface Meal{
    label: string
    components: string[]
}
export interface Day{
    label: string
    components: Meal[]
}

const refreshIcon = <svg className="h-4 w-4 m-2"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -5v5h5" />  <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 5v-5h-5" /></svg>

export const SimpleMeal = (props:Meal) => {
    return(<>
        <div className="max-w-sm min-w-fit rounded overflow-hidden shadow-lg">
            <div className="flex flex-row justify-between bg-[#159539] text-white p-3">
                <>
                <p className="m-1">{props.label}</p>
                </>
            </div>
            {
            props.components.map((food_item)=>{
                return (
                <div className="w-40 px-4 py-2 flex flex-row justify-between">
                    <div className="text-left">{food_item}</div>
                </div>
                );
            })
            }
            <hr/>
        </div>
    </>);
}

export const SimpleDay = (props:Day) => {
    return(<>
        <div className="p-5 flex flex-col justify-between gap-5 overflow-hidden ">
            <h3><strong>{props.label}</strong></h3>
            {props.components.map((meal) => {return SimpleMeal(meal)})}
        </div>
    </>);
}