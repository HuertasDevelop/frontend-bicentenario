"use client";

import { useLogoutMutation } from "@/redux/features/authApiSlice";
import { logout as setLogout } from "@/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  //   const { navigation } = useAppSelector((state) => state.config);
  const segment = useSelectedLayoutSegment();
  const pathname = usePathname();
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();

  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const handleLogout = () => {
    logout(undefined)
      .unwrap()
      .then(() => {
        dispatch(setLogout());
      });
  };
  const isSelected = (path: string) => (pathname === path ? true : false);
  const authLinks = (isMobile: boolean) => (
    <div className="flex flex-col space-y-2">
      <SidebarLink
        isSelected={isSelected("/dashboard")}
        isMobile={isMobile}
        href="/dashboard"
      >
        Inicio
      </SidebarLink>
      <SidebarLink
        isSelected={isSelected("/Horarios")}
        isMobile={isMobile}
        href="/horarios"
      >
        Horarios
      </SidebarLink>
      <SidebarLink isMobile={isMobile} onClick={handleLogout}>
        Logout
      </SidebarLink>
    </div>
  );
  return (
    <ul role="list" className="-mx-2 space-y-1 ">
      {authLinks(false)}
    </ul>
  );
};

export default Sidebar;
