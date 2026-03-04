// 1. O'zgaruvchilar (Eng tepada)
let currentImages = []
let currentIdx = 0

// 2. Tarjimalar obyekti
const translations = {
	uz: {
		'nav-about': 'Kompaniya haqida',
		'nav-services': 'Xizmatlar',
		'nav-advantages': 'Afzalliklar',
		'nav-projects': 'Loyihalar',
		'nav-contacts': 'Kontaktlar',
		'nav-calc-btn': 'Narxini hisoblatish',
		'hero-title': 'Sizning biznesingiz va uyingiz uchun quyosh energiyasi',
		'hero-desc':
			"Sifat kafolati bilan quyosh panellarini professional o'rnatish. Elektr energiyasi xarajatlarini 90% gacha kamaytiring va kelajakka sarmoya kiriting.",
		'hero-calc-btn': 'Bepul hisob-kitob olish',
		'hero-consult-btn': 'Konsultatsiya buyurish',
		'stat-years': 'yildan ortiq tajriba',
		'stat-projects': 'amalga oshirilgan loyihalar',
		'stat-warranty': 'yillik kafolat',
		'about-title': 'Kompaniya haqida',
		'about-p1':
			"Biz — qayta tiklanuvchi energiya sohasida 10 yildan ortiq tajribaga ega professionallar jamoasimiz. Tijorat va xususiy ob'ektlar uchun quyosh elektr stansiyalarini loyihalash va o'rnatishga ixtisoslashganmiz.",
		'about-p2':
			"Kompaniyamiz yuzlab mijozlarga toza energiyaga o'tishda, elektr xarajatlarini sezilarli darajada kamaytirishda va atrof-muhitni muhofaza qilishga hissa qo'shishda yordam berdi.",
		'mission-title': 'Bizning missiyamiz',
		'mission-text':
			"Toza energiyani hamma uchun ochiq qilish, energetik mustaqillikni ta'minlash va atrof-muhitga g'amxo'rlik qilish.",
		'quality-title': 'Sifat',
		'quality-text':
			'Faqat jahon miqyosidagi nufuzli uskunalar ishlab chiqaruvchilari bilan ishlaymiz. Barcha ishlarga kengaytirilgan kafolat beramiz.',
		'approach-title': 'Individual yondashuv',
		'approach-text':
			'Har bir loyiha takrorlanmas. Biz ehtiyojlarni sinchiklab tahlil qilamiz va vazifalaringiz hamda byudjetingizga mos optimal yechimlarni taklif etamiz.',
		'promo-title': 'Birgalikda yashil kelajakni quramiz',
		'promo-text':
			"O'rnatilgan har bir quyosh paneli — toza sayyora va energetik mustaqillik sari tashlangan qadamdir.",
		'services-title': 'Bizning xizmatlar',
		'services-subtitle':
			"Quyosh elektr stansiyalarini loyihalash, o'rnatish va texnik xizmat ko'rsatish bo'yicha to'liq xizmatlar majmuasi",
		'service-biz-title': 'Biznes uchun quyosh stansiyalari',
		'service-biz-desc':
			"Sanoat quyosh elektr stansiyalarini loyihalash va o'rnatish. 3 yildan boshlanuvchi o'zini oqlash muddati. Elektr xarajatlarini 90% gacha kamaytirish.",
		'service-biz-list-1': 'Quvvati 30 kVt dan boshlanadi',
		'service-biz-list-2': 'Sanoat uskunalari',
		'service-biz-list-3': 'Masofaviy monitoring',
		'service-biz-list-4': "Texnik xizmat ko'rsatish",
		'service-home-title': 'Uy uchun quyosh panellari',
		'service-home-desc':
			"Xususiy uyning avtonom energiya ta'minoti. Markaziy elektr tarmog'idan to'liq yoki qisman mustaqillik.",
		'service-home-list-1': 'Quvvati 3 kVt dan boshlanadi',
		'service-home-list-2': 'Chiroyli dizayn',
		'service-home-list-3': 'Shovqinsiz ishlash',
		'service-home-list-4': 'Mobil ilova',
		'service-design-title': 'Tizimlarni loyihalash',
		'service-design-desc':
			"Ob'ektning barcha xususiyatlari va buyurtmachining talablarini hisobga olgan holda quyosh stansiyalarini kompleks loyihalash.",
		'service-design-list-1': 'Quvvatni hisoblash',
		'service-design-list-2': "Energiya iste'moli tahlili",
		'service-design-list-3': '3D vizualizatsiya',
		'service-design-list-4': 'Hujjatlarni muvofiqlashtirish',
		'service-support-title': "Xizmat ko'rsatish va qo'llab-quvvatlash",
		'service-support-desc':
			'Quyosh elektr stansiyalarining kafolatli va kafolatdan keyingi xizmati. Nosozliklarni tezkor bartaraf etish.',
		'service-support-list-1': 'Muntazam diagnostika',
		'service-support-list-2': 'Panellarni tozalash',
		'service-support-list-3': 'Komponentlarni almashtirish',
		'service-support-list-4': '24/7 texnik yordam',
		'consult-title': 'Bepul konsultatsiya va hisob-kitob',
		'consult-subtitle':
			"O'z ob'ektingiz uchun quyosh elektr stansiyasi narxini mutlaqo bepul hisoblating va mutaxassis maslahatini oling",
		'consult-card1-title': 'Ekspert maslahati',
		'consult-card1-text':
			'Mutaxassisimiz barcha savollaringizga javob beradi va maqbul yechimni tanlashda yordam beradi',
		'consult-card2-title': 'Aniq hisob-kitob',
		'consult-card2-text':
			"Tizim quvvati, uskunalar narxi va loyihaning o'zini oqlash muddatini hisoblab beramiz",
		'consult-card3-title': 'Tijorat taklifi',
		'consult-card3-text':
			"Uskunalar tavsifi va ish shartlari ko'rsatilgan batafsil tijorat taklifini tayyorlaymiz",
		'consult-footer-note': '⚡ Ish vaqtida 15 daqiqa ichida javob beramiz',
		'adv-title': 'Bizning afzalliklarimiz',
		'adv-subtitle':
			"Nima uchun 500 dan ortiq mijoz quyosh elektr stansiyalarini o'rnatishda bizni tanladi",
		'adv-card1-title': 'Sertifikatlangan mutaxassislar',
		'adv-card1-text':
			'Muhandislarimiz xalqaro sertifikatlarga ega va muntazam ravishda uskuna ishlab chiqaruvchilari bazasida malaka oshiradilar',
		'adv-card2-title': 'Sifatli uskunalar',
		'adv-card2-text':
			'Faqat jahonning yetakchi brendlari bilan ishlaymiz: Tier 1 panellari, Huawei, SolarEdge, Fronius invertorlari',
		'adv-card3-title': 'Tayyor holda topshirish (Key ready)',
		'adv-card3-text':
			"Loyihalashdan tortib, tarmoqqa ulash va tizimni ishga tushirishgacha bo'lgan barcha jarayonlarni o'z zimmamizga olamiz",
		'adv-card4-title': '25 yil kafolat',
		'adv-card4-text':
			"Uskunalar va montaj ishlariga kengaytirilgan kafolat. Barcha xavflarni sug'urtalash",
		'adv-card5-title': 'Tajriba va ekspertiza',
		'adv-card5-text-1': 'Bozorda 10 yildan ortiq',
		'adv-card5-text-2':
			'Biznes va xususiy uylar uchun 500 dan ortiq amalga oshirilgan loyihalar',
		'adv-card6-title': 'Tezkor montaj muddati',
		'adv-card6-text':
			"Uy stansiyasini o'rnatish — 2-3 kun. Tijorat ob'ekti — 1 haftadan boshlab",
		'stat-1': 'yillik tajriba',
		'stat-2': 'loyihalar',
		'stat-3': "MVt o'rnatilgan",
		'stat-4': 'mamnun mijozlar',
		'port-title': 'Bizning loyihalarimiz',
		'port-subtitle':
			"Butun O'zbekiston bo'ylab biznes va xususiy uylar uchun amalga oshirilgan quyosh elektr stansiyalari loyihalari",
		'port-view-photo': "Rasmlarni ko'rish",
		'port-photo-count': 'rasm',
		'unit-kw': 'kVt',
		'loc-tashkent': 'Toshkent shahri',
		'loc-fergana': "Farg'ona shahri",
		'loc-namangan': 'Namangan shahri',
		'loc-urgench': 'Urganch shahri',
		'loc-kibray': 'Qibray tumani',
		'p1-name': 'ASKUE binosi',
		'p2-name': "HET AJ ma'muriy binosi",
		'p3-name': 'Velosiped ishlab chiqarish sexi',
		'p4-name': "Sharqshunoslik instituti ma'muriy binosi",
		'p5-name': "Yoqilg'i quyish shoxobchasi",
		'p6-name': "Yog'-moy kombinati",
		'p7-name': 'Eco City turar-joy majmuasi',
		'p8-name': "To'qimachilik fabrikasi",
		'port-more-text': "Ishlarimizdan ko'proq namuna ko'rmoqchimisiz?",
		'port-contact-btn': "Biz bilan bog'laning",
		'form-title': 'Konsultatsiya olish',
		'form-desc':
			"Formani to'ldiring va mutaxassisimiz siz bilan bepul konsultatsiya uchun bog'lanadi",
		'name-label': 'Ismingiz *',
		'name-placeholder': 'Aziz Rahimov',
		'about-placeholder': 'Loyihangiz haqida ko`proq ma`lumot bering...',
		'phone-label': 'Telefon',
		'project-label': 'Loyiha turi *',
		'message-label': 'Xabar',
		'for-home': 'Xususiy uy uchun',
		'for-business': 'Biznes uchun',
		'submit-btn': 'Ariza yuborish',
		'footer-label':
			'Tugmani bosish orqali siz bizning maxfiylik siyosatimizga rozilik bildirasiz. Mutaxassisimiz ish vaqtida 15 daqiqa ichida siz bilan bog`lanadi.',
		'test-title': 'Mijozlarimiz fikrlari',
		'test-subtitle': "Butun mamlakat bo'ylab yuzlab mijozlar bizga ishonishadi",
		'test1-text':
			"\"12 kVt quvvatga ega quyosh stansiyasini o'rnatdik. Tizim a'lo darajada ishlayapti, elektr to'lovlari 80% ga kamaydi. O'rnatish 3 kunda bajarildi, hammasi ozoda va professional.\"",
		'test1-name': 'Aziz Rahimov',
		'test1-pos': 'Hovli uyi egasi',
		'test-cat-private': 'Xususiy uy',
		'test2-text':
			'"Sifatli ish uchun jamoaga rahmat! Zavodimiz uchun 300 kVt quvvatli stansiya o\'rnatdik. Qoplash muddati 4 yilda kutilmoqda. Barcha bosqichlarda professional yondashuv."',
		'test2-name': 'Dilshod Karimov',
		'test2-pos': 'Ishlab chiqarish direktori',
		'test-cat-biz': 'Ishlab chiqarish korxonasi',
		'test3-text':
			'"Quyosh panellarini o\'rnatish uchun pudratchini uzoq vaqt tanladim. Shu kompanidada to\'xtaldim va afsuslanmadim. Batafsil maslahat, aniq hisob-kitob, sifatli montaj. Tavsiya qilaman!"',
		'test3-name': 'Shahnoza Aliyeva',
		'test3-pos': 'Kottej egasi',
		'test-cat-cottage': 'Shahar tashqarisidagi kottej',
		'cont-title': 'Kontaktlar',
		'cont-subtitle': "Biz bilan o'zingizga qulay usulda bog'laning",
		'cont-phone-title': 'Telefon',
		'cont-phone-note': "O'zbekiston bo'ylab qo'ng'iroq bepul",
		'cont-email-title': 'Email',
		'cont-email-note': 'Bir soat ichida javob beramiz',
		'cont-addr-title': 'Ofis manzili',
		'cont-addr-text':
			'Toshkent sh., Mirobod ko\'ch., 5-uy\n"Solnechniy" biznes markazi, 201-ofis',
		'cont-hours-title': 'Ish tartibi',
		'cont-hours-weekdays': 'Dush-Jum: 9:00 - 19:00',
		'cont-hours-sat': 'Shan: 10:00 - 16:00',
		'cont-hours-sun': 'Yak: dam olish kuni',
		'cta-title': "Quyosh energiyasiga o'tishga tayyormisiz?",
		'cta-subtitle':
			'Hoziroq bepul maslahat va kelajakdagi elektr stansiyangiz narxini aniq hisob-kitobini oling',
		'cta-btn': 'Sorov qoldirish',
		'foot-desc':
			"Biznes va xususiy uylar uchun quyosh panellarini professional o'rnatish. O'zbekiston bo'ylab 10 yildan ortiq tajriba va 500 dan ortiq amalga oshirilgan loyihalar",
		'foot-links-title': 'Tezkor havolalar',
		'foot-addr-text':
			'Toshkent sh., Nukus ko\'ch., 56\n"Solnechniy" biznes markazi',
		'foot-rights': 'Barcha huquqlar himoyalangan.',
		'foot-policy': 'Maxfiylik siyosati',
		'foot-terms': 'Foydalanish shartlari',
	},
	ru: {
		'nav-about': 'О компании',
		'nav-services': 'Услуги',
		'nav-advantages': 'Преимущества',
		'nav-projects': 'Проекты',
		'nav-contacts': 'Контакты',
		'nav-calc-btn': 'Заказать расчет',
		'hero-title': 'Энергия Солнца для Вашего Бизнеса и Дома',
		'hero-desc':
			'Профессиональная установка солнечных панелей с гарантией качества. Снизьте расходы на электроэнергию до 90% и инвестируйте в будущее.',
		'hero-calc-btn': 'Получить бесплатный расчет',
		'hero-consult-btn': 'Заказать консультацию',
		'stat-years': 'лет на рынке',
		'stat-projects': 'реализованных проектов',
		'stat-warranty': 'лет гарантии',
		'about-title': 'О компании',
		'about-p1':
			'Мы — команда профессионалов с более чем 10-летним опытом в области возобновляемой энергетики. Специализируемся на проектировании и установке солнечных электростанций для коммерческих и частных объектов.',
		'about-p2':
			'Наша компания помогла сотням клиентов перейти на чистую энергию, значительно снизить расходы на электричество и внести вклад в защиту окружающей среды.',
		'mission-title': 'Наша миссия',
		'mission-text':
			'Сделать чистую энергию доступной для каждого, обеспечивая энергетическую независимость и заботу об окружающей среде.',
		'quality-title': 'Качество',
		'quality-text':
			'Работаем только с проверенными производителями оборудования мирового уровня. Предоставляем расширенную гарантию на все работы.',
		'approach-title': 'Индивидуальный подход',
		'approach-text':
			'Каждый проект уникален. Мы тщательно анализируем потребности и предлагаем оптимальные решения под ваши задачи и бюджет.',
		'promo-title': 'Вместе создаем зеленое будущее',
		'promo-text':
			'Каждая установленная солнечная панель — это шаг к чистой планете и энергетической независимости.',
		'services-title': 'Наши услуги',
		'services-subtitle':
			'Полный спектр услуг по проектированию, установке и обслуживанию солнечных электростанций под ключ',
		'service-biz-title': 'Солнечные станции для бизнеса',
		'service-biz-desc':
			'Проектирование и установка промышленных солнечных электростанций. Окупаемость от 3-х лет. Снижение расходов на электроэнергию до 90%.',
		'service-biz-list-1': 'Мощность от 30 кВт',
		'service-biz-list-2': 'Промышленное оборудование',
		'service-biz-list-3': 'Удаленный мониторинг',
		'service-biz-list-4': 'Техническое обслуживание',
		'service-home-title': 'Солнечные панели для дома',
		'service-home-desc':
			'Автономное энергоснабжение частного дома. Полная или частичная независимость от центральной сети электроснабжения.',
		'service-home-list-1': 'Мощность от 3 кВт',
		'service-home-list-2': 'Красивый дизайн',
		'service-home-list-3': 'Тихая работа',
		'service-home-list-4': 'Мобильное приложение',
		'service-design-title': 'Проектирование систем',
		'service-design-desc':
			'Комплексное проектирование солнечных электростанций с учетом всех особенностей объекта и требований заказчика.',
		'service-design-list-1': 'Расчет мощности',
		'service-design-list-2': 'Анализ энергопотребления',
		'service-design-list-3': '3D визуализация',
		'service-design-list-4': 'Согласование документов',
		'service-support-title': 'Обслуживание и поддержка',
		'service-support-desc':
			'Гарантийное и постгарантийное обслуживание солнечных электростанций. Оперативное устранение неисправностей.',
		'service-support-list-1': 'Регулярная диагностика',
		'service-support-list-2': 'Очистка панелей',
		'service-support-list-3': 'Замена компонентов',
		'service-support-list-4': 'Техподдержка 24/7',
		'consult-title': 'Бесплатная консультация и расчет',
		'consult-subtitle':
			'Получите профессиональную консультацию и точный расчет стоимости солнечной электростанции для вашего объекта абсолютно бесплатно',
		'consult-card1-title': 'Консультация эксперта',
		'consult-card1-text':
			'Наш специалист ответит на все вопросы и поможет выбрать оптимальное решение',
		'consult-card2-title': 'Точный расчет стоимости',
		'consult-card2-text':
			'Рассчитаем мощность системы, стоимость оборудования и срок окупаемости',
		'consult-card3-title': 'Коммерческое предложение',
		'consult-card3-text':
			'Подготовим подробное КП с описанием оборудования и условий работы',
		'consult-footer-note': '⚡ Ответим в течение 15 минут в рабочее время',
		'adv-title': 'Наши преимущества',
		'adv-subtitle':
			'Почему более 500 клиентов выбрали нас для установки солнечных электростанций',
		'adv-card1-title': 'Сертифицированные специалисты',
		'adv-card1-text':
			'Наши инженеры имеют международные сертификаты и регулярно проходят обучение у производителей оборудования',
		'adv-card2-title': 'Качественное оборудование',
		'adv-card2-text':
			'Работаем только с топовыми мировыми брендами: Tier 1 панели, инверторы Huawei, SolarEdge, Fronius',
		'adv-card3-title': 'Установка под ключ',
		'adv-card3-text':
			'Берем на себя весь процесс: от проектирования до подключения и запуска системы в эксплуатацию',
		'adv-card4-title': 'Гарантия 25 лет',
		'adv-card4-text':
			'Расширенная гарантия на оборудование и монтажные работы. Страхование всех рисков',
		'adv-card5-title': 'Опыт и экспертиза',
		'adv-card5-text-1': 'Более 10 лет на рынке',
		'adv-card5-text-2':
			'500+ реализованных проектов для бизнеса и частных домов',
		'adv-card6-title': 'Быстрые сроки монтажа',
		'adv-card6-text':
			'Установка домашней станции — 2-3 дня. Коммерческого объекта — от 1 недели',
		'stat-1': 'лет опыта',
		'stat-2': 'проектов',
		'stat-3': 'МВт установлено',
		'stat-4': 'довольных клиентов',
		'port-title': 'Наши проекты',
		'port-subtitle':
			'Реализованные проекты солнечных электростанций для бизнеса и частных домов по всему Узбекистану',
		'port-view-photo': 'Смотреть фото',
		'port-photo-count': 'фото',
		'unit-kw': 'кВт',
		'loc-tashkent': 'город Ташкент',
		'loc-fergana': 'город Фергана',
		'loc-namangan': 'город Наманган',
		'loc-urgench': 'город Ургенч',
		'loc-kibray': 'город Кибрай',
		'p1-name': 'здание АСКУЭ',
		'p2-name': 'Административное здание АО РЭС',
		'p3-name': 'Цех по производству велосипедов',
		'p4-name': 'Административное здание Института востоковедения',
		'p5-name': 'Заправочная станция',
		'p6-name': 'Масложиркомбинат',
		'p7-name': 'Жилой комплекс Эко город',
		'p8-name': 'Текстильная фабрика',
		'port-more-text': 'Хотите увидеть больше примеров наших работ?',
		'port-contact-btn': 'Свяжитесь с нами',
		'form-title': 'Получить консультацию',
		'form-desc':
			'Заполните форму, и наш специалист свяжется с вами для бесплатной консультации',
		'name-label': 'Ваше имя *',
		'name-placeholder': 'Азиз Рахимов',
		'about-placeholder': 'Расскажите подробнее о вашем проекте...',
		'phone-label': 'Телефон',
		'project-label': 'Тип проекта *',
		'message-label': 'Сообщение',
		'for-business': 'Для бизнеса',
		'for-home': 'Для частного дома',
		'submit-btn': 'Отправить заявку',
		'footer-label':
			'Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности. Наш специалист свяжется с вами в течение 15 минут в рабочее время.',
		'test-title': 'Отзывы наших клиентов',
		'test-subtitle': 'Нам доверяют сотни клиентов по всей стране',
		'test1-text':
			'"Установили солнечную станцию мощностью 12 кВт. Система работает отлично, счета за электричество сократились на 80%. Монтаж выполнили за 3 дня, все аккуратно и профессионально."',
		'test1-name': 'Азиз Рахимов',
		'test1-pos': 'Владелец загородного дома',
		'test-cat-private': 'Частный дом',
		'test2-text':
			'"Спасибо команде за качественную работу! Установили станцию на 300 кВт для нашего завода. Окупаемость прогнозируется через 4 года. Профессиональный подход на всех этапах."',
		'test2-name': 'Дилшод Каримов',
		'test2-pos': 'Директор производства',
		'test-cat-biz': 'Производственное предприятие',
		'test3-text':
			'"Долго выбирала подрядчика для установки солнечных панелей. Остановилась на этой компании и не пожалела. Подробная консультация, точный расчет, качественный монтаж. Рекомендую!"',
		'test3-name': 'Шахноза Алиева',
		'test3-pos': 'Владелец коттеджа',
		'test-cat-cottage': 'Загородный коттедж',
		'cont-title': 'Контакты',
		'cont-subtitle': 'Свяжитесь с нами удобным для вас способом',
		'cont-phone-title': 'Телефон',
		'cont-phone-note': 'Бесплатный звонок по Узбекистану',
		'cont-email-title': 'Email',
		'cont-email-note': 'Ответим в течение часа',
		'cont-addr-title': 'Адрес офиса',
		'cont-addr-text': 'г. Ташкент, ул. Мирабад, д. 5\nБЦ "Солнечный", офис 201',
		'cont-hours-title': 'Режим работы',
		'cont-hours-weekdays': 'Пн-Пт: 9:00 - 19:00',
		'cont-hours-sat': 'Сб: 10:00 - 16:00',
		'cont-hours-sun': 'Вс: выходной',
		'cta-title': 'Готовы перейти на солнечную энергию?',
		'cta-subtitle':
			'Получите бесплатную консультацию и точный расчет стоимости вашей будущей электростанции прямо сейчас',
		'cta-btn': 'Оставить заявку',
		'foot-desc':
			'Профессиональная установка солнечных панелей для бизнеса и частных домов. Более 10 лет опыта и 500+ реализованных проектов по всему Узбекистану',
		'foot-links-title': 'Быстрые ссылки',
		'foot-addr-text': 'г. Ташкент, ул. Нукус, 56\nБЦ "Солнечный"',
		'foot-rights': 'Все права защищены.',
		'foot-policy': 'Политика конфиденциальности',
		'foot-terms': 'Условия использования',
	},
}

