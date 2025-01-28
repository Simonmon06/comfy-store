import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <>
      <header>header</header>
      <Outlet />
    </>
  );
}
export default HomeLayout;
