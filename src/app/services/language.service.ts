import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  currentLang: 'ru' | 'en' = 'en';

  private translations: Record<string, { en: string }> = {
    'Digital-агенство с экспертизой в': { en: 'Digital agency with expertise in' },
    'Стремимся к совершенству в решении ваших digital и IT задач, используя передовые методы и технологии.': { en: 'We strive for excellence in solving your digital and IT challenges using advanced methods and technologies.' },
    'Быстро': { en: 'Fast' },
    'Эффективно': { en: 'Efficiently' },
    'Надежно': { en: 'Reliably' },
    'Начать проект': { en: 'Start a project' },
    'Performance - маркетинге': { en: 'Performance marketing' },
    'Web-разработке': { en: 'Web development' },
    'Аndroid-разработке': { en: 'Android development' },
    'Business-анализе': { en: 'Business analytics' },
    'Комплексной упаковке': { en: 'Comprehensive packaging' },
    'Кто мы?': { en: 'Who are we?' },
    'Akordirect  - профессиональное digital-агентство разработки мобильных приложений и сайтов, специализирующееся на создании инновационных решений.': { en: 'Akordirect is a professional digital agency for mobile app and website development specializing in innovative solutions.' },
    'профессиональное digital-агентство разработки мобильных приложений и сайтов, специализирующееся на создании инновационных решений.': { en: 'professional digital agency for mobile app and website development specializing in innovative solutions.' },
    'Полный круг услуг': { en: 'Full range of services' },
    'Проводим полный цикл разработки – от концепции и дизайна до тестирования и поддержки.': { en: 'We handle the full development cycle—from concept and design to testing and support.' },
    'Инновационные решения': { en: 'Innovative solutions' },
    'Мы создаем  решения, помогающие вашему бизнесу выделяться в цифровом пространстве.': { en: 'We create solutions that help your business stand out in the digital space.' },
    'Постоянная коммуникация': { en: 'Constant communication' },
    'Регулярно информируем клиентов о ходе проекта и обеспечиваем открытое взаимодействие на всех этапах разработки.': { en: 'We regularly inform clients about project progress and maintain open communication at all stages.' },
    'Гибкость и масштабируемость': { en: 'Flexibility and scalability' },
    'Наши решения легко адаптируются в соответствии с ростом вашего бизнеса и изменяющимися требованиями рынка.': { en: 'Our solutions easily adapt to your business growth and changing market requirements.' },
    'Краткие сроки выполнения': { en: 'Short delivery times' },
    'Оптимизированные процессы разработки позволяют нам эффективно управлять временем и сдавать проекты точно в срок.': { en: 'Optimized development processes allow us to manage time efficiently and deliver projects on schedule.' },
    'Мы разрабатываем решения, подходящие для любых задач': { en: 'We develop solutions suitable for any task' },
    'повысить узнаваемость бренда': { en: 'increase brand awareness' },
    'интеграции с блогерами': { en: 'integration with bloggers' },
    'performance - трафик': { en: 'performance traffic' },
    'посев в telegram': { en: 'seeding in Telegram' },
    'быстро перейти в VK': { en: 'quickly switch to VK' },
    'снять рекламу': { en: 'shoot advertising' },
    'внедрить аналитику': { en: 'implement analytics' },
    'запустить продукт': { en: 'launch product' },
    'настройка интеграции': { en: 'integration setup' },
    'автоматизация процессов': { en: 'process automation' },
    'разработать ERP': { en: 'develop ERP' },
    'сделать чат-бот': { en: 'create chat-bot' },
    'спецпроекты в соцсетях': { en: 'special projects in social networks' },
    'запустить автоворонку': { en: 'launch auto funnel' },
    'разработка дизайна': { en: 'design development' },
    'создать сайт': { en: 'create a website' },
    'колсантинг': { en: 'consulting' },
    'Услуги': { en: 'Services' },
    'Наша команда готова взяться за проекты любого масштаба и сложности.': { en: 'Our team is ready to take on projects of any scale and complexity.' },
    'Реализуем проекты, воплощающие ваши уникальные идеи и видение.': { en: 'We implement projects that embody your unique ideas and vision.' },
    'Озвучить идею': { en: 'Share an idea' },
    'Технологии': { en: 'Technologies' },
    'Наши проекты': { en: 'Our projects' },
    'Еще проекты': { en: 'More projects' },
    'Присоединяйся к нашей команде!': { en: 'Join our team!' },
    'Ты мечтаешь о работе в динамичной и инновационной IT-компании?': { en: 'Dreaming of working in a dynamic and innovative IT company?' },
    'Тогда ты пришел по адресу!': { en: 'Then you’ve come to the right place!' },
    'Наша IT-команда ищет талантливых и амбициозных специалистов, готовых вместе с нами создавать технологии будущего.': { en: 'Our IT team is looking for talented and ambitious specialists ready to create future technologies with us.' },
    'Мы предлагаем:': { en: 'We offer:' },
    'Прохождение стажировки в режиме реальных проектов.': { en: 'Internship on real projects.' },
    'Возможность работать над захватывающими проектами в нашей IT-компании.': { en: 'Opportunity to work on exciting projects in our IT company.' },
    'Дружный коллектив единомышленников.': { en: 'Friendly team of like-minded people.' },
    'Профессиональное развитие и обучение.': { en: 'Professional growth and training.' },
    'Опишите свою задачу или вопрос в форме ниже': { en: 'Describe your task or question in the form below' },
    'Наши месседжеры': { en: 'Our messengers' },
    'Ваше имя': { en: 'Your name' },
    'Ваш телефон': { en: 'Your phone' },
    'Опишите задачу': { en: 'Describe the task' },
    'Например: “Нужно продвижение мобильного приложения нашего банка. Начиная от установок, заканчивая консалтингом и доработками онбординга пользователей приложения”.': { en: 'For example: “We need to promote our bank\'s mobile application, from installs to consulting and onboarding improvements.”' },
    'Я согласен на обработку персональных данных': { en: 'I agree to the processing of personal data' },
    'Отправить запрос': { en: 'Send request' },
    'О компании': { en: 'About' },
    'Проекты': { en: 'Projects' },
    '1. Упаковка и создание сайтов': { en: '1. Packaging and website creation' },
    '2. IOS & Android разработка': { en: '2. iOS & Android development' },
    '3. Автоматизация разработки': { en: '3. Development automation' },
    '4. Business Analytics': { en: '4. Business Analytics' },
    '5. Дизайн & брендинг': { en: '5. Design & branding' },
    'Мы создаем сайты, которые "упакованы" таким образом, чтобы посетители не только с интересом знакомились с брендом, но и были готовы совершать покупки или заказывать услуги.': { en: 'We create websites that are "packaged" so visitors are not only interested in the brand but also ready to make purchases or order services.' },
    'Качественная мобильная разработка позволяет создавать удобные и функциональные приложения, которые помогают бизнесу эффективно взаимодействовать с клиентами на смартфонах и планшетах': { en: 'High-quality mobile development allows the creation of convenient and functional apps that help businesses interact effectively with clients on smartphones and tablets' },
    'Разработка сервисов, автоматизация и интеграция процессов разработки.': { en: 'Development of services, automation and integration of development processes.' },
    'Итеративного исследование и анализ  показателей бизнеса с целью получения инсайтов и разработки бизнес-планирования.': { en: 'Iterative research and analysis of business metrics to gain insights and develop business planning.' },
    'Создаем дизайны,  отличающиеся яркой визуальной идентичностью и сильным характером, которые будут выделять бренд среди конкурентов и запоминаться целевой аудитории.': { en: 'We create designs with bright visual identity and strong character that make the brand stand out among competitors and remain memorable to the target audience.' },
  };

  setLanguage(lang: 'ru' | 'en') {
    this.currentLang = lang;
  }

  translate(text: string): string {
    if (this.currentLang === 'ru') {
      return text;
    }
    return this.translations[text]?.en || text;
  }
}
