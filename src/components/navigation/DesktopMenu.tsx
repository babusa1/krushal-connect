
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { navigationMenu } from "@/config/navigationMenu";

interface DesktopMenuProps {
  onNavigate: (href: string) => void;
}

const DesktopMenu = ({ onNavigate }: DesktopMenuProps) => {
  return (
    <NavigationMenuList className="flex-1 justify-end">
      {navigationMenu.map((section) => (
        <NavigationMenuItem key={section.title}>
          <NavigationMenuTrigger className="bg-transparent hover:bg-[#E5DEFF] data-[state=open]:bg-[#E5DEFF] text-[#6E59A5]">
            {section.title}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[500px] p-4 md:grid-cols-2 bg-white rounded-lg shadow-lg">
              <div className="mb-3 text-sm font-medium text-[#7E69AB]">
                {section.title}
              </div>
              <ul className="grid gap-3 md:grid-cols-2">
                {section.items.map((item) => (
                  <li key={item.title}>
                    <NavigationMenuLink asChild>
                      <button
                        onClick={() => onNavigate(item.href)}
                        className={cn(
                          "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors w-full text-left",
                          "hover:bg-[#E5DEFF] hover:text-[#9b87f5]",
                          "focus:bg-[#E5DEFF] focus:text-[#9b87f5]",
                          "group"
                        )}
                      >
                        <div className="text-sm font-medium leading-none text-[#6E59A5] group-hover:text-[#9b87f5]">
                          {item.title}
                        </div>
                        {item.description && (
                          <p className="mt-2 text-xs leading-relaxed text-gray-500 line-clamp-2 group-hover:text-[#7E69AB]">
                            {item.description}
                          </p>
                        )}
                      </button>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  );
};

export default DesktopMenu;

