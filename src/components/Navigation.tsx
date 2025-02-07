
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
          href: "/ai-insights",
          description: "Intelligent insights and analytics for enhanced decision making"
        },
        { 
          title: "AI powered Agents", 
          href: "#ai-agents",
          description: "Intelligent agent solutions for enhanced operations"
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
    <div 
      className={`fixed inset-0 bg-white z-[9999] transition-transform duration-300 ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 border-b bg-white">
        <div className="w-24">
          <img
            src="/lovable-uploads/9114eb0c-c8f9-4859-ac25-dfea74a21dbc.png"
            alt="Krushal Logo"
            className="h-8 w-auto"
          />
        </div>
        <button 
          onClick={toggleMenu} 
          className="p-2 rounded-full hover:bg-[#E5DEFF] transition-colors"
          aria-label="Close menu"
        >
          <X className="h-6 w-6 text-[#6E59A5]" />
        </button>
      </div>
      <div className="mt-20 h-[calc(100vh-5rem)] overflow-y-auto pb-20">
        <div className="p-4 space-y-8">
          {menu.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-lg font-semibold text-[#6E59A5] px-2">
                {section.title}
              </h3>
              <div className="space-y-2">
                {section.items.map((item) => (
                  <button
                    key={item.title}
                    onClick={() => handleNavigation(item.href)}
                    className="w-full text-left p-3 rounded-lg hover:bg-[#E5DEFF] transition-colors group"
                  >
                    <span className="text-[#6E59A5] group-hover:text-[#9b87f5] font-medium">
                      {item.title}
                    </span>
                    {item.description && (
                      <p className="text-sm text-gray-500 mt-2 group-hover:text-[#7E69AB] line-clamp-2">
                        {item.description}
                      </p>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <NavigationMenu className="fixed top-0 left-0 right-0 z-[100] bg-white border-b shadow-sm">
      <div className="container mx-auto py-3 flex justify-between items-center">
        <div className="w-32">
          <img
            src="/lovable-uploads/9114eb0c-c8f9-4859-ac25-dfea74a21dbc.png"
            alt="Krushal Logo"
            className="h-8 w-auto"
          />
        </div>
        {isMobile ? (
          <button 
            onClick={toggleMenu} 
            className="p-2 rounded-full hover:bg-[#E5DEFF] transition-colors"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6 text-[#6E59A5]" />
          </button>
        ) : (
          <NavigationMenuList className="flex-1 justify-end">
            {menu.map((section) => (
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
                              onClick={() => handleNavigation(item.href)}
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
        )}
        {isMobile && <MobileMenu />}
      </div>
    </NavigationMenu>
  );
};

export default Navigation;

