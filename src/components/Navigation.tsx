
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menu = [
    {
      title: "Services",
      items: [
        { 
          title: "First Mile Solutions",
          href: "/first-mile-solutions",
          description: "Extension Services, Procurement Operations, Field Operations, Risk Management, First Mile Data & Insights"
        },
        { 
          title: "Mobile First Digital", 
          href: "/mobile-first-digital",
          description: "Web, mobile, and voice applications with human-centered design"
        },
        { 
          title: "AI-powered Insights", 
          href: "#ai-insights",
          description: "Intelligent insights and analytics for enhanced decision making"
        },
        { 
          title: "Cloud & Devops", 
          href: "#cloud-devops",
          description: "Modern cloud infrastructure and DevOps practices"
        },
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
      title: "Industries",
      items: [
        { title: "Dairy Operations", href: "#dairy" },
        { title: "Insurance Services", href: "#insurance" },
        { title: "Financial Solutions", href: "#finance" },
        { title: "Agritech", href: "#agritech" },
      ],
    },
    {
      title: "About",
      items: [
        { title: "What we do", href: "#about" },
        { title: "Our Leadership", href: "#leadership" },
        { title: "Careers", href: "#careers" },
      ],
    },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavigation = (href: string) => {
    if (href.startsWith('/')) {
      navigate(href);
    } else {
      window.location.href = href;
    }
    setIsMenuOpen(false);
  };

  const MobileMenu = () => (
    <div className={`fixed inset-0 bg-white z-50 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex justify-between items-center p-4 border-b">
        <div className="w-24">
          <img
            src="/lovable-uploads/9114eb0c-c8f9-4859-ac25-dfea74a21dbc.png"
            alt="Krushal Logo"
            className="h-8 w-auto"
          />
        </div>
        <button onClick={toggleMenu} className="p-2">
          <X className="h-6 w-6 text-[#9b87f5] hover:text-[#7E69AB] transition-colors" />
        </button>
      </div>
      <div className="p-4">
        {menu.map((section) => (
          <div key={section.title} className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-[#6E59A5]">{section.title}</h3>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.title}>
                  <button 
                    onClick={() => handleNavigation(item.href)}
                    className="block w-full text-left p-2 text-gray-600 hover:text-[#9b87f5] hover:bg-[#E5DEFF] rounded-md transition-colors"
                  >
                    {item.title}
                    {item.description && (
                      <span className="block text-xs text-gray-500 mt-1">
                        {item.description}
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <NavigationMenu className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto py-2 flex justify-between items-center">
        <div className="w-32">
          <img
            src="/lovable-uploads/9114eb0c-c8f9-4859-ac25-dfea74a21dbc.png"
            alt="Krushal Logo"
            className="h-8 w-auto"
          />
        </div>
        {isMobile ? (
          <button onClick={toggleMenu} className="p-2">
            <Menu className="h-6 w-6 text-[#9b87f5] hover:text-[#7E69AB] transition-colors" />
          </button>
        ) : (
          <NavigationMenuList className="flex-1 justify-end">
            {menu.map((section) => (
              <NavigationMenuItem key={section.title}>
                <NavigationMenuTrigger className="bg-transparent hover:bg-[#E5DEFF] data-[state=open]:bg-[#E5DEFF] text-[#6E59A5] hover:text-[#9b87f5]">
                  {section.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[500px] p-4 bg-white rounded-lg shadow-lg border border-[#E5DEFF]">
                    <div className="mb-2 text-sm font-medium text-[#7E69AB]">{section.title}</div>
                    <ul className="grid gap-3 md:grid-cols-2">
                      {section.items.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <button
                              onClick={() => handleNavigation(item.href)}
                              className={cn(
                                "block select-none rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 w-full text-left",
                                "hover:bg-[#E5DEFF] hover:text-[#9b87f5]",
                                "focus:bg-[#E5DEFF] focus:text-[#9b87f5]",
                                "group"
                              )}
                            >
                              <div className="text-sm font-medium leading-none group-hover:text-[#9b87f5]">
                                {item.title}
                              </div>
                              {item.description && (
                                <p className="mt-1 text-xs leading-relaxed text-gray-500 line-clamp-2 group-hover:text-[#7E69AB]">
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
        )}
        {isMobile && <MobileMenu />}
      </div>
    </NavigationMenu>
  );
};

export default Navigation;
