import { useEffect, useState } from "react";
import { UAParser } from "ua-parser-js";
import { CiWarning } from "react-icons/ci";
import Header from "./Header";
  
export default function Ficha() {
    const [error, setError] = useState(null);
    useEffect(() => {
        const parser = new UAParser();
        const device = parser.getDevice();
        if (device.model === "Iphone") {
            setError("this website is not supported by Apple");
        }
        else {
            setError("this website does not support this device");
        }
    }, [])
    return (
        <div className="flex flex-col gap-8">
            <Header/>
        <div className="flex flex-row gap-2 h-screen w-screen justify-center">
            <CiWarning size={50} fontWeight={"bold"}/>
        <div className="flex flex-col">
        <h1 className="w-full font-mono font-bold">GoogleWS Error 403</h1>
        <p className="font-mono font-thin">{error}</p>
        </div>

        </div>
        </div>

    )
}