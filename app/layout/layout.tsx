import { Outlet } from "react-router";
 
export default function Layout() {
  return (
    <div>
      <aside>aboutのlayout
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
}