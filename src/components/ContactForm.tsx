import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Ваше имя *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Иван Иванов"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ivanov@example.com"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Телефон</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+7 (999) 123-45-67"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Сообщение *</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Опишите ваш вопрос подробно..."
          rows={6}
          required
        />
      </div>
      <div className="flex items-start space-x-2">
        <input type="checkbox" id="consent" className="mt-1" required />
        <Label htmlFor="consent" className="text-sm text-muted-foreground cursor-pointer">
          Я согласен на обработку персональных данных
        </Label>
      </div>
      <Button type="submit" size="lg" className="w-full">
        Отправить сообщение
        <Icon name="Send" className="ml-2" size={20} />
      </Button>
    </form>
  );
}
