import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon, Bars3Icon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  onMenuToggle: () => void;
  isDark: boolean;
  onThemeToggle: () => void;
}

export const Header = ({ onMenuToggle, isDark, onThemeToggle }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={onMenuToggle}
          >
            <Bars3Icon className="h-5 w-5" />
          </Button>
          
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-hero text-white font-bold text-sm">
              S
            </div>
            <div className="hidden sm:block">
              <span className="font-semibold text-lg">Samos Wiki</span>
              <div className="text-xs text-muted-foreground">Knowledge Base</div>
            </div>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search wiki..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="wiki-search max-w-sm"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={onThemeToggle}
              className="h-8 w-8"
            >
              {isDark ? (
                <SunIcon className="h-4 w-4" />
              ) : (
                <MoonIcon className="h-4 w-4" />
              )}
            </Button>
            
            <Button variant="outline" size="sm">
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};