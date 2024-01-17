import { PRODUCT_CATEGORIES } from "@/config";
import NavItem from "./NavItem";

const NavItems = () => {
  return (
    <div className="flex gap-4 h-full">
      {PRODUCT_CATEGORIES.map((category, i) => {
        return <NavItem category={category} key={category.value} />;
      })}
    </div>
  );
};

export default NavItems;
