import { PRODUCT_CATEGORIES } from "@/config";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Category = (typeof PRODUCT_CATEGORIES)[number];

interface NavItemProps {
  category: Category;
}

const NavItem = ({ category }: NavItemProps) => {
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <Button className="gap-1.5" variant={"ghost"}>
          {category.label}
          <ChevronDown
            className={cn("h-4 w-4 transition-all text-muted-foreground")}
          />
        </Button>
      </div>
    </div>
  );
};

export default NavItem;
