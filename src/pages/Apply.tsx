import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useToast } from '@/components/ui/use-toast';

const specialties = [
  'Программная инженерия',
  'Информационная безопасность',
  'Искусственный интеллект',
  'Экономика',
  'Менеджмент',
  'Финансы и кредит',
  'Юриспруденция',
  'Международное право',
  'Лечебное дело',
  'Стоматология',
];

const educationForms = ['Очная', 'Очно-заочная', 'Заочная'];
const financingTypes = ['Бюджет', 'Платно'];

export default function Apply() {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    middleName: '',
    birthDate: '',
    email: '',
    phone: '',
    specialty: '',
    educationForm: '',
    financingType: '',
    hasEGE: false,
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в течение 24 часов.',
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Подать документы</h1>
            <p className="text-lg text-muted-foreground">
              Заполните форму, и мы свяжемся с вами для продолжения процесса поступления
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center justify-between relative">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="flex flex-col items-center z-10 flex-1">
                    <div
                      className={`h-12 w-12 rounded-full flex items-center justify-center font-bold text-lg ${
                        step >= num
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-muted-foreground'
                      }`}
                    >
                      {num}
                    </div>
                    <span className="text-xs mt-2 text-center">
                      {num === 1 && 'Личные данные'}
                      {num === 2 && 'Специальность'}
                      {num === 3 && 'Подтверждение'}
                    </span>
                  </div>
                ))}
                <div className="absolute top-6 left-0 right-0 h-0.5 bg-secondary -z-0" />
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  {step === 1 && 'Шаг 1: Личные данные'}
                  {step === 2 && 'Шаг 2: Выбор специальности'}
                  {step === 3 && 'Шаг 3: Подтверждение'}
                </CardTitle>
                <CardDescription>
                  {step === 1 && 'Введите ваши персональные данные'}
                  {step === 2 && 'Выберите программу обучения'}
                  {step === 3 && 'Проверьте данные перед отправкой'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {step === 1 && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Фамилия *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Имя *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="middleName">Отчество</Label>
                        <Input
                          id="middleName"
                          value={formData.middleName}
                          onChange={(e) => setFormData({ ...formData, middleName: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="birthDate">Дата рождения *</Label>
                        <Input
                          id="birthDate"
                          type="date"
                          value={formData.birthDate}
                          onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Телефон *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+7 (999) 123-45-67"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                        />
                      </div>
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="specialty">Специальность *</Label>
                        <Select
                          value={formData.specialty}
                          onValueChange={(value) => setFormData({ ...formData, specialty: value })}
                        >
                          <SelectTrigger id="specialty">
                            <SelectValue placeholder="Выберите специальность" />
                          </SelectTrigger>
                          <SelectContent>
                            {specialties.map((spec) => (
                              <SelectItem key={spec} value={spec}>
                                {spec}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="educationForm">Форма обучения *</Label>
                        <Select
                          value={formData.educationForm}
                          onValueChange={(value) => setFormData({ ...formData, educationForm: value })}
                        >
                          <SelectTrigger id="educationForm">
                            <SelectValue placeholder="Выберите форму обучения" />
                          </SelectTrigger>
                          <SelectContent>
                            {educationForms.map((form) => (
                              <SelectItem key={form} value={form}>
                                {form}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="financingType">Тип финансирования *</Label>
                        <Select
                          value={formData.financingType}
                          onValueChange={(value) => setFormData({ ...formData, financingType: value })}
                        >
                          <SelectTrigger id="financingType">
                            <SelectValue placeholder="Выберите тип финансирования" />
                          </SelectTrigger>
                          <SelectContent>
                            {financingTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="hasEGE"
                          checked={formData.hasEGE}
                          onCheckedChange={(checked) =>
                            setFormData({ ...formData, hasEGE: checked as boolean })
                          }
                        />
                        <Label htmlFor="hasEGE" className="cursor-pointer">
                          У меня есть результаты ЕГЭ
                        </Label>
                      </div>
                    </>
                  )}

                  {step === 3 && (
                    <>
                      <div className="space-y-4 p-6 bg-secondary/30 rounded-lg">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">ФИО</p>
                            <p className="font-medium">
                              {formData.lastName} {formData.firstName} {formData.middleName}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Дата рождения</p>
                            <p className="font-medium">{formData.birthDate}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Email</p>
                            <p className="font-medium">{formData.email}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Телефон</p>
                            <p className="font-medium">{formData.phone}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Специальность</p>
                            <p className="font-medium">{formData.specialty}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Форма обучения</p>
                            <p className="font-medium">{formData.educationForm}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Финансирование</p>
                            <p className="font-medium">{formData.financingType}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="consent"
                          checked={formData.consent}
                          onCheckedChange={(checked) =>
                            setFormData({ ...formData, consent: checked as boolean })
                          }
                          required
                        />
                        <Label htmlFor="consent" className="text-sm cursor-pointer">
                          Я согласен на обработку персональных данных и подтверждаю достоверность
                          предоставленной информации
                        </Label>
                      </div>
                    </>
                  )}

                  <div className="flex gap-4 pt-4">
                    {step > 1 && (
                      <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>
                        <Icon name="ChevronLeft" className="mr-2 h-4 w-4" />
                        Назад
                      </Button>
                    )}
                    {step < 3 ? (
                      <Button
                        type="button"
                        onClick={() => setStep(step + 1)}
                        className="ml-auto bg-accent hover:bg-accent/90 text-accent-foreground"
                      >
                        Далее
                        <Icon name="ChevronRight" className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        className="ml-auto bg-accent hover:bg-accent/90 text-accent-foreground"
                        disabled={!formData.consent}
                      >
                        Отправить заявку
                        <Icon name="Send" className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card className="mt-8 bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon name="Info" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Что дальше?</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Мы рассмотрим вашу заявку в течение 24 часов</li>
                      <li>• Вы получите письмо с подтверждением на указанный email</li>
                      <li>• Сотрудник приемной комиссии свяжется с вами для уточнения деталей</li>
                      <li>• Вам будут предоставлены инструкции по дальнейшим шагам</li>
                    </ul>
                  </div>
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
