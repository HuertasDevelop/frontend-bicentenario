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

export default function NavLink({
  isSelected,
  isMobile,
  isBanner,
  href,
  children,
  ...rest
}: Props) {
  const className = cn(
    rest.className,
    "text-gray-900 uppercase  font-bold p-2 border-b ",
    {
      "border-b-2 border-primary": isSelected,
      "text-gray-300 hover:border-b-2  hover:border-primary border-transparent":
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
