"use client";

import { useLogoutMutation } from "@/redux/features/authApiSlice";
import { logout as setLogout } from "@/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import SidebarLink from "./SidebarLink";

const SecundaryNav = () => {
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
        isSelected={isSelected("/dashboard/term")}
        isMobile={isMobile}
        href="/dashboard/term"
      >
        Privacidad
      </SidebarLink>
    </div>
  );
  return (
    <ul role="list" className="-mx-2 space-y-1 ">
      {authLinks(false)}
    </ul>
  );
};

export default SecundaryNav;
