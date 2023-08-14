import Link from "next/link";
import cn from "classnames";

interface Props {
  isSelected?: boolean;
  isMobile?: boolean;
  isBanner?: boolean;
  href?: string;
  children: React.ReactNode;
  [rest: string]: any;
}

export default function SidebarLink({
  isSelected,
  isMobile,
  isBanner,
  href,
  children,
  ...rest
}: Props) {
  const className = cn(
    rest.className,
    "text-gray-500 hover:text-white hover:bg-indigo-700 group flex gap-x-3 rounded-md px-8 py-2 text-sm leading-6 ",
    {
      "bg-indigo-700 text-white": isSelected,
      "text-gray-300 hover:bg-gray-700 hover:text-white":
        !isSelected && !isBanner,
      "block text-base": isMobile,
      "text-sm": !isMobile,
      "text-gray-300": isBanner,
    }
  );

  if (!href) {
    return (
      <span className={className} role="button" onClick={rest.onClick}>
        {children}
      </span>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
