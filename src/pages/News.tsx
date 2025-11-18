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
    title: 'Университет открывает новую магистерскую программу по искусственному интеллекту',
    excerpt: 'С сентября 2025 года начинается набор на программу "Искусственный интеллект и анализ данных".',
    date: '15 ноября 2025',
    category: 'Образование',
    image: '🎓',
  },
  {
    id: 2,
    title: 'Студенты университета победили в международной олимпиаде по программированию',
    excerpt: 'Команда нашего университета заняла первое место на ACM ICPC, обойдя более 100 команд из разных стран.',
    date: '10 ноября 2025',
    category: 'Достижения',
    image: '🏆',
  },
  {
    id: 3,
    title: 'День открытых дверей состоится 25 ноября',
    excerpt: 'Приглашаем всех абитуриентов и их родителей познакомиться с университетом и будущими специальностями.',
    date: '5 ноября 2025',
    category: 'События',
    image: '🚪',
  },
  {
    id: 4,
    title: 'Университет подписал соглашение с ведущими IT-компаниями',
    excerpt: 'Студенты получат возможность стажировок в Яндекс, VK и Сбер с перспективой трудоустройства.',
    date: '1 ноября 2025',
    category: 'Партнерство',
    image: '🤝',
  },
  {
    id: 5,
    title: 'Открыт новый исследовательский центр квантовых технологий',
    excerpt: 'Центр оснащен современным оборудованием и будет вести работу по перспективным направлениям.',
    date: '28 октября 2025',
    category: 'Наука',
    image: '🔬',
  },
  {
    id: 6,
    title: 'Стартует программа академической мобильности с европейскими вузами',
    excerpt: 'Студенты смогут пройти семестр обучения в партнерских университетах Германии и Франции.',
    date: '20 октября 2025',
    category: 'Международное',
    image: '✈️',
  },
];

const categories = ['Все', 'Образование', 'Достижения', 'События', 'Партнерство', 'Наука', 'Международное'];

export default function News() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Новости университета</h1>
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