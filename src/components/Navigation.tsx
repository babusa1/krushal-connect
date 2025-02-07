
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";
import MobileMenu from "./navigation/MobileMenu";
import DesktopMenu from "./navigation/DesktopMenu";

const Navigation = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavigation = (href: string) => {
    if (href.startsWith('/')) {
      navigate(href);
    } else {
      window.location.href = href;
    }
    setIsMenuOpen(false);
  };

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
          <DesktopMenu onNavigate={handleNavigation} />
        )}
        {isMobile && (
          <MobileMenu 
            isOpen={isMenuOpen}
            onClose={toggleMenu}
            onNavigate={handleNavigation}
          />
        )}
      </div>
    </NavigationMenu>
  );
};

export default Navigation;

