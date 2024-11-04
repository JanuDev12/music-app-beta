import "./main.css";
import reactLogo from "./assets/react.svg";
import FarmLogo from "./assets/logo.png";

export function Main() {

  return (
    <>
      <div className="h-screen w-full layout grid gap-2">
        <header className=" header bg-red-400"> Header</header>
        <aside className=" sidebar bg-blue-500"> Sidebar</aside>

        <main className=" body bg-green-500">
          {/* Main Content */}
          APP
        </main>
      </div>
    </>
  );
}
