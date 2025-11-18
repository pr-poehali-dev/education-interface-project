import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const specialtiesData = [
  {
    category: 'IT и технологии',
    items: [
      {
        title: 'Программная инженерия',
        code: '09.03.04',
        duration: '4 года',
        format: 'Очная',
        budget: 25,
        paid: 50,
        description: 'Подготовка специалистов в области разработки программного обеспечения',
        subjects: ['Математика', 'Информатика', 'Русский язык'],
        minScore: 240,
      },
      {
        title: 'Информационная безопасность',
        code: '10.03.01',
        duration: '4 года',
        format: 'Очная',
        budget: 20,
        paid: 30,
        description: 'Защита информации и киберпространства',
        subjects: ['Математика', 'Информатика', 'Русский язык'],
        minScore: 235,
      },
      {
        title: 'Искусственный интеллект',
        code: '09.03.01',
        duration: '4 года',
        format: 'Очная',
        budget: 15,
        paid: 40,
        description: 'Разработка систем машинного обучения и нейросетей',
        subjects: ['Математика', 'Информатика', 'Русский язык'],
        minScore: 250,
      },
    ],
  },
  {
    category: 'Экономика',
    items: [
      {
        title: 'Экономика',
        code: '38.03.01',
        duration: '4 года',
        format: 'Очная/Заочная',
        budget: 30,
        paid: 60,
        description: 'Подготовка экономистов-аналитиков для различных отраслей',
        subjects: ['Математика', 'Обществознание', 'Русский язык'],
        minScore: 225,
      },
      {
        title: 'Менеджмент',
        code: '38.03.02',
        duration: '4 года',
        format: 'Очная/Заочная',
        budget: 25,
        paid: 70,
        description: 'Управление организациями и проектами',
        subjects: ['Математика', 'Обществознание', 'Русский язык'],
        minScore: 220,
      },
      {
        title: 'Финансы и кредит',
        code: '38.03.01',
        duration: '4 года',
        format: 'Очная',
        budget: 20,
        paid: 50,
        description: 'Банковское дело и финансовый менеджмент',
        subjects: ['Математика', 'Обществознание', 'Русский язык'],
        minScore: 230,
      },
    ],
  },
  {
    category: 'Право',
    items: [
      {
        title: 'Юриспруденция',
        code: '40.03.01',
        duration: '4 года',
        format: 'Очная/Заочная',
        budget: 35,
        paid: 80,
        description: 'Гражданское, уголовное и административное право',
        subjects: ['Обществознание', 'История', 'Русский язык'],
        minScore: 225,
      },
      {
        title: 'Международное право',
        code: '40.03.01',
        duration: '4 года',
        format: 'Очная',
        budget: 15,
        paid: 40,
        description: 'Международные отношения и правовое регулирование',
        subjects: ['Обществознание', 'История', 'Русский язык'],
        minScore: 240,
      },
    ],
  },
  {
    category: 'Медицина',
    items: [
      {
        title: 'Лечебное дело',
        code: '31.05.01',
        duration: '6 лет',
        format: 'Очная',
        budget: 40,
        paid: 20,
        description: 'Подготовка врачей общей практики',
        subjects: ['Химия', 'Биология', 'Русский язык'],
        minScore: 260,
      },
      {
        title: 'Стоматология',
        code: '31.05.03',
        duration: '5 лет',
        format: 'Очная',
        budget: 25,
        paid: 30,
        description: 'Врач-стоматолог',
        subjects: ['Химия', 'Биология', 'Русский язык'],
        minScore: 255,
      },
    ],
  },
];

export default function Specialties() {
  const [selectedCategory, setSelectedCategory] = useState(specialtiesData[0].category);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Специальности</h1>
            <p className="text-lg text-muted-foreground">
              Более 50 программ бакалавриата и специалитета в различных областях знаний
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue={specialtiesData[0].category} className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 md:grid-cols-4 h-auto">
              {specialtiesData.map((category) => (
                <TabsTrigger
                  key={category.category}
                  value={category.category}
                  onClick={() => setSelectedCategory(category.category)}
                  className="text-sm py-2"
                >
                  {category.category}
                </TabsTrigger>
              ))}
            </TabsList>

            {specialtiesData.map((category) => (
              <TabsContent key={category.category} value={category.category} className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((specialty, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {specialty.code}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {specialty.format}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl">{specialty.title}</CardTitle>
                        <CardDescription>{specialty.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center text-sm">
                            <Icon name="Clock" className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span className="text-muted-foreground">Срок обучения:</span>
                            <span className="ml-auto font-medium">{specialty.duration}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <Icon name="Users" className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span className="text-muted-foreground">Бюджет:</span>
                            <span className="ml-auto font-medium">{specialty.budget} мест</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <Icon name="Wallet" className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span className="text-muted-foreground">Платно:</span>
                            <span className="ml-auto font-medium">{specialty.paid} мест</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <Icon name="Award" className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span className="text-muted-foreground">Мин. балл:</span>
                            <span className="ml-auto font-medium">{specialty.minScore}</span>
                          </div>
                        </div>

                        <div className="pt-2 border-t">
                          <p className="text-xs text-muted-foreground mb-2">Предметы ЕГЭ:</p>
                          <div className="flex flex-wrap gap-1">
                            {specialty.subjects.map((subject, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {subject}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <Link to="/apply">
                          <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                            Подать документы
                            <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Icon name="HelpCircle" className="h-12 w-12 mx-auto text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Не нашли подходящую специальность?</h2>
            <p className="text-muted-foreground">
              Свяжитесь с нашей приемной комиссией, и мы поможем подобрать программу обучения
            </p>
            <Link to="/contacts">
              <Button size="lg" variant="outline">
                Связаться с нами
                <Icon name="Phone" className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
