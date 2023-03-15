const TelegramBot = require('node-telegram-bot-api'); // подключаем node-telegram-bot-api
const bot = new TelegramBot('6174923152:AAF8tLBwp6VNR3I0WG4xrStL0stgI_91zFA', {polling: true});
const keyboard = [
    [
      {
        text: 'Запустить бинго шоу', // текст на кнопке
        callback_data: 'moreKeks' // данные для обработчика событий
      }
  ],
 [
        {
          text: 'Можно ли сегодня выпить?',
          callback_data: 'morePes'
        }
    ],
    ];

// обработчик события присылания нам любого сообщения
bot.on('message', (msg) => {
  const chatId = msg.chat.id; //получаем идентификатор диалога, чтобы отвечать именно тому пользователю, который нам что-то прислал

  // отправляем сообщение
  bot.sendMessage(chatId, 'Привет, Друг! чего хочешь?', { // прикрутим клаву
        reply_markup: {
            inline_keyboard: keyboard
        }
    });
});



// обработчик событий нажатий на клавиатуру
bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;

    let img = '';

    if (query.data === 'moreKeks') { // если кот
        const numbers = ['вы сегодня пылесосите', 
        'вы сегодня протираете экраны на всех устройствах', 
        'не нервничать', 
        'не материться', 
        'не рыгать', 
        'мыть посуду', 
        'вы сегодня готовите', 
        'не разговариваться на "вы"', 
        'протираете сегодня пыль', 
        'не намекать на алкоголь', 
        'не цокать',
        'волосы расчестка',
        'вынести мусор',
        'выполнить обязанность по дому',
        'навести порядок на балконе',
        'помыть холодильник',
        'не делать мерзотных вещей: рыгать, чесать мудя и пр.',
        'не петь и не напевать и не ссылаться на песни Пистолетова',
        'не добавлять сашульков и настюльков и не просить рубли дольяры',
        'помыть окно',
        'протереть люстру',
        'зарядить для всех щетки',
        'не оскорблять людей'];
        const sports = ['закрыть ВСЕ кольца',
        'закрыть зеленое кольцо',
        'закрыть красное кольцо',
        'закрыть синее кольцо', 
        'закрыть зеленое кольцо',
        'закрыть красное кольцо',
        'закрыть синее кольцо', 
        'присесть не менее 40 раз',
        'увеличить на 5% красное кольцо',
        'увеличить на 5% зеленое кольцо',
        'выпить 5 бутылок воды'];
        const study = ['Не менее 20 Duolingo',
        'Не менее 30 чтения',
        'Не менее 3 занятий в топвизоре или в другом (не менее 30 минут)',
        'Сыграть в настолку',
        'Раскрасить 1 картинку в котиках',
        'Не менее 15 минут поучить НЕ английский язык',
        'Посмотреть 1 серию свинки Пеппы на английском'];
        let randomIndexForNastya = Math.floor(Math.random() * (numbers.length - 1)); // генерируем случайный индекс в допустимом диапазоне Настька
        let randomIndexForSasha = Math.floor(Math.random() * (numbers.length - 1)); // генерируем случайный индекс в допустимом диапазоне Сашка
        let randomIndexForNastya2 = Math.floor(Math.random() * (numbers.length - 1)); // генерируем случайный индекс в допустимом диапазоне Настька 2
        let randomIndexForSasha2 = Math.floor(Math.random() * (numbers.length - 1)); // генерируем случайный индекс в допустимом диапазоне Сашка 2
        let randomIndexForNastya3 = Math.floor(Math.random() * (sports.length - 1)); // генерируем случайный индекс в допустимом диапазоне Настька 3
        let randomIndexForSasha3 = Math.floor(Math.random() * (sports.length - 1)); // генерируем случайный индекс в допустимом диапазоне Сашка 3
        let randomIndexForAll = Math.floor(Math.random() * (study.length - 1)); // генерируем случайный индекс в допустимом диапазоне для всех
        if (randomIndexForNastya == randomIndexForSasha || randomIndexForNastya2 == randomIndexForNastya || randomIndexForNastya2 == randomIndexForSasha2 || randomIndexForSasha2 == randomIndexForSasha || randomIndexForNastya2 == randomIndexForSasha2) {
            let randomIndexForNastya = Math.floor(Math.random() * (numbers.length - 1)); // генерируем случайный индекс в допустимом диапазоне Настька
            let randomIndexForSasha = Math.floor(Math.random() * (numbers.length - 1)); // генерируем случайный индекс в допустимом диапазоне Сашка
            result = resultForNastya + resultForSasha;
            bot.sendMessage(chatId, result, { // прикрутим клаву
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
        } else {
        const resultForNastya = "Настьку:\n" + numbers[randomIndexForNastya] + '\n' + numbers[randomIndexForNastya2] + '\n' + sports[randomIndexForNastya3] + '\n'; // извлекаем значение под случайным индексом
        const resultForSasha = "\nСашку:\n" + numbers[randomIndexForSasha] + '\n' + numbers[randomIndexForSasha2] + '\n' + sports[randomIndexForSasha3] + '\n'; // извлекаем значение под случайным индексом
        const resultForAll = "\nОбучающее для всех:\n" + study[randomIndexForAll] + '\n'; // извлекаем значение под случайным индексом
        result = resultForNastya + resultForSasha + resultForAll;
        bot.sendMessage(chatId, result, { // прикрутим клаву
            reply_markup: {
                inline_keyboard: keyboard,
                parse_mode: "HTML",
            }
        });
    }
}

    if (query.data === 'morePes') {
        const numbers = ['Нет конечно, не глупи', 'Нет, сегодня нельзя', 'Определенно нет', 'Хороший день, но выпить нельзя', 'Не сегодня, а когда я скажу', 'Нет конечно', 'Нельзя =(((', 'Да!!!', 'Неа', 'Сегодня нельзя, попробуй завтра'];
        const randomIndex = Math.floor(Math.random() * (numbers.length - 1)); // генерируем случайный индекс в допустимом диапазоне
        const result = "Алкашам:\n" + numbers[randomIndex]; // извлекаем значение под случайным индексом
        bot.sendMessage(chatId, result, { // прикрутим клаву
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    }

    if (img) {
        bot.sendPhoto(chatId, img, { // прикрутим клаву
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    } 
  });