import { FAQ } from "@/types";

export const faqs: FAQ[] = [
  {
    question: "Jak szybko możecie przyjechać?",
    answer: "W większości przypadków jesteśmy w stanie przyjechać tego samego dnia lub następnego dnia roboczego. Pracujemy 7 dni w tygodniu, w godzinach 6:00-22:00, więc jesteśmy elastyczni i dostosowujemy się do Twoich potrzeb. Skontaktuj się z nami pod numerem 733 435 333, aby ustalić dokładny termin.",
    category: "ogólne",
  },
  {
    question: "Jakie miasto obsługujecie?",
    answer: "Głównie działamy w Lublinie i okolicach, w tym: Radzyń Podlaski, Kock, Lubartów, Świdnik, Bychawa, Nałęczów, Puławy. Jesteśmy jednak elastyczni - jeśli potrzebujesz transportu na większą odległość, skontaktuj się z nami, a ustalimy szczegóły.",
    category: "obszar",
  },
  {
    question: "Czy pomagacie przy pakowaniu?",
    answer: "Tak, oferujemy usługę pakowania rzeczy. Możemy zapakować Twoje przedmioty w kartony, zabezpieczyć delikatne elementy folią bąbelkową oraz odpowiednio przygotować meble do transportu. To dodatkowa usługa - cenę ustalamy indywidualnie w zależności od zakresu prac.",
    category: "usługi",
  },
  {
    question: "Co zrobicie ze śmieciami po opróżnieniu mieszkania?",
    answer: "Wszystkie odpady trafiają do legalnej utylizacji. Segregujemy odpady i przekazujemy je do odpowiednich punktów - PSZOK (Punkt Selektywnej Zbiórki Odpadów Komunalnych) lub innych autoryzowanych miejsc utylizacji. Dbamy o środowisko i przestrzegamy wszystkich przepisów.",
    category: "wywóz",
  },
  {
    question: "Czy mogę dostać wycenę przez telefon?",
    answer: "Tak, możesz zadzwonić pod numer 733 435 333 i otrzymać wstępną wycenę. Najdokładniejszą wycenę jesteśmy w stanie podać po zobaczeniu zakresu prac - czasami można to zrobić na podstawie zdjęć przesłanych przez WhatsApp lub email. Skorzystaj również z naszego kalkulatora online.",
    category: "cennik",
  },
  {
    question: "Czy pracujecie w weekendy?",
    answer: "Tak, pracujemy 7 dni w tygodniu, również w soboty i niedziele. Nasze godziny pracy to 6:00-22:00. Rozumiemy, że weekendy to często jedyny czas, kiedy możesz zająć się przeprowadzką lub wywozem rzeczy.",
    category: "ogólne",
  },
  {
    question: "Jak przygotować się do opróżnienia mieszkania?",
    answer: "Nie musisz nic specjalnie przygotowywać - zajmiemy się wszystkim. Jeśli są rzeczy, które chcesz zachować, wskaż nam je przed rozpoczęciem prac. Jeśli masz jakieś wartościowe przedmioty do sprzedaży, możemy je wykupić lub pomóc w ich sprzedaży. Resztę wyniesiemy i legalnie zutylizujemy.",
    category: "wywóz",
  },
  {
    question: "Czy mogę śledzić cenę w trakcie pracy?",
    answer: "Przed rozpoczęciem prac zawsze ustalamy wstępną cenę lub zakres cenowy. Jeśli w trakcie prac okaże się, że zakres jest większy niż szacowany, zawsze informujemy o tym klienta i uzgadniamy dodatkowe koszty. Stawiamy na transparentność i brak ukrytych kosztów.",
    category: "cennik",
  },
  {
    question: "Czy wywozicie gruz budowlany?",
    answer: "Tak, zajmujemy się wywozem gruzu budowlanego po remontach i budowach. Dysponujemy odpowiednim transportem i przekazujemy gruz do legalnej utylizacji. Cena zależy od ilości gruzu (objętość w m³) i miejsca załadunku.",
    category: "wywóz",
  },
];

export function getFaqsByCategory(category: string): FAQ[] {
  return faqs.filter((faq) => faq.category === category);
}

export const faqCategories = [
  { id: "ogólne", label: "Ogólne" },
  { id: "cennik", label: "Cennik" },
  { id: "usługi", label: "Usługi" },
  { id: "wywóz", label: "Wywóz i utylizacja" },
  { id: "obszar", label: "Obszar działania" },
];
