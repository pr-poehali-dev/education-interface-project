import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const contactInfo = [
  {
    icon: 'MapPin',
    title: 'Адрес',
    lines: [
      'г. Москва',
      'ул. Академическая, д. 15',
      'Метро "Университет"',
    ],
  },
  {
    icon: 'Phone',
    title: 'Телефоны',
    lines: [
      'Приемная комиссия: +7 (495) 555-00-55',
      'Учебная часть: +7 (495) 555-00-56',
      'Справочная: +7 (495) 555-00-57',
    ],
  },
  {
    icon: 'Mail',
    title: 'Email',
    lines: [
      'Общие вопросы: info@edu-institution.ru',
      'Поступление: admission@edu-institution.ru',
      'Учебная часть: education@edu-institution.ru',
    ],
  },
  {
    icon: 'Clock',
    title: 'Режим работы',
    lines: [
      'Понедельник - Пятница: 9:00 - 17:00',
      'Суббота: 10:00 - 14:00',
      'Воскресенье: выходной',
    ],
  },
];

const departments = [
  {
    name: 'Приемная комиссия',
    head: 'Секретарь приемной комиссии',
    phone: '+7 (495) 555-00-55',
    email: 'admission@edu-institution.ru',
    room: 'Каб. 105',
  },
  {
    name: 'Учебная часть',
    head: 'Заведующий учебной частью',
    phone: '+7 (495) 555-00-56',
    email: 'education@edu-institution.ru',
    room: 'Каб. 201',
  },
  {
    name: 'Бухгалтерия',
    head: 'Главный бухгалтер',
    phone: '+7 (495) 555-00-58',
    email: 'accounting@edu-institution.ru',
    room: 'Каб. 108',
  },
];

export default function Contacts() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Контакты</h1>
            <p className="text-lg text-muted-foreground">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Icon name={info.icon as any} className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {info.lines.map((line, i) => (
                    <p key={i} className="text-sm text-muted-foreground mb-1">
                      {line}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Основные отделы</h2>
              <p className="text-muted-foreground">
                Контакты основных подразделений
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {departments.map((dept, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{dept.name}</CardTitle>
                    <CardDescription>{dept.head}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Icon name="Phone" className="h-4 w-4 mr-2 text-muted-foreground shrink-0" />
                      <span className="text-muted-foreground">{dept.phone}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Icon name="Mail" className="h-4 w-4 mr-2 text-muted-foreground shrink-0" />
                      <span className="text-muted-foreground">{dept.email}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Icon name="MapPin" className="h-4 w-4 mr-2 text-muted-foreground shrink-0" />
                      <span className="text-muted-foreground">{dept.room}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Форма обратной связи</h2>
              <p className="text-muted-foreground">
                Задайте нам вопрос, и мы свяжемся с вами в ближайшее время
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя *</Label>
                      <Input id="name" placeholder="Иван Иванов" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="ivanov@example.com" required />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Тема обращения *</Label>
                      <Input id="subject" placeholder="Поступление" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение *</Label>
                    <Textarea
                      id="message"
                      placeholder="Опишите ваш вопрос подробно..."
                      rows={6}
                      required
                    />
                  </div>
                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="consent" className="mt-1" required />
                    <Label htmlFor="consent" className="text-sm text-muted-foreground cursor-pointer">
                      Я согласен на обработку персональных данных в соответствии с{' '}
                      <a href="#" className="text-primary hover:underline">
                        политикой конфиденциальности
                      </a>
                    </Label>
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                    Отправить сообщение
                    <Icon name="Send" className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Как нас найти</h2>
              <p className="text-muted-foreground">
                Удобное расположение в центре Москвы
              </p>
            </div>
            <Card className="overflow-hidden">
              <div className="h-96 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Icon name="Map" className="h-16 w-16 mx-auto text-primary" />
                  <p className="text-muted-foreground">
                    Интерактивная карта<br />
                    <span className="text-sm">г. Москва, ул. Академическая, д. 1</span>
                  </p>
                  <Button variant="outline">
                    Открыть в Яндекс.Картах
                    <Icon name="ExternalLink" className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}