// 3. Mobil menu elementlari
const menuBtn = document.getElementById('menu-btn')
const mobileMenu = document.getElementById('mobile-menu')
const menuIcon = document.getElementById('menu-icon')
const closeIcon = document.getElementById('close-icon')

if (menuBtn) {
	menuBtn.addEventListener('click', () => {
		const isHidden = mobileMenu.classList.toggle('hidden')
		menuIcon.classList.toggle('hidden', !isHidden)
		closeIcon.classList.toggle('hidden', isHidden)
	})
}

// 4. Global funksiyalar (window-ga bog'laymiz)
window.changeLanguage = function (lang) {
	document.querySelectorAll('[data-i18n]').forEach(element => {
		const key = element.getAttribute('data-i18n')
		if (translations[lang] && translations[lang][key]) {
			element.textContent = translations[lang][key]
		}
	})

	document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
		const key = element.getAttribute('data-i18n-placeholder')
		if (translations[lang] && translations[lang][key]) {
			element.placeholder = translations[lang][key]
		}
	})

	localStorage.setItem('selectedLang', lang)
}

window.scrollToSection = function (id) {
	const element = document.getElementById(id)
	if (element) {
		element.scrollIntoView({ behavior: 'smooth' })
		mobileMenu.classList.add('hidden')
		menuIcon.classList.remove('hidden')
		closeIcon.classList.add('hidden')
	}
}

window.scrollToForm = function () {
	const form = document.getElementById('lead-form')
	if (form) {
		form.scrollIntoView({ behavior: 'smooth' })
		mobileMenu.classList.add('hidden')
		menuIcon.classList.remove('hidden')
		closeIcon.classList.add('hidden')
	}
}

window.openGallery = function (title, capacity, location, images) {
	currentImages = images
	currentIdx = 0
	document.getElementById('modalTitle').textContent = title
	document.getElementById('totalIdxDisplay').textContent = images.length
	window.updateModalView()
	const modal = document.getElementById('portfolioModal')
	modal.classList.remove('hidden')
	modal.classList.add('flex')
	document.body.style.overflow = 'hidden'
}

window.closeGallery = function () {
	const modal = document.getElementById('portfolioModal')
	modal.classList.add('hidden')
	modal.classList.remove('flex')
	document.body.style.overflow = ''
}

window.changeImage = function (dir) {
	currentIdx = (currentIdx + dir + currentImages.length) % currentImages.length
	window.updateModalView()
}

window.updateModalView = function () {
	const mainImg = document.getElementById('mainImage')
	mainImg.style.opacity = '0'
	setTimeout(() => {
		mainImg.src = currentImages[currentIdx]
		mainImg.style.opacity = '1'
	}, 150)

	document.getElementById('currentIdxDisplay').textContent = currentIdx + 1

	// Thumbnail-larni generatsiya qilish
	const thumbContainer = document.getElementById('thumbnailContainer')
	if (thumbContainer) {
		thumbContainer.innerHTML = ''
		currentImages.forEach((img, idx) => {
			const thumb = document.createElement('div')
			thumb.className = `flex-shrink-0 w-20 h-16 rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${
				idx === currentIdx
					? 'border-blue-600 scale-105'
					: 'border-transparent opacity-60'
			}`
			thumb.onclick = () => {
				currentIdx = idx
				window.updateModalView()
			}
			thumb.innerHTML = `<img src="${img}" class="w-full h-full object-cover">`
			thumbContainer.appendChild(thumb)
		})
	}

	const dotsContainer = document.getElementById('modalDots')
	if (dotsContainer) {
		dotsContainer.innerHTML = ''
		currentImages.forEach((_, idx) => {
			const dot = document.createElement('div')
			dot.className = `h-1.5 rounded-full transition-all ${
				idx === currentIdx ? 'w-8 bg-white' : 'w-2 bg-white/40'
			}`
			dotsContainer.appendChild(dot)
		})
	}
}

