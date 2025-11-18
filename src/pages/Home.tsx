import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const stats = [
  { value: '25+', label: 'Лет опыта' },
  { value: '10 000+', label: 'Выпускников' },
  { value: '50+', label: 'Специальностей' },
  { value: '95%', label: 'Трудоустройство' },
];

const advantages = [
  {
    icon: 'Award',
    title: 'Аккредитация',
    description: 'Государственная аккредитация и международное признание дипломов',
  },
  {
    icon: 'Users',
    title: 'Преподаватели',
    description: 'Ведущие специалисты и практики в своих областях',
  },
  {
    icon: 'Building2',
    title: 'Инфраструктура',
    description: 'Современные лаборатории, библиотека и спортивные комплексы',
  },
  {
    icon: 'Globe',
    title: 'Международность',
    description: 'Программы обмена и двойные дипломы с зарубежными вузами',
  },
];

const specialties = [
  {
    title: 'Информационные технологии',
    programs: 'Программная инженерия, Кибербезопасность',
    duration: '4 года',
    format: 'Очная',
  },
  {
    title: 'Экономика и управление',
    programs: 'Менеджмент, Финансы и кредит',
    duration: '4 года',
    format: 'Очная/Заочная',
  },
  {
    title: 'Юриспруденция',
    programs: 'Гражданское, уголовное право',
    duration: '4 года',
    format: 'Очная',
  },
];

const faqItems = [
  {
    question: 'Какие документы нужны для поступления?',
    answer: 'Для поступления необходимы: паспорт, аттестат или диплом о предыдущем образовании, результаты ЕГЭ (для бакалавриата), 6 фотографий 3×4, медицинская справка формы 086/у.',
  },
  {
    question: 'Есть ли общежитие?',
    answer: 'Да, университет предоставляет общежития для иногородних студентов. Места распределяются в порядке очереди среди поступивших на бюджетные места.',
  },
  {
    question: 'Можно ли поступить без ЕГЭ?',
    answer: 'Без ЕГЭ можно поступить на базе среднего профессионального образования (колледжа), сдав внутренние вступительные испытания университета.',
  },
  {
    question: 'Какая стоимость обучения?',
    answer: 'Стоимость обучения зависит от специальности и формы обучения. Диапазон от 150 000 до 300 000 рублей в год. Также доступны бюджетные места.',
  },
  {
    question: 'Есть ли военная кафедра?',
    answer: 'Да, в университете функционирует военная кафедра. Студенты мужского пола могут пройти военную подготовку и получить военный билет.',
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
              <Link to="/apply">
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

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
              <p className="text-muted-foreground">
                Ответы на самые популярные вопросы абитуриентов
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
              <Link to="/apply">
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
