import { logos } from "../../data/logoSection";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function BreadcrumbComponent({ items = [] }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="flex items-center gap-2">
            {index !== 0 && <ChevronRight className="textgray" size={16} />}

            {isLast ? (
              <span className="text-gray font-medium">{item.label}</span>
            ) : (
              <Link to={item.href} className="text-deep-navy">
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}
