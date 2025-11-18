import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const steps = [
  {
    number: '1',
    title: 'Регистрация заявления',
    description: 'Заполните онлайн-заявление на нашем сайте или посетите приемную комиссию лично',
    icon: 'FileText',
  },
  {
    number: '2',
    title: 'Подача документов',
    description: 'Предоставьте необходимые документы: паспорт, аттестат, результаты ЕГЭ',
    icon: 'FolderOpen',
  },
  {
    number: '3',
    title: 'Участие в конкурсе',
    description: 'Следите за своим положением в конкурсном списке на сайте',
    icon: 'TrendingUp',
  },
  {
    number: '4',
    title: 'Зачисление',
    description: 'При успешном прохождении конкурса подпишите договор и начните обучение',
    icon: 'CheckCircle2',
  },
];

const documents = [
  'Паспорт гражданина РФ (оригинал и копия)',
  'Аттестат о среднем общем образовании или диплом СПО',
  'Результаты ЕГЭ (автоматически передаются через систему)',
  'СНИЛС (копия)',
  '6 фотографий размером 3×4 см',
  'Медицинская справка формы 086/у',
  'Документы, подтверждающие льготы (при наличии)',
];

const contacts = [
  {
    icon: 'MapPin',
    title: 'Адрес',
    value: 'г. Москва, ул. Академическая, д. 1, каб. 101',
  },
  {
    icon: 'Clock',
    title: 'Часы работы',
    value: 'Пн-Пт: 9:00-18:00, Сб: 10:00-15:00',
  },
  {
    icon: 'Phone',
    title: 'Телефон',
    value: '+7 (495) 123-45-67',
  },
  {
    icon: 'Mail',
    title: 'Email',
    value: 'admission@university.ru',
  },
];

const importantDates = [
  { date: '20 июня', event: 'Начало приема документов' },
  { date: '25 июля', event: 'Окончание приема документов (бюджет)' },
  { date: '3 августа', event: 'Публикация конкурсных списков' },
  { date: '9 августа', event: 'Зачисление на бюджет' },
  { date: '25 августа', event: 'Окончание приема на платное обучение' },
];

export default function Admission() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge variant="secondary" className="text-sm px-4 py-1.5">
              Прием 2025
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">Приемная комиссия</h1>
            <p className="text-lg text-muted-foreground">
              Вся информация о поступлении и необходимых документах
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Этапы поступления</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Простой и понятный процесс от подачи документов до зачисления
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="h-14 w-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                      {step.number}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <Icon name="ArrowRight" className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Необходимые документы</h2>
              <p className="text-muted-foreground">
                Подготовьте следующие документы для поступления
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {documents.map((doc, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Icon name="CheckCircle2" className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Важные даты</h2>
              <p className="text-muted-foreground">
                Календарь приемной кампании 2025
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {importantDates.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between py-3">
                        <div className="flex items-center space-x-4">
                          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <Icon name="Calendar" className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-semibold">{item.event}</div>
                            <div className="text-sm text-muted-foreground">{item.date}</div>
                          </div>
                        </div>
                      </div>
                      {index < importantDates.length - 1 && <Separator />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Контакты приемной комиссии</h2>
              <p className="text-muted-foreground">
                Свяжитесь с нами любым удобным способом
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {contacts.map((contact, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon name={contact.icon as any} className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg mb-1">{contact.title}</CardTitle>
                        <CardDescription className="text-foreground">{contact.value}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Готовы подать документы?</h2>
            <p className="text-lg opacity-90">
              Начните процесс поступления прямо сейчас, заполнив онлайн-заявление
            </p>
            <Link to="/apply">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base px-8">
                Подать документы онлайн
                <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}