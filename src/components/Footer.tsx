import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-muted mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="GraduationCap" className="h-6 w-6 text-primary" />
              <span className="font-bold text-primary">Образовательный центр</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Качественное образование для вашего будущего
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary">Главная</Link></li>
              <li><Link to="/specialties" className="text-muted-foreground hover:text-primary">Специальности</Link></li>
              <li><Link to="/admission" className="text-muted-foreground hover:text-primary">Приемная комиссия</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Информация</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/news" className="text-muted-foreground hover:text-primary">Новости</Link></li>
              <li><Link to="/contacts" className="text-muted-foreground hover:text-primary">Контакты</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Icon name="Phone" className="h-4 w-4" />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Mail" className="h-4 w-4" />
                <span>info@edu-center.ru</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="MapPin" className="h-4 w-4" />
                <span>г. Москва, ул. Примерная, 1</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Образовательный центр. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
