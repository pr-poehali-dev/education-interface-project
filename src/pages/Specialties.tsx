import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const specialtiesData = [
  {
    category: 'Информационные технологии',
    items: [
      {
        title: 'Информационные системы',
        code: '09.02.07',
        duration: '3 года 10 месяцев',
        format: 'Очная',
        budget: 25,
        paid: 30,
        description: 'Разработка ПО, системное администрирование',
        subjects: ['Математика', 'Информатика'],
        minScore: 0,
      },
      {
        title: 'Компьютерные сети',
        code: '09.02.06',
        duration: '3 года 10 месяцев',
        format: 'Очная',
        budget: 20,
        paid: 25,
        description: 'Настройка и сопровождение сетевых систем',
        subjects: ['Математика', 'Информатика'],
        minScore: 0,
      },
    ],
  },
  {
    category: 'Экономика',
    items: [
      {
        title: 'Экономика и бухгалтерский учёт',
        code: '38.02.01',
        duration: '2 года 10 месяцев',
        format: 'Очная/Заочная',
        budget: 30,
        paid: 40,
        description: 'Финансовый учёт, налогообложение',
        subjects: ['Математика', 'Русский язык'],
        minScore: 0,
      },
      {
        title: 'Банковское дело',
        code: '38.02.07',
        duration: '2 года 10 месяцев',
        format: 'Очная',
        budget: 25,
        paid: 35,
        description: 'Финансовые операции, кредитование',
        subjects: ['Математика', 'Русский язык'],
        minScore: 0,
      },
    ],
  },
  {
    category: 'Право',
    items: [
      {
        title: 'Право и организация социального обеспечения',
        code: '40.02.01',
        duration: '2 года 10 месяцев',
        format: 'Очная/Заочная',
        budget: 20,
        paid: 30,
        description: 'Юридическое сопровождение, соцзащита',
        subjects: ['Обществознание', 'История'],
        minScore: 0,
      },
    ],
  },
  {
    category: 'Строительство',
    items: [
      {
        title: 'Строительство и эксплуатация зданий',
        code: '08.02.01',
        duration: '3 года 10 месяцев',
        format: 'Очная',
        budget: 25,
        paid: 30,
        description: 'Проектирование, строительство',
        subjects: ['Математика', 'Физика'],
        minScore: 0,
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
              Программы среднего профессионального образования по различным направлениям
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