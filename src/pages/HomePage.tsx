import { Link } from 'react-router-dom';
import { 
  BuildingOfficeIcon, 
  CubeIcon, 
  DocumentTextIcon, 
  ClockIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/button';
import { WikiCard } from '@/components/wiki/WikiCard';

const featuredPages = [
  {
    title: 'About Samos Global Technologies',
    excerpt: 'Learn about our company mission, vision, and core values. Founded in 2010, we are a leading technology company specializing in innovative solutions for enterprise clients.',
    href: '/about',
    category: 'Company',
    lastModified: 'Updated 2 days ago',
    author: 'Admin'
  },
  {
    title: 'Product Overview',
    excerpt: 'Comprehensive guide to all Samos products and services. From cloud solutions to enterprise software, discover how our products can transform your business.',
    href: '/products', 
    category: 'Products',
    lastModified: 'Updated 1 week ago',
    author: 'Product Team'
  },
  {
    title: 'Developer Documentation',
    excerpt: 'Technical documentation, API references, and integration guides for developers working with Samos technologies and platforms.',
    href: '/docs',
    category: 'Technical',
    lastModified: 'Updated 3 days ago',
    author: 'Engineering'
  }
];

const quickLinks = [
  { name: 'Company History', href: '/history', icon: ClockIcon },
  { name: 'Team Directory', href: '/team', icon: BuildingOfficeIcon },
  { name: 'Product Catalog', href: '/products', icon: CubeIcon },
  { name: 'Documentation', href: '/docs', icon: DocumentTextIcon },
];

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-subtle border-b border-border">
        <div className="container py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Samos Wiki
              <span className="block text-2xl font-normal text-muted-foreground mt-2">
                Knowledge Base & Documentation
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Welcome to the centralized knowledge base for Samos Global Technologies. 
              Find comprehensive information about our company, products, services, and technical documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="wiki-button-primary">
                <MagnifyingGlassIcon className="mr-2 h-5 w-5" />
                Search Wiki
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">
                  Learn About Samos
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-12">
            {/* Featured Pages */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">Featured Pages</h2>
                <Link 
                  to="/all-pages" 
                  className="text-sm text-primary hover:underline flex items-center gap-1"
                >
                  View all pages
                  <ArrowRightIcon className="h-3 w-3" />
                </Link>
              </div>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {featuredPages.map((page, index) => (
                  <WikiCard key={index} {...page} />
                ))}
              </div>
            </section>

            {/* Recent Activity */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {[
                  { page: 'Product Updates', action: 'edited', time: '2 hours ago', user: 'Sarah Chen' },
                  { page: 'API Documentation', action: 'created', time: '1 day ago', user: 'Dev Team' },
                  { page: 'Company Policies', action: 'updated', time: '3 days ago', user: 'HR Team' },
                  { page: 'Team Directory', action: 'edited', time: '1 week ago', user: 'Admin' },
                ].map((activity, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-4 bg-card rounded-lg border border-border"
                  >
                    <div>
                      <p className="font-medium">
                        <Link to="#" className="wiki-link">{activity.page}</Link>
                        <span className="text-muted-foreground ml-2">was {activity.action}</span>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        by {activity.user} • {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <section>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors group"
                  >
                    <link.icon className="h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" />
                    <span className="text-sm group-hover:text-accent-foreground">{link.name}</span>
                  </Link>
                ))}
              </div>
            </section>

            <section>
              <h3 className="font-semibold mb-4">Statistics</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total Pages</span>
                  <span className="font-medium">247</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Contributors</span>
                  <span className="font-medium">34</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">This Week</span>
                  <span className="font-medium">12 edits</span>
                </div>
              </div>
            </section>

            <section className="p-4 bg-wiki-blue-light rounded-lg">
              <h3 className="font-semibold text-wiki-blue mb-2">Need Help?</h3>
              <p className="text-sm text-wiki-blue mb-3">
                Can't find what you're looking for? Contact our support team.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Contact Support
              </Button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}