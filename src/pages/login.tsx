import { Link } from 'react-router-dom'
import '../App.css'

export default function Login(){
    return(
        <div className="App">
            <h1 style={{color:"#159539"}}>Welcome to Mealize</h1>
            <br/>
            <div className="w-full max-w-xs" style={{margin:'0 auto'}}>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 content-center">
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Username
                </label>
                <input  style={{backgroundColor:"#fefefe"}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                </div>
                <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                </label>
                <input  style={{backgroundColor:"#fefefe"}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                <p className="text-red-500 text-xs italic"></p>
                </div>
                <div className="flex items-center justify-between">
                <Link to="/first-login"><button style={{backgroundColor:"#159539"}} className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Sign In
                </button></Link>
                <a style={{color:"#159539"}} className="inline-block align-baseline font-bold text-sm" href="#">
                    Forgot Password?
                </a>
                </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
                &copy;2022 Mealize. All rights reserved.
            </p>
            </div>
        </div>
    )
}