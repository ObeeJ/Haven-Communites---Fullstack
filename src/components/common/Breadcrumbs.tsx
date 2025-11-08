import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

/**
 * Breadcrumbs Component
 * Used for navigation hierarchy display
 * @example
 * <Breadcrumbs items={[
 *   { label: 'Home', href: '/' },
 *   { label: 'Properties', href: '/properties' },
 *   { label: 'Modern Apartment', isActive: true }
 * ]} />
 */
export const Breadcrumbs: FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav
      className="flex items-center gap-2 text-sm mb-6 px-4 py-2 bg-gray-50 rounded-lg"
      aria-label="Breadcrumb"
    >
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.href ? (
            <Link
              to={item.href}
              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span
              className={
                item.isActive
                  ? 'font-semibold text-gray-900'
                  : 'text-gray-600'
              }
            >
              {item.label}
            </span>
          )}
          {index < items.length - 1 && (
            <ChevronRight size={16} className="text-gray-400" />
          )}
        </div>
      ))}
    </nav>
  );
};