window.handleFormSubmit = function (e) {
	e.preventDefault()
	const btn = document.getElementById('submit-btn')
	const btnText = document.getElementById('btn-text')
	const form = document.getElementById('main-form')
	const header = document.getElementById('form-header')
	const successMsg = document.getElementById('success-message')

	btn.disabled = true
	if (btnText) btnText.innerText = 'Yuborilmoqda...'

	setTimeout(() => {
		form.classList.add('hidden')
		if (header) header.classList.add('hidden')
		successMsg.classList.remove('hidden')
		form.reset()
		btn.disabled = false
		if (btnText) btnText.innerText = 'Ariza yuborish'
	}, 1500)
}

window.resetForm = function () {
	document.getElementById('main-form').classList.remove('hidden')
	const header = document.getElementById('form-header')
	if (header) header.classList.remove('hidden')
	document.getElementById('success-message').classList.add('hidden')
}

// 5. Portfolioning bo'sh joyini bossa yopish
const portfolioModal = document.getElementById('portfolioModal')
if (portfolioModal) {
	portfolioModal.addEventListener('click', e => {
		if (e.target.id === 'portfolioModal') window.closeGallery()
	})
}

// 6. Sahifa yuklanganda ishlaydigan mantiq
window.onload = () => {
	// Yilni o'rnatish
	const yearEl = document.getElementById('year')
	if (yearEl) yearEl.textContent = new Date().getFullYear()

	// Tilni o'rnatish
	const savedLang = localStorage.getItem('selectedLang') || 'ru'
	const langSelect = document.getElementById('lang-select')
	if (langSelect) langSelect.value = savedLang
	window.changeLanguage(savedLang)
}
