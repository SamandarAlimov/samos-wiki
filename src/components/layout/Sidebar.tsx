import { Link, useLocation } from 'react-router-dom';
import { 
  HomeIcon, 
  BuildingOfficeIcon,
  CubeIcon,
  DocumentTextIcon,
  ClockIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

const navigation = [
  {
    title: 'Main',
    items: [
      { name: 'Home', href: '/', icon: HomeIcon },
      { name: 'About Samos', href: '/about', icon: BuildingOfficeIcon },
      { name: 'Products', href: '/products', icon: CubeIcon },
      { name: 'Documentation', href: '/docs', icon: DocumentTextIcon },
    ]
  },
  {
    title: 'Company',
    items: [
      { name: 'History', href: '/history', icon: ClockIcon },
      { name: 'Team', href: '/team', icon: UserGroupIcon },
      { name: 'Policies', href: '/policies', icon: Cog6ToothIcon },
    ]
  }
];

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const location = useLocation();

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-16 z-50 h-[calc(100vh-4rem)] w-72 transform overflow-y-auto wiki-sidebar transition-transform duration-300 ease-in-out md:relative md:top-0 md:h-[calc(100vh-4rem)] md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="space-y-4 py-6 px-4">
          {navigation.map((section) => (
            <div key={section.title} className="space-y-3">
              <h3 className="px-3 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                {section.title}
              </h3>
              <nav className="space-y-1">
                {section.items.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={onClose}
                      className={cn(
                        "group flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      )}
                    >
                      <item.icon className="mr-3 h-4 w-4 flex-shrink-0" />
                      {item.name}
                      {isActive && (
                        <ChevronRightIcon className="ml-auto h-4 w-4" />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>
          ))}
          
          <div className="border-t border-border pt-4">
            <div className="px-3 py-2">
              <p className="text-xs text-muted-foreground">
                Recent Changes
              </p>
              <div className="mt-2 space-y-1">
                <Link 
                  to="/recent" 
                  className="block text-xs text-primary hover:underline"
                >
                  Product Updates
                </Link>
                <Link 
                  to="/recent" 
                  className="block text-xs text-primary hover:underline"
                >
                  Team Changes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};