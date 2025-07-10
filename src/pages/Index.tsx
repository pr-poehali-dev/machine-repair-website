import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Токарные станки",
      description: "Ремонт и модернизация токарных станков любой сложности",
      icon: "Settings",
    },
    {
      title: "Фрезерные станки",
      description: "Профессиональное обслуживание фрезерного оборудования",
      icon: "Wrench",
    },
    {
      title: "Прессы",
      description: "Восстановление и улучшение прессового оборудования",
      icon: "Hammer",
    },
    {
      title: "Листогибы",
      description: "Ремонт листогибочных машин и модернизация",
      icon: "Layers",
    },
    {
      title: "Лазерные станки",
      description: "Обслуживание лазерного оборудования высокой точности",
      icon: "Zap",
    },
    {
      title: "Электроэрозионные",
      description: "Ремонт электроэрозионного оборудования",
      icon: "Cpu",
    },
  ];

  const cases = [
    {
      title: "Модернизация токарного станка 1К62",
      description: "Установка ЧПУ системы и повышение точности обработки",
      result: "Увеличение производительности на 40%",
    },
    {
      title: "Капитальный ремонт фрезерного станка",
      description: "Восстановление направляющих и шпиндельного узла",
      result: "Продление срока службы на 15 лет",
    },
    {
      title: "Модернизация листогибочного пресса",
      description: "Установка новой системы управления и датчиков",
      result: "Повышение точности гибки в 3 раза",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Wrench" size={32} className="text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">СтанкоСервис</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#cases"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Кейсы
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                О нас
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Профессиональный ремонт и модернизация станков
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Восстанавливаем и модернизируем токарные, фрезерные, прессы,
                листогибы, лазерные и электроэрозионные станки с гарантией
                качества
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Badge
                  variant="secondary"
                  className="bg-blue-500 hover:bg-blue-400"
                >
                  <Icon name="Award" size={16} className="mr-2" />
                  15+ лет опыта
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-blue-500 hover:bg-blue-400"
                >
                  <Icon name="Users" size={16} className="mr-2" />
                  500+ довольных клиентов
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-blue-500 hover:bg-blue-400"
                >
                  <Icon name="Shield" size={16} className="mr-2" />
                  Гарантия 2 года
                </Badge>
              </div>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Получить консультацию
              </Button>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/img/c21c8e07-eef3-43e3-b638-b5e9acacd919.jpg"
                  alt="Современное промышленное оборудование"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <Icon
                        name="Wrench"
                        size={32}
                        className="mx-auto mb-1 text-white"
                      />
                      <p className="text-xs text-white">Ремонт</p>
                    </div>
                    <div className="text-center">
                      <Icon
                        name="Cog"
                        size={32}
                        className="mx-auto mb-1 text-white"
                      />
                      <p className="text-xs text-white">Модернизация</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Оказываем полный спектр услуг по ремонту и модернизации
              промышленного оборудования
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border-gray-200"
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Icon
                        name={service.icon}
                        size={24}
                        className="text-blue-600"
                      />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Успешные кейсы
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Примеры наших работ и достигнутых результатов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <Card
                key={index}
                className="bg-white hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{caseItem.title}</CardTitle>
                  <CardDescription>{caseItem.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 text-green-600">
                    <Icon name="TrendingUp" size={16} />
                    <span className="font-semibold">{caseItem.result}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                О нашей компании
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Мы специализируемся на ремонте и модернизации промышленного
                оборудования уже более 15 лет. Наша команда состоит из опытных
                инженеров и техников, готовых решать задачи любой сложности.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-green-500"
                  />
                  <span>Высококвалифицированные специалисты</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-green-500"
                  />
                  <span>Современное диагностическое оборудование</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-green-500"
                  />
                  <span>Оригинальные запчасти и комплектующие</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-green-500"
                  />
                  <span>Гарантия на все виды работ</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Почему выбирают нас?
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">15+</div>
                    <div className="text-sm">лет опыта</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-sm">проектов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-sm">поддержка</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-sm">гарантия</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-300">
              Готовы обсудить ваш проект и предложить оптимальное решение
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Icon name="Phone" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p className="text-gray-300">+7 (495) 123-45-67</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Icon name="Mail" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300">info@stankoservice.ru</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Icon name="MapPin" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Адрес</h3>
              <p className="text-gray-300">г. Москва, ул. Промышленная, 15</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Оставить заявку
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Wrench" size={24} className="text-blue-600" />
              <span className="text-xl font-bold">СтанкоСервис</span>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 СтанкоСервис. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
