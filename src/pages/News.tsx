import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const newsItems = [
  {
    id: 1,
    title: "Открыта запись на День открытых дверей",
    date: "15 ноября 2025",
    category: "Мероприятия",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=400&fit=crop",
    excerpt: "Приглашаем всех желающих посетить День открытых дверей 25 ноября. Вы сможете познакомиться с преподавателями, посетить аудитории и лаборатории.",
    icon: "Calendar"
  },
  {
    id: 2,
    title: "Студенты заняли призовые места на региональном чемпионате",
    date: "10 ноября 2025",
    category: "Достижения",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&h=400&fit=crop",
    excerpt: "Наши студенты специальности 'Информационные технологии' завоевали золото и серебро на региональном чемпионате WorldSkills Russia.",
    icon: "Trophy"
  },
  {
    id: 3,
    title: "Новая программа стипендиальной поддержки",
    date: "5 ноября 2025",
    category: "Объявления",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop",
    excerpt: "С нового семестра вводится дополнительная стипендиальная программа для студентов, показывающих высокие академические результаты.",
    icon: "Award"
  },
  {
    id: 4,
    title: "Открытие новой специализации 'Кибербезопасность'",
    date: "28 октября 2025",
    category: "Новости",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop",
    excerpt: "С 2026 года учебное заведение начинает прием на новую востребованную специализацию в области информационной безопасности.",
    icon: "Shield"
  },
  {
    id: 5,
    title: "Подписано соглашение с ведущими IT-компаниями",
    date: "20 октября 2025",
    category: "Партнерство",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=400&fit=crop",
    excerpt: "Заключены партнерские соглашения с крупнейшими IT-компаниями региона для прохождения практики и последующего трудоустройства выпускников.",
    icon: "Handshake"
  },
  {
    id: 6,
    title: "Модернизация учебных лабораторий",
    date: "12 октября 2025",
    category: "Инфраструктура",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=400&fit=crop",
    excerpt: "Завершена масштабная модернизация компьютерных классов и лабораторий. Закуплено современное оборудование на сумму более 15 млн рублей.",
    icon: "Laptop"
  }
];

const categories = ["Все", "Мероприятия", "Достижения", "Объявления", "Новости", "Партнерство", "Инфраструктура"];

export default function News() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Новости</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl">
            Актуальные события и достижения нашего учебного заведения
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "Все" ? "default" : "outline"}
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((news) => (
            <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary">{news.category}</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Icon name="Calendar" size={16} className="mr-2" />
                  <span>{news.date}</span>
                </div>
                <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
                  {news.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">{news.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-primary font-medium cursor-pointer hover:underline">
                  <span className="mr-2">Читать далее</span>
                  <Icon name="ArrowRight" size={18} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-secondary rounded-lg p-8 text-center">
          <Icon name="Newspaper" size={48} className="mx-auto mb-4 text-primary" />
          <h2 className="text-2xl font-bold mb-2">Подпишитесь на новости</h2>
          <p className="text-muted-foreground mb-6">
            Будьте в курсе всех событий - получайте свежие новости на почту
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 whitespace-nowrap">
              Подписаться
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
