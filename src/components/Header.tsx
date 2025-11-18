import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

export default function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/home', label: 'Главная' },
    { path: '/specialties', label: 'Специальности' },
    { path: '/admission', label: 'Приемная комиссия' },
    { path: '/news', label: 'Новости' },
    { path: '/contacts', label: 'Контакты' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/home" className="flex items-center space-x-2">
            <Icon name="GraduationCap" className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">Образовательное учреждение</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-foreground/60'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button size="sm" asChild>
              <Link to="/admission">Подать документы</Link>
            </Button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? 'X' : 'Menu'} className="h-6 w-6" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-foreground/60'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button size="sm" className="w-full" asChild>
              <Link to="/admission">Подать документы</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}