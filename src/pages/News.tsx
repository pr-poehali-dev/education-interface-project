import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const newsData = [
  {
    id: 1,
    title: 'Открыт приём документов на 2026 год',
    excerpt: 'Начался приём заявлений от абитуриентов на новый учебный год. Документы принимаются с 20 июня по 15 августа.',
    date: '15 ноября 2025',
    category: 'Поступление',
    image: '🎓',
  },
  {
    id: 2,
    title: 'День открытых дверей 25 ноября',
    excerpt: 'Приглашаем будущих студентов познакомиться с учебным заведением, преподавателями и условиями обучения.',
    date: '10 ноября 2025',
    category: 'События',
    image: '🚪',
  },
  {
    id: 3,
    title: 'Расширен список специальностей',
    excerpt: 'В новом учебном году добавлены новые программы подготовки по востребованным направлениям.',
    date: '5 ноября 2025',
    category: 'Образование',
    image: '📚',
  },
  {
    id: 4,
    title: 'Подписано соглашение о практике',
    excerpt: 'Студенты получат возможность прохождения практики на предприятиях-партнёрах.',
    date: '1 ноября 2025',
    category: 'Партнёрство',
    image: '🤝',
  },
  {
    id: 5,
    title: 'Обновление материально-технической базы',
    excerpt: 'Приобретено современное оборудование для лабораторий и мастерских.',
    date: '28 октября 2025',
    category: 'Образование',
    image: '🛠️',
  },
  {
    id: 6,
    title: 'Выпускники делятся опытом',
    excerpt: 'Состоялась встреча студентов с успешными выпускниками прошлых лет.',
    date: '20 октября 2025',
    category: 'События',
    image: '🎓',
  },
];

const categories = ['Все', 'Поступление', 'Образование', 'События', 'Партнёрство'];

export default function News() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Новости</h1>
            <p className="text-lg text-muted-foreground">
              Актуальные события, достижения и анонсы
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === 'Все' ? 'default' : 'outline'}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsData.map((news) => (
                <Card key={news.id} className="hover:shadow-lg transition-shadow overflow-hidden group">
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-6xl">
                    {news.image}
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {news.category}
                      </Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Icon name="Calendar" className="h-3 w-3 mr-1" />
                        {news.date}
                      </div>
                    </div>
                    <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                      {news.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="line-clamp-3 mb-4">
                      {news.excerpt}
                    </CardDescription>
                    <Button variant="ghost" className="w-full group-hover:bg-primary/5">
                      Читать далее
                      <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" size="lg">
                Загрузить еще
                <Icon name="ChevronDown" className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-primary/20">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Bell" className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Подпишитесь на рассылку</CardTitle>
                <CardDescription>
                  Получайте важные новости и объявления первыми
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Ваш email"
                    className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Подписаться
                    <Icon name="Send" className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}