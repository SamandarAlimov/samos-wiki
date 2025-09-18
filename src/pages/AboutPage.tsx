import { Link } from 'react-router-dom';
import { 
  BuildingOfficeIcon, 
  GlobeAltIcon, 
  UserGroupIcon, 
  TrophyIcon,
  ArrowLeftIcon 
} from '@heroicons/react/24/outline';

export default function AboutPage() {
  return (
    <div className="animate-fade-in">
      {/* Breadcrumb */}
      <div className="border-b border-border bg-muted/30">
        <div className="container py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground flex items-center gap-1">
              <ArrowLeftIcon className="h-3 w-3" />
              Home
            </Link>
            <span>/</span>
            <span>About Samos</span>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-4xl">
          <header className="mb-12">
            <h1 className="text-4xl font-bold mb-4">About Samos Global Technologies</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Founded in 2010, Samos Global Technologies Inc. is a leading technology company 
              specializing in innovative enterprise solutions and cutting-edge software development.
            </p>
          </header>

          <div className="prose prose-slate max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <BuildingOfficeIcon className="h-6 w-6 text-primary" />
                Our Mission
              </h2>
              <p className="text-lg mb-6">
                At Samos Global Technologies, our mission is to empower businesses with innovative 
                technology solutions that drive efficiency, growth, and digital transformation. 
                We believe in creating software that not only meets today's needs but anticipates 
                tomorrow's challenges.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="wiki-card">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <GlobeAltIcon className="h-5 w-5 text-primary" />
                    Global Reach
                  </h3>
                  <p>
                    Serving clients across 25+ countries with 24/7 support and 
                    localized solutions for diverse markets.
                  </p>
                </div>
                <div className="wiki-card">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <UserGroupIcon className="h-5 w-5 text-primary" />
                    Expert Team
                  </h3>
                  <p>
                    Over 500 skilled professionals including engineers, designers, 
                    and consultants with decades of combined experience.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Our Story</h2>
              <p className="mb-4">
                Samos Global Technologies was founded in Uzbekistan with a vision to bridge 
                the gap between traditional business practices and modern technology. What started 
                as a small software development firm has grown into a multinational corporation 
                with offices in Tashkent, Dubai, and San Francisco.
              </p>
              
              <p className="mb-6">
                Our journey began when our founders recognized the need for more intuitive, 
                scalable business software. Since then, we've developed over 200 successful 
                projects and helped more than 1,000 companies modernize their operations.
              </p>

              <div className="bg-gradient-subtle p-6 rounded-lg border border-border">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <TrophyIcon className="h-5 w-5 text-primary" />
                  Key Achievements
                </h3>
                <ul className="space-y-2">
                  <li>• ISO 27001 certified for information security management</li>
                  <li>• Winner of "Tech Innovation Award 2023" by Central Asia Tech Forum</li>
                  <li>• Trusted partner of Fortune 500 companies</li>
                  <li>• 99.9% uptime SLA maintained across all services</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Innovation</h3>
                  <p>
                    We constantly push boundaries and explore new technologies to 
                    deliver cutting-edge solutions.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Quality</h3>
                  <p>
                    Every product we deliver meets the highest standards of quality, 
                    performance, and reliability.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Transparency</h3>
                  <p>
                    We believe in open communication and honest partnerships with 
                    our clients and team members.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Sustainability</h3>
                  <p>
                    We're committed to building sustainable technology that benefits 
                    both businesses and the environment.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="wiki-card">
                  <h3 className="font-semibold mb-2">Headquarters</h3>
                  <p className="text-sm text-muted-foreground">
                    Tashkent, Uzbekistan<br />
                    +998 (71) 123-4567<br />
                    info@samos.uz
                  </p>
                </div>
                <div className="wiki-card">
                  <h3 className="font-semibold mb-2">Middle East Office</h3>
                  <p className="text-sm text-muted-foreground">
                    Dubai, UAE<br />
                    +971 (4) 123-4567<br />
                    me@samos.uz
                  </p>
                </div>
                <div className="wiki-card">
                  <h3 className="font-semibold mb-2">US Office</h3>
                  <p className="text-sm text-muted-foreground">
                    San Francisco, CA<br />
                    +1 (415) 123-4567<br />
                    us@samos.uz
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}