import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { toast } from "sonner";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Сообщение отправлено! Мы ответим вам в ближайшее время.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl">
            Свяжитесь с нами удобным для вас способом
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <Icon name="MapPin" size={24} className="text-primary" />
              </div>
              <CardTitle>Адрес</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                г. Москва, ул. Образцова, д. 15<br />
                м. Новослободская<br />
                Индекс: 127055
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <Icon name="Phone" size={24} className="text-primary" />
              </div>
              <CardTitle>Телефоны</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Приемная комиссия:<br />
                +7 (495) 123-45-67<br />
                <br />
                Секретарь:<br />
                +7 (495) 123-45-68
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <Icon name="Mail" size={24} className="text-primary" />
              </div>
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Общие вопросы:<br />
                info@college.edu<br />
                <br />
                Приемная комиссия:<br />
                admission@college.edu
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Icon name="MessageSquare" size={28} className="mr-3 text-primary" />
                Форма обратной связи
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input
                    id="name"
                    placeholder="Иван Иванов"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@mail.ru"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Тема обращения *</Label>
                  <Input
                    id="subject"
                    placeholder="Вопрос о поступлении"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение *</Label>
                  <Textarea
                    id="message"
                    placeholder="Опишите ваш вопрос подробнее"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Icon name="Clock" size={24} className="mr-2 text-primary" />
                  График работы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between py-2 border-b">
                  <span className="font-medium">Понедельник - Пятница</span>
                  <span className="text-muted-foreground">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="font-medium">Суббота</span>
                  <span className="text-muted-foreground">10:00 - 15:00</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium">Воскресенье</span>
                  <span className="text-muted-foreground">Выходной</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Icon name="Users" size={24} className="mr-2 text-primary" />
                  Социальные сети
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <a href="#" className="flex items-center p-3 rounded-lg hover:bg-secondary transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <Icon name="MessageCircle" size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Telegram</p>
                      <p className="text-sm text-muted-foreground">@college_official</p>
                    </div>
                  </a>

                  <a href="#" className="flex items-center p-3 rounded-lg hover:bg-secondary transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <Icon name="Share2" size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">ВКонтакте</p>
                      <p className="text-sm text-muted-foreground">vk.com/college</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent">
              <CardHeader>
                <CardTitle className="text-xl">Приемные часы директора</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Среда: 14:00 - 17:00
                </p>
                <p className="text-sm text-muted-foreground">
                  Необходима предварительная запись по телефону секретаря
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <Icon name="Map" size={28} className="mr-3 text-primary" />
              Как нас найти
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Icon name="MapPin" size={48} className="mx-auto mb-3" />
                <p>Карта местоположения</p>
                <p className="text-sm">г. Москва, ул. Образцова, д. 15</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
