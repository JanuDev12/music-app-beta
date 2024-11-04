import "./main.css";
import reactLogo from "./assets/react.svg";
import FarmLogo from "./assets/logo.png";

export function Main() {

  return (
    <>
      <div className="flex-grow w-full layout grid">
        <header className=" header p-5 text-white"> Header</header>
        <aside className="sidebar  w-28 text-white"> Sidebar</aside>

        <main className=" body bg-green-500   rounded-lg">
          {/* Main Content */}
          APP
        </main>
      </div>
      {/* Player */}
      <div className="fixed z-10  bottom-0 right-0 left-0 bg-red-500 p-3">
        Player
      </div>
    </>
  );
}
