
import { X } from "lucide-react";
import { navigationMenu } from "@/config/navigationMenu";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (href: string) => void;
}

const MobileMenu = ({ isOpen, onClose, onNavigate }: MobileMenuProps) => {
  return (
    <div 
      className={`fixed inset-0 bg-white z-[9999] transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
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
          onClick={onClose} 
          className="p-2 rounded-full hover:bg-[#E5DEFF] transition-colors"
          aria-label="Close menu"
        >
          <X className="h-6 w-6 text-[#6E59A5]" />
        </button>
      </div>
      <div className="mt-20 h-[calc(100vh-5rem)] overflow-y-auto pb-20">
        <div className="p-4 space-y-8">
          {navigationMenu.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-lg font-semibold text-[#6E59A5] px-2">
                {section.title}
              </h3>
              <div className="space-y-2">
                {section.items.map((item) => (
                  <button
                    key={item.title}
                    onClick={() => onNavigate(item.href)}
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
};

export default MobileMenu;

