
import React from "react";
import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface PageBreadcrumbProps {
  items: {
    label: string;
    path?: string;
  }[];
}

const PageBreadcrumb = ({ items }: PageBreadcrumbProps) => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 pt-20 pb-2">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink onClick={() => navigate('/')}>
              <Home className="h-4 w-4 mr-1" />
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {item.path ? (
                  <BreadcrumbLink onClick={() => navigate(item.path)}>
                    {item.label}
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default PageBreadcrumb;
