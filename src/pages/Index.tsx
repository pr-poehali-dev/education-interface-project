import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function Index() {
  const stats = [
    { label: "Лет успешной работы", value: "50+", icon: "Award" },
    { label: "Выпускников", value: "15000+", icon: "Users" },
    { label: "Специальностей", value: "12", icon: "BookOpen" },
    { label: "Трудоустроено", value: "85%", icon: "TrendingUp" }
  ];

  const benefits = [
    {
      icon: "GraduationCap",
      title: "Качественное образование",
      description: "Современные программы обучения, соответствующие ФГОС и требованиям работодателей"
    },
    {
      icon: "Users",
      title: "Опытные преподаватели",
      description: "Квалифицированный педагогический состав с практическим опытом работы"
    },
    {
      icon: "Building",
      title: "Современная инфраструктура",
      description: "Оборудованные аудитории, лаборатории и мастерские с новейшим оборудованием"
    },
    {
      icon: "Briefcase",
      title: "Практика и стажировки",
      description: "Партнерство с ведущими компаниями для прохождения практики и трудоустройства"
    }
  ];

  const quickLinks = [
    { title: "Подать документы", href: "/admission", icon: "FileText", variant: "default" as const },
    { title: "Специальности", href: "/specialties", icon: "BookOpen", variant: "outline" as const },
    { title: "День открытых дверей", href: "/news", icon: "Calendar", variant: "outline" as const }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="GraduationCap" size={32} />
              <span className="text-xl font-bold">Образовательное учреждение</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className="hover:opacity-80 transition-opacity">Главная</Link>
              <Link to="/specialties" className="hover:opacity-80 transition-opacity">Специальности</Link>
              <Link to="/admission" className="hover:opacity-80 transition-opacity">Поступление</Link>
              <Link to="/news" className="hover:opacity-80 transition-opacity">Новости</Link>
              <Link to="/contacts" className="hover:opacity-80 transition-opacity">Контакты</Link>
            </div>
            <Button variant="secondary" size="sm" asChild>
              <Link to="/admission">Подать документы</Link>
            </Button>
          </div>
        </nav>

        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-accent text-accent-foreground">Приём 2025</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Образование, которое открывает возможности
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Получите востребованную профессию и начните успешную карьеру. Качественное образование, современные программы обучения и практика в ведущих компаниях.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/admission">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Подать документы
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/specialties">
                  <Icon name="BookOpen" size={20} className="mr-2" />
                  Выбрать специальность
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </header>

      <main>
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <Icon name={stat.icon} size={40} className="mx-auto mb-3 text-primary" />
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
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
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Мы предоставляем все условия для получения качественного образования и успешного старта карьеры
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon name={benefit.icon} size={32} className="text-primary" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                {quickLinks.map((link, index) => (
                  <Card key={index} className={`border-2 ${link.variant === 'default' ? 'border-accent bg-accent' : 'border-primary-foreground/20 bg-primary-foreground/5'} hover:scale-105 transition-transform`}>
                    <CardHeader className="text-center">
                      <Icon name={link.icon} size={40} className={`mx-auto mb-3 ${link.variant === 'default' ? 'text-accent-foreground' : 'text-primary-foreground'}`} />
                      <CardTitle className={link.variant === 'default' ? 'text-accent-foreground' : 'text-primary-foreground'}>
                        {link.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Button 
                        variant={link.variant} 
                        className={link.variant === 'outline' ? 'border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary' : ''}
                        asChild
                      >
                        <Link to={link.href}>
                          Перейти <Icon name="ArrowRight" size={16} className="ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Последние новости</h2>
              <p className="text-lg text-muted-foreground">Актуальные события и достижения</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  title: "Открыта запись на День открытых дверей",
                  date: "15 ноября 2025",
                  category: "Мероприятия",
                  icon: "Calendar"
                },
                {
                  title: "Студенты заняли призовые места",
                  date: "10 ноября 2025",
                  category: "Достижения",
                  icon: "Trophy"
                },
                {
                  title: "Новая программа стипендиальной поддержки",
                  date: "5 ноября 2025",
                  category: "Объявления",
                  icon: "Award"
                }
              ].map((news, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Badge className="w-fit mb-2">{news.category}</Badge>
                    <Icon name={news.icon} size={32} className="text-primary mb-3" />
                    <CardTitle className="text-lg">{news.title}</CardTitle>
                    <CardDescription className="flex items-center">
                      <Icon name="Calendar" size={14} className="mr-1" />
                      {news.date}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" size="lg" asChild>
                <Link to="/news">
                  Все новости <Icon name="ArrowRight" size={18} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="GraduationCap" size={28} />
                <span className="font-bold text-lg">ОУ</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Образовательное учреждение с 50-летней историей успеха
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Навигация</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Главная</Link></li>
                <li><Link to="/specialties" className="text-muted-foreground hover:text-foreground transition-colors">Специальности</Link></li>
                <li><Link to="/admission" className="text-muted-foreground hover:text-foreground transition-colors">Поступление</Link></li>
                <li><Link to="/news" className="text-muted-foreground hover:text-foreground transition-colors">Новости</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <Icon name="MapPin" size={16} className="mr-2 mt-1 flex-shrink-0" />
                  <span>г. Москва, ул. Образцова, д. 15</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2 flex-shrink-0" />
                  <span>+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2 flex-shrink-0" />
                  <span>info@college.edu</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Социальные сети</h3>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Icon name="Share2" size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Образовательное учреждение. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
