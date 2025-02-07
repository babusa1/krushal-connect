
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";

const Navigation = () => {
  const menu = [
    {
      title: "Industries",
      items: [
        { title: "Dairy Operations", href: "#dairy" },
        { title: "Insurance Services", href: "#insurance" },
        { title: "Financial Solutions", href: "#finance" },
        { title: "Agritech", href: "#agritech" },
      ],
    },
    {
      title: "Services",
      items: [
        { title: "Digital Transformation", href: "#digital" },
        { title: "Data Analytics", href: "#analytics" },
        { title: "Process Automation", href: "#automation" },
        { title: "Rural Tech Solutions", href: "#rural-tech" },
      ],
    },
    {
      title: "Products & Solutions",
      items: [
        { title: "First Mile as a Service", href: "#first-mile" },
        { title: "Tech Solutions at SPEED", href: "#tech-solutions" },
        { title: "Rural Insurance Platform", href: "#insurance-platform" },
        { title: "Digital Financial Services", href: "#financial-services" },
      ],
    },
    {
      title: "About",
      items: [
        { title: "About Krushal - What we do", href: "#about" },
        { title: "Our Leadership", href: "#leadership" },
        { title: "Careers", href: "#careers" },
      ],
    },
  ];

  return (
    <NavigationMenu className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto py-2 flex justify-between items-center">
        <NavigationMenuList>
          {menu.map((section) => (
            <NavigationMenuItem key={section.title}>
              <NavigationMenuTrigger>{section.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {section.items.map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink asChild>
                        <a
                          href={item.href}
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          )}
                        >
                          <div className="text-sm font-medium leading-none">{item.title}</div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
        <div className="w-32">
          <img
            src="/lovable-uploads/9114eb0c-c8f9-4859-ac25-dfea74a21dbc.png"
            alt="Krushal Logo"
            className="h-8 w-auto"
          />
        </div>
      </div>
    </NavigationMenu>
  );
};

export default Navigation;
