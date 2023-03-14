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
      /*   [
        {
          text: 'Хочу проходить курсы',
          url: 'https://htmlacademy.ru/continue' //внешняя ссылка
        }
      ]*/
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
        const numbers = ['вы сегодня пылесосите', 'вы сегодня протираете экраны на всех устройствах', 'не нервничать', 'не материться', 'не рыгать', 'мыть посуду', 'вы сегодня готовите', 'не разговариваться на "вы"', 'протираете сегодня пыль', 'не намекать на алкоголь', 'не цокать', 'вы сегодня должны закрыть все кольца'];
        let randomIndexForNastya = Math.floor(Math.random() * (numbers.length - 1)); // генерируем случайный индекс в допустимом диапазоне Настька
        let randomIndexForSasha = Math.floor(Math.random() * (numbers.length - 1)); // генерируем случайный индекс в допустимом диапазоне Сашка
        if (randomIndexForNastya == randomIndexForSasha) {
            let randomIndexForNastya = Math.floor(Math.random() * (numbers.length - 1)); // генерируем случайный индекс в допустимом диапазоне Настька
            let randomIndexForSasha = Math.floor(Math.random() * (numbers.length - 1)); // генерируем случайный индекс в допустимом диапазоне Сашка
            result = resultForNastya + resultForSasha;
            bot.sendMessage(chatId, result, { // прикрутим клаву
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
        } else {
        const resultForNastya = "Настьку:\n" + numbers[randomIndexForNastya] + '\n'; // извлекаем значение под случайным индексом
        const resultForSasha = "Сашку:\n" + numbers[randomIndexForSasha] + '\n'; // извлекаем значение под случайным индексом
        result = resultForNastya + resultForSasha;
        bot.sendMessage(chatId, result, { // прикрутим клаву
            reply_markup: {
                inline_keyboard: keyboard
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