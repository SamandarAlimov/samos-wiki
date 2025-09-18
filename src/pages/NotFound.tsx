import { Link } from "react-router-dom";
import { HomeIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-muted-foreground">404</h1>
          <h2 className="text-2xl font-semibold">Page Not Found</h2>
          <p className="text-muted-foreground">
            Sorry, we couldn't find the page you're looking for. It may have been moved or deleted.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild>
            <Link to="/">
              <HomeIcon className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/about">
              About Samos
            </Link>
          </Button>
        </div>
        
        <div className="pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Need help finding something? Try using the search bar above.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
