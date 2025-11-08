import { FC } from 'react';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
  isActive?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center gap-2 ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {index > 0 && (
            <ChevronRight
              size={16}
              className="text-gray-400"
              aria-hidden="true"
            />
          )}
          {item.href || item.onClick ? (
            <a
              href={item.href}
              onClick={(e) => {
                if (item.onClick) {
                  e.preventDefault();
                  item.onClick();
                }
              }}
              className={`text-sm font-medium transition-colors ${
                item.isActive
                  ? 'text-gray-900 dark:text-white'
                  : 'text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer'
              }`}
              aria-current={item.isActive ? 'page' : undefined}
            >
              {item.label}
            </a>
          ) : (
            <span
              className={`text-sm font-medium ${
                item.isActive
                  ? 'text-gray-900 dark:text-white'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
