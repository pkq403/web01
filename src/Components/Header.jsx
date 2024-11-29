import asisLogo from "/asislogo.png"
export default function Header() {
    return (<div className="flex flex-row justify-between bg-[#112617] border-b-2 border-black px-5 py-4 ">
        <img className="object-cover w-20" src={asisLogo}/>
        <div className="flex flex-row gap-2 font-base text-sm text-white items-center">
            <h1>tu cuenta</h1>
            <h1>animales</h1>
            <h1>historial</h1>
        </div>
        </div>);
}