import { Link } from 'react-router-dom';
import { ClockIcon, UserIcon } from '@heroicons/react/24/outline';

interface WikiCardProps {
  title: string;
  excerpt: string;
  href: string;
  lastModified?: string;
  author?: string;
  category?: string;
}

export const WikiCard = ({ 
  title, 
  excerpt, 
  href, 
  lastModified, 
  author, 
  category 
}: WikiCardProps) => {
  return (
    <Link to={href}>
      <div className="wiki-card group cursor-pointer h-full">
        <div className="space-y-3">
          {category && (
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-wiki-blue-light px-2.5 py-0.5 text-xs font-medium text-wiki-blue">
                {category}
              </span>
            </div>
          )}
          
          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-sm text-muted-foreground line-clamp-3">
            {excerpt}
          </p>
          
          {(lastModified || author) && (
            <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2 border-t border-border">
              {lastModified && (
                <div className="flex items-center gap-1">
                  <ClockIcon className="h-3 w-3" />
                  {lastModified}
                </div>
              )}
              {author && (
                <div className="flex items-center gap-1">
                  <UserIcon className="h-3 w-3" />
                  {author}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};