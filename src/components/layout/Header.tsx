import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navigation = [
  { name: 'Главная', path: '/' },
  { name: 'Специальности', path: '/specialties' },
  { name: 'Приемная комиссия', path: '/admission' },
  { name: 'Новости', path: '/news' },
  { name: 'Контакты', path: '/contacts' },
];

export default function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
              <Icon name="GraduationCap" className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground">УНИВЕРСИТЕТ</span>
              <span className="text-xs text-muted-foreground">Образование будущего</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={location.pathname === item.path ? 'default' : 'ghost'}
                  className="text-sm font-medium"
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <Link to="/apply">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Подать документы
                <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Icon name="Menu" className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button
                      variant={location.pathname === item.path ? 'default' : 'ghost'}
                      className="w-full justify-start text-base"
                    >
                      {item.name}
                    </Button>
                  </Link>
                ))}
                <Link to="/apply" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold mt-4">
                    Подать документы
                    <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
