import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const specialties = [
    {
      title: 'Информационные технологии',
      code: '09.02.07',
      duration: '3 года 10 месяцев',
      places: 25,
      icon: 'Code',
      description: 'Разработка программного обеспечения, системное администрирование'
    },
    {
      title: 'Экономика и бухгалтерский учёт',
      code: '38.02.01',
      duration: '2 года 10 месяцев',
      places: 30,
      icon: 'Calculator',
      description: 'Финансовый учёт, налогообложение, анализ хозяйственной деятельности'
    },
    {
      title: 'Право и организация социального обеспечения',
      code: '40.02.01',
      duration: '2 года 10 месяцев',
      places: 20,
      icon: 'Scale',
      description: 'Юридическое сопровождение, социальная защита населения'
    },
    {
      title: 'Строительство и эксплуатация зданий',
      code: '08.02.01',
      duration: '3 года 10 месяцев',
      places: 25,
      icon: 'Building',
      description: 'Проектирование, строительство, техническая эксплуатация'
    }
  ];

  const news = [
    {
      date: '15 ноября 2025',
      title: 'Открыт приём документов на 2026 год',
      description: 'Начался приём заявлений от абитуриентов на новый учебный год'
    },
    {
      date: '10 ноября 2025',
      title: 'День открытых дверей',
      description: 'Приглашаем будущих студентов познакомиться с учебным заведением'
    },
    {
      date: '5 ноября 2025',
      title: 'Новые специальности',
      description: 'Расширен список доступных направлений подготовки'
    }
  ];

  const faqItems = [
    {
      question: 'Какие документы нужны для поступления?',
      answer: 'Для поступления необходимы: паспорт, аттестат об основном общем или среднем общем образовании, 6 фотографий 3x4, медицинская справка формы 086/у, СНИЛС.'
    },
    {
      question: 'Есть ли общежитие?',
      answer: 'Да, учебное заведение предоставляет общежитие для иногородних студентов. Количество мест ограничено, распределение происходит в порядке очереди.'
    },
    {
      question: 'Какова стоимость обучения?',
      answer: 'Обучение проводится на бюджетной основе (бесплатно) и на платной основе. Стоимость контракта зависит от специальности и составляет от 35 000 до 55 000 рублей в год.'
    },
    {
      question: 'Как проходит приёмная кампания?',
      answer: 'Приём документов начинается 20 июня и заканчивается 15 августа. Зачисление происходит на основе среднего балла аттестата. Результаты публикуются на сайте.'
    },
    {
      question: 'Можно ли перевестись из другого учебного заведения?',
      answer: 'Да, перевод возможен при наличии свободных мест на курсе. Необходимо предоставить академическую справку и пройти процедуру перезачёта дисциплин.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена',
      description: 'Мы свяжемся с вами в ближайшее время',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="GraduationCap" size={32} className="text-primary" />
            <div>
              <h1 className="text-xl font-bold text-foreground">Образовательное учреждение</h1>
              <p className="text-xs text-muted-foreground">Среднее профессиональное образование</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#specialties" className="text-sm font-medium hover:text-primary transition-colors">Специальности</a>
            <a href="#admission" className="text-sm font-medium hover:text-primary transition-colors">Поступление</a>
            <a href="#news" className="text-sm font-medium hover:text-primary transition-colors">Новости</a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button size="sm" className="hidden md:flex">
            <Icon name="FileText" size={16} className="mr-2" />
            Подать документы
          </Button>
        </nav>
      </header>

      <section className="relative bg-gradient-to-br from-primary to-accent text-white py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Приём 2026</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Начни свою карьеру с качественного образования</h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Мы предлагаем современные программы обучения, квалифицированных преподавателей и лучшие условия для развития профессиональных навыков
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="text-primary hover:bg-white">
                <Icon name="FileText" size={20} className="mr-2" />
                Подать документы
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Icon name="Calendar" size={20} className="mr-2" />
                День открытых дверей
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      <section id="specialties" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Специальности</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Направления подготовки</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Выберите специальность, которая соответствует вашим интересам и целям
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {specialties.map((specialty, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon name={specialty.icon as any} size={28} className="text-primary" />
                    </div>
                    <Badge variant="secondary">{specialty.code}</Badge>
                  </div>
                  <CardTitle className="text-xl">{specialty.title}</CardTitle>
                  <CardDescription>{specialty.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Clock" size={16} />
                      <span>{specialty.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Users" size={16} />
                      <span>{specialty.places} мест</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="admission" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4">Приёмная комиссия</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Как поступить</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Подготовьте документы</h3>
                    <p className="text-muted-foreground">Соберите необходимый пакет документов согласно списку</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Подайте заявление</h3>
                    <p className="text-muted-foreground">Заполните заявление онлайн или посетите приёмную комиссию</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Отслеживайте статус</h3>
                    <p className="text-muted-foreground">Следите за списками поступающих на сайте</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="mt-8">
                <Icon name="FileText" size={20} className="mr-2" />
                Подать документы онлайн
              </Button>
            </div>
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle>Контакты приёмной комиссии</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Phone" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">priem@example.edu</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium">График работы</p>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00<br />Сб: 10:00 - 15:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="news" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Новости</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Актуальные события</h2>
            <p className="text-muted-foreground">Следите за последними новостями и объявлениями</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {news.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 animate-scale-in">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Icon name="Calendar" size={16} />
                    <span>{item.date}</span>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-muted-foreground">Ответы на популярные вопросы абитуриентов</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Связаться с нами</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Остались вопросы?</h2>
            <p className="text-muted-foreground">Заполните форму и мы свяжемся с вами в ближайшее время</p>
          </div>
          <Card className="animate-scale-in">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input
                    id="name"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите, чем мы можем вам помочь..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="GraduationCap" size={28} />
                <span className="font-bold text-lg">ОУ СПО</span>
              </div>
              <p className="text-white/80 text-sm">
                Качественное среднее профессиональное образование для вашего будущего
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Навигация</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#specialties" className="hover:text-white transition-colors">Специальности</a></li>
                <li><a href="#admission" className="hover:text-white transition-colors">Поступление</a></li>
                <li><a href="#news" className="hover:text-white transition-colors">Новости</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>г. Москва, ул. Примерная, 123</li>
                <li>+7 (495) 123-45-67</li>
                <li>info@example.edu</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Социальные сети</h3>
              <div className="flex gap-3">
                <Button size="icon" variant="ghost" className="text-white hover:bg-white/10">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button size="icon" variant="ghost" className="text-white hover:bg-white/10">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="icon" variant="ghost" className="text-white hover:bg-white/10">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/80">
            <p>© 2025 Образовательное учреждение СПО. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
