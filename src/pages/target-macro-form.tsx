export default function TargetMacroForm(){
    return(
        <div className="App">
            <h1 style={{color:"#159539"}}>Enter Your Target Macros</h1>
            <br/>
            <div className="w-full max-w-xs" style={{margin:'0 auto'}}>

            <form>
                <div className="grid mb-6 md:grid-cols-2">
                    <label style={{marginTop:'20px', textAlign:'left'}} className="text-gray-700 text-sm font-bold mb-2">
                        Protein
                    </label>
                    <input style={{marginTop:'5px'}} type="number" id="protein" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                    <label style={{marginTop:'20px', textAlign:'left'}} className="text-gray-700 text-sm font-bold mb-2">
                        Fat
                    </label>
                    <input style={{marginTop:'5px'}} type="number" id="fat" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                    <label style={{marginTop:'20px', textAlign:'left'}} className="text-gray-700 text-sm font-bold mb-2">
                        Carbohydrates
                    </label>
                    <input style={{marginTop:'5px'}} type="number" id="carbohydrates" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                </div>
                <button style={{backgroundColor:"#159539"}} className="text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline" type="button">
                    Submit Macros
                </button>

            </form>
            <br/>
            <p className="text-center text-gray-500 text-xs">
                &copy;2022 Mealize. All rights reserved.
            </p>
            </div>
        </div>
    )
}