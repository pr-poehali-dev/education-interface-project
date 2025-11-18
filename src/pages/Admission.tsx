import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { toast } from "sonner";

export default function Admission() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    specialty: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
    setFormData({ fullName: "", email: "", phone: "", specialty: "", message: "" });
  };

  const faqItems = [
    {
      question: "Какие документы нужны для поступления?",
      answer: "Для поступления необходимы: паспорт, аттестат об образовании (или его копия), 6 фотографий 3x4, медицинская справка формы 086/у, копия СНИЛС. Для некоторых специальностей могут потребоваться дополнительные документы."
    },
    {
      question: "Когда начинается прием документов?",
      answer: "Прием документов начинается с 20 июня и продолжается до 15 августа. Для поступающих на очно-заочную и заочную формы обучения прием документов может быть продлен до 1 декабря."
    },
    {
      question: "Есть ли вступительные испытания?",
      answer: "На большинство специальностей зачисление проводится по конкурсу аттестатов. Однако на некоторые направления (например, творческие специальности) могут проводиться дополнительные вступительные испытания."
    },
    {
      question: "Можно ли подать документы онлайн?",
      answer: "Да, мы принимаем документы в электронном виде через форму на сайте или на электронную почту приемной комиссии. Оригиналы документов необходимо будет предоставить при зачислении."
    },
    {
      question: "Какие льготы предоставляются студентам?",
      answer: "Студенты очной формы обучения имеют право на стипендию, льготный проезд, отсрочку от армии (для юношей). Также предусмотрены социальные стипендии для студентов из малообеспеченных семей."
    },
    {
      question: "Есть ли общежитие для иногородних?",
      answer: "Да, учебное заведение располагает общежитием для иногородних студентов. Количество мест ограничено, распределение проводится приемной комиссией по мере поступления заявок."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Приемная комиссия</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl">
            Вся информация о поступлении и подаче документов
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Icon name="FileText" size={28} className="mr-3 text-primary" />
                Подать документы
              </CardTitle>
              <CardDescription>
                Заполните форму, и мы свяжемся с вами для уточнения деталей
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">ФИО *</Label>
                  <Input
                    id="fullName"
                    placeholder="Иванов Иван Иванович"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
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
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (900) 123-45-67"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialty">Специальность *</Label>
                  <Select value={formData.specialty} onValueChange={(value) => setFormData({ ...formData, specialty: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите специальность" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="it">Информационные технологии</SelectItem>
                      <SelectItem value="economy">Экономика и бухгалтерский учет</SelectItem>
                      <SelectItem value="law">Юриспруденция</SelectItem>
                      <SelectItem value="construction">Строительство и эксплуатация зданий</SelectItem>
                      <SelectItem value="medical">Медицинское дело</SelectItem>
                      <SelectItem value="tourism">Туризм и гостеприимство</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Дополнительная информация</Label>
                  <Textarea
                    id="message"
                    placeholder="Укажите дополнительную информацию, вопросы или особые обстоятельства"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Icon name="Phone" size={24} className="mr-2 text-primary" />
                  Контакты
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <Icon name="MapPin" size={20} className="mr-3 mt-1 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-sm text-muted-foreground">г. Москва, ул. Образцова, д. 15</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Icon name="Phone" size={20} className="mr-3 mt-1 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-sm text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Icon name="Mail" size={20} className="mr-3 mt-1 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">admission@college.edu</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Icon name="Clock" size={20} className="mr-3 mt-1 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="font-medium">График работы</p>
                    <p className="text-sm text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-sm text-muted-foreground">Сб-Вс: выходной</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent">
              <CardHeader>
                <CardTitle className="text-xl">Приемная кампания 2025</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Начало приема:</span>
                    <span>20 июня</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Окончание приема:</span>
                    <span>15 августа</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Зачисление:</span>
                    <span>25 августа</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <Icon name="HelpCircle" size={28} className="mr-3 text-primary" />
              Часто задаваемые вопросы
            </CardTitle>
            <CardDescription>
              Ответы на самые популярные вопросы абитуриентов
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
