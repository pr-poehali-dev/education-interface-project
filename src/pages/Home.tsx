import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

const stats = [
  { value: '15+', label: 'Лет на рынке образования' },
  { value: '2500+', label: 'Выпускников' },
  { value: '12', label: 'Специальностей' },
  { value: '92%', label: 'Трудоустроенных' },
];

const advantages = [
  {
    icon: 'Award',
    title: 'Государственная аккредитация',
    description: 'Дипломы государственного образца с признанием по всей РФ',
  },
  {
    icon: 'Users',
    title: 'Опытные преподаватели',
    description: 'Квалифицированные специалисты с многолетним опытом работы',
  },
  {
    icon: 'BookOpen',
    title: 'Современные программы',
    description: 'Актуальные образовательные программы по ФГОС',
  },
  {
    icon: 'Briefcase',
    title: 'Практика и трудоустройство',
    description: 'Помощь в прохождении практики и дальнейшем трудоустройстве',
  },
];

const specialties = [
  {
    title: 'Информационные системы',
    programs: 'Программирование, администрирование',
    duration: '3 года 10 месяцев',
    format: 'Очная',
  },
  {
    title: 'Экономика и бухучёт',
    programs: 'Финансы, налогообложение',
    duration: '2 года 10 месяцев',
    format: 'Очная/Заочная',
  },
  {
    title: 'Право и соцобеспечение',
    programs: 'Юридическое сопровождение',
    duration: '2 года 10 месяцев',
    format: 'Очная',
  },
];

const faqItems = [
  {
    question: 'Какие документы нужны для поступления?',
    answer: 'Для поступления необходимы: паспорт, аттестат об основном общем или среднем общем образовании, 6 фотографий 3x4, медицинская справка формы 086/у, СНИЛС.',
  },
  {
    question: 'Есть ли общежитие?',
    answer: 'Да, учебное заведение предоставляет общежитие для иногородних студентов. Количество мест ограничено, распределение происходит в порядке очереди.',
  },
  {
    question: 'Какова стоимость обучения?',
    answer: 'Обучение проводится на бюджетной основе (бесплатно) и на платной основе. Стоимость контракта зависит от специальности и составляет от 35 000 до 55 000 рублей в год.',
  },
  {
    question: 'Как проходит приёмная кампания?',
    answer: 'Приём документов начинается 20 июня и заканчивается 15 августа. Зачисление происходит на основе среднего балла аттестата. Результаты публикуются на сайте.',
  },
  {
    question: 'Можно ли перевестись из другого учебного заведения?',
    answer: 'Да, перевод возможен при наличии свободных мест на курсе. Необходимо предоставить академическую справку и пройти процедуру перезачёта дисциплин.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="text-sm px-4 py-1.5">
              Прием документов до 25 августа 2025
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Начни свое будущее <br />
              <span className="text-primary">с качественного образования</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Современные программы обучения, опытные преподаватели и широкие возможности
              для развития карьеры
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admission">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base px-8">
                  Подать документы
                  <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/specialties">
                <Button size="lg" variant="outline" className="text-base px-8">
                  Выбрать специальность
                  <Icon name="BookOpen" className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-y bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Мы создаем все условия для качественного образования и успешного старта карьеры
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Популярные специальности</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Выберите направление, которое откроет путь к карьере мечты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {specialties.map((specialty, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{specialty.title}</CardTitle>
                  <CardDescription>{specialty.programs}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="Clock" className="h-4 w-4 mr-2" />
                    {specialty.duration}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="CalendarDays" className="h-4 w-4 mr-2" />
                    {specialty.format}
                  </div>
                  <Link to="/specialties">
                    <Button variant="outline" className="w-full mt-4">
                      Подробнее
                      <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/specialties">
              <Button variant="link" className="text-primary">
                Все специальности
                <Icon name="ChevronRight" className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
              <p className="text-muted-foreground">
                Ответы на самые популярные вопросы абитуриентов
              </p>
            </div>
            <FAQ />
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Готовы начать обучение?</h2>
            <p className="text-lg opacity-90">
              Подайте документы онлайн прямо сейчас. Наша приемная комиссия свяжется с вами в течение 24 часов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/admission">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base px-8">
                  Подать документы
                  <Icon name="FileText" className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contacts">
                <Button size="lg" variant="secondary" className="text-base px-8">
                  Связаться с нами
                  <Icon name="Phone" className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}