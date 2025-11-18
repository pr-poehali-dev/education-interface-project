import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-secondary border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <Icon name="GraduationCap" className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">УНИВЕРСИТЕТ</span>
                <span className="text-xs text-muted-foreground">Образование будущего</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Высшее образование международного уровня. Готовим профессионалов для успешной карьеры.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Главная</Link></li>
              <li><Link to="/specialties" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Специальности</Link></li>
              <li><Link to="/admission" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Приемная комиссия</Link></li>
              <li><Link to="/news" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Новости</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Icon name="MapPin" className="h-4 w-4 mt-0.5 shrink-0" />
                <span>г. Москва, ул. Академическая, д. 1</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Phone" className="h-4 w-4 shrink-0" />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Mail" className="h-4 w-4 shrink-0" />
                <span>info@university.ru</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">Мы в соцсетях</h3>
            <div className="flex space-x-3">
              <a href="#" className="h-9 w-9 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Icon name="Facebook" className="h-4 w-4 text-primary" />
              </a>
              <a href="#" className="h-9 w-9 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Icon name="Instagram" className="h-4 w-4 text-primary" />
              </a>
              <a href="#" className="h-9 w-9 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Icon name="Youtube" className="h-4 w-4 text-primary" />
              </a>
              <a href="#" className="h-9 w-9 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Icon name="Linkedin" className="h-4 w-4 text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Университет. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
