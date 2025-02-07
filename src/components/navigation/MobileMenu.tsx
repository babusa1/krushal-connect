
import { X, ChevronDown } from "lucide-react";
import { navigationMenu } from "@/config/navigationMenu";
import { useState } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (href: string) => void;
}

const MobileMenu = ({ isOpen, onClose, onNavigate }: MobileMenuProps) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionTitle)
        ? prev.filter(title => title !== sectionTitle)
        : [...prev, sectionTitle]
    );
  };

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
        <div className="p-4 space-y-4">
          {navigationMenu.map((section) => (
            <div key={section.title} className="border rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full flex justify-between items-center p-4 bg-[#F8F7FF] text-[#6E59A5] font-semibold"
              >
                <span>{section.title}</span>
                <ChevronDown 
                  className={`h-5 w-5 transition-transform ${
                    expandedSections.includes(section.title) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div 
                className={`transition-all duration-300 ${
                  expandedSections.includes(section.title) 
                    ? 'max-h-[500px] opacity-100' 
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <div className="p-2 space-y-1 bg-white">
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
                        <p className="text-sm text-gray-500 mt-1 group-hover:text-[#7E69AB] line-clamp-2">
                          {item.description}
                        </p>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
