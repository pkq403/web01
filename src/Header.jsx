import asisLogo from "/asislogo.png"
export default function Header() {
    return (<div className="flex flex-row justify-between bg-black px-5 py-4 ">
        <img className="object-cover w-20" src={asisLogo}/>
        <div className="flex flex-row gap-2 font-base text-sm text-white items-center">
            <h1>tu cuenta</h1>
            <h1>animales</h1>
            <h1>historial</h1>
        </div>
        </div>);
}