import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Какие документы нужны для поступления?",
    answer:
      "Для поступления необходимы: паспорт, аттестат об основном общем или среднем общем образовании, 6 фотографий 3x4, медицинская справка формы 086/у, СНИЛС.",
  },
  {
    question: "Есть ли общежитие?",
    answer:
      "Да, учебное заведение предоставляет общежитие для иногородних студентов. Количество мест ограничено, распределение происходит в порядке очереди.",
  },
  {
    question: "Какова стоимость обучения?",
    answer:
      "Обучение проводится на бюджетной основе (бесплатно) и на платной основе. Стоимость контракта зависит от специальности и составляет от 35 000 до 55 000 рублей в год.",
  },
  {
    question: "Как проходит приёмная кампания?",
    answer:
      "Приём документов начинается 20 июня и заканчивается 15 августа. Зачисление происходит на основе среднего балла аттестата. Результаты публикуются на сайте.",
  },
  {
    question: "Можно ли перевестись из другого учебного заведения?",
    answer:
      "Да, перевод возможен при наличии свободных мест на курсе. Необходимо предоставить академическую справку и пройти процедуру перезачёта дисциплин.",
  },
];

interface FAQProps {
  className?: string;
}

export default function FAQ({ className = "" }: FAQProps) {
  return (
    <div className={className}>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqData.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border rounded-lg px-6 bg-card"
          >
            <AccordionTrigger className="text-left hover:no-underline py-4">
              <span className="font-semibold">{item.question}</span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
