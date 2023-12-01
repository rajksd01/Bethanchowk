import LogoutComponent from "./Logout";
import DownloadButton from "./DownloadButton.jsx";
function Header() {
  return (
    <div className="flex justify-between  rounded-lg shadow-lg ">
      <div className=" px-10 py-2">
        <img src="/logo_bgp.png" alt="logo" className="h-24" />
        <h2 className="text-3xl "></h2>
      </div>
      <h2 className="text-4xl font-bold text-red-600 py-8">
        बेथानचोक गाउँपालिकाको तथ्यांक
      </h2>
      <div className="flex">
        <div className="flex ">
       <div className="py-8"> <DownloadButton  /></div>
        <div className="p-6"> <LogoutComponent /></div> 
        </div>
        <img src="/nepal-flag.gif" alt="nepal-flag" className="h-24 px-10" />
      </div>
    </div>
  );
}

export default Header;
