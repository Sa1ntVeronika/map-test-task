# Тестовое задание на позицию разработчика JavaScript для FunBox

Для запуска приложения:
* Клонировать репозиторий локально;
* В корневой директории проекта выполнить `npm install` для установки зависимостей;
* Выполнить `npm start` для запуска приложения;


# Level I

## Q1
Расскажите, чем, на ваш взгляд, отличается хорошее клиентское приложение от
плохого с точки зрения
* пользователя;
* менеджера проекта;
* дизайнера;
* верстальщика;
* серверного программиста. 


1. Пользователь может назвать приложение хорошим, если оно решает необходимую проблему, имеет удобный и интуитивно-понятный интерфейс, обеспечено тех.поддержкой, которая действительно решает проблемы юзера
2. Для менеджера проекта хорошее приложение то, которое приносит прибыль компании.
3. Для дизайнера необходимо иметь возможность реализовать свои самые смелые фантазии.
4. Верстальщик был бы рад увидеть четкий и простой макет для верстки, по возможности чтоб отсутствовала необходимость поддерживать старые бразуеры.
5. Серверный программист будет рад, если клиентские доработки вызовов API будут проводиться вместе с ним

## Q2
Опишите основные особенности разработки крупных многостраничных сайтов,
функциональность которых может меняться в процессе реализации и поддержки.
Расскажите о своем опыте работы над подобными сайтами: какие подходы,
инструменты и технологии вы применяли на практике, с какими проблемами
сталкивались и как их решали. 

Практики разработки многостраничников не имел. Как мне кажется, подобные проекты характерны наличием четкой стратегии. Необходимо изначально собрать информацию о ЦА, о назначении сайта, какие задачи он будет решать. Затем создавать карту и макет сайт, дизайн. И лишь потом отправить версталищикам и программистам. 

## Q3
При разработке интерфейсов с использованием компонентной архитектуры часто
используются термины Presentational Сomponents и Сontainer Сomponents. Что
означают данные термины? Зачем нужно такое разделение, какие у него есть
плюсы и минусы? 

Presentational Components - компонент, отвечающий за визуальную составляющую приложения, не работая с данными и зачастую не имеющее своего состояния. Иногда можно услышать название Dumb Components.
Containter Components (они же Smart Components) содержат в себе логику и отвечают за то, как приложение работает. В нем могут происходить запросы к серверу, они предоставляют данные "глупым" компонентам
Плюсы такого подхода заключаются в переиспользовании компонентов - "глупые компоненты" могут быть использованы многократно, отрисовывая те данные, которые получат от компонента-контейнера.
Минусы - приложение может быть раздроблено на лишние компоненты.

## Q4
Как устроено наследование в JS? Расскажите о своем опыте реализации JSнаследования без использования фреймворков. 

В JS реализовано прототипное наследование - в объекты наследуют методы и свойства от других объектов.
У каждого объекта есть свойство __proto__, через которое можно задать новый прототип
Так же в JS через классы (class) можно реализовать наследование, использовав ключевое слово extends.
Практики использования прототипного наследования не имел, только через классы с использованием фреймворков.

## Q5
Какие библиотеки можно использовать для написания тестов end-to-end во
фронтенде? Расскажите о своем опыте тестирования веб-приложений. 

Cypress, Playwright  использу.тся для тестирования пользовательского интерфейса.
Имею небольшой опыт написания unit-тестов средствами Karma и Jasmine для Angular-приложений
Имел опыт написания тестов с помощью Python+Selenium+PyTest

## Q6
Вам нужно реализовать форму для отправки данных на сервер, состоящую из
нескольких шагов. В вашем распоряжении дизайн формы и статичная верстка, в
которой не показано, как форма должна работать в динамике. Подробного
описания, как должны вести себя различные поля в зависимости от действий
пользователя, в требованиях к проекту нет. Ваши действия? 

Начну реализовывать логику работы формы, верстать первую статичную версию. Так же сообщу дизайнеру\PO\PM об обнаруженном недочете. После, надеюсь, мы получим финальный результат, и я смогу закончить разработку формы

## Q7
Расскажите, какие инструменты помогают вам экономить время в процессе
написания, проверки и отладки кода. 

IDE Visual Studio Code является основным инструментом для написания и проверки кода. Множество расширений (к примеру, ESLint, jshint, prettier, snippets) облегчают и ускорят сам процесс. Для отладки незаменимым является консоль разработчика в Chrome

## Q8
Какие ресурсы вы используете для развития в профессиональной сфере? Приведите
несколько конкретных примеров (сайты, блоги и так далее).
Какие ещё области знаний, кроме тех, что непосредственно относятся к работе,
вам интересны? 

Самые полезные для меня ресурсы - Habr, Stack Overflow, Medium, MDN, learn.javascript.ru. На них я могу с 99% вероятностью найти ответ на интересующий меня вопрос.
Множество телеграм-каналов обладают полезной информацией (к примеру, очень нравится https://t.me/nuancesprog)
Иногда читаю о маркетинге, дизайне, да и просто случайные статьи на Habr

## Q9
Расскажите немного о себе

Помимо IT, увлекаюсь музыкой (играю на нескольких инструментах), настольными и компьютерными играми, футболом, да и в целом слежу за спортивными миром - нравятся любые соревнования. Жду открытия граница, дабы снова возобновить более свободные путешествия, а пока - хочу посетить уголки нашей страны.


