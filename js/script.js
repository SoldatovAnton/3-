
const tabsFunc = () => {
   const tabs = document.querySelectorAll('.main-info__change');
   const text = document.querySelector('.main-info__text');
   const title = document.querySelector('.main-info__title');

   const tabsOptions = [
      {
         title: 'Что это?',
         text: `JavaScript — это лучший друг HTML и CSS. HTML задает разметку сайта, CSS отвечает за внешнийвид, а
               JavaScript все это оживляет. С помощью кода на JavaScript программист определяет, как
               страница отреагирует на действия пользователя. 
               Сейчас JavaScript — единственный язык программирования для браузеров. Он работает под
               Windows, macOS, Linux и на мобильных платформах, то есть везде. Если не знаешь JavaScript, делать в
               программировании интерактивных сайтов нечего.`,
      },
      {
         title: 'Это сложно?',
         text: `JavaScript — подходящий язык для изучения программирования. Он достаточно прост, 
               но содержит все фундаментальные вещи: алгоритмы, объектно-ориентированную модель, структуры данных. 
               Если традиционные языки для обучения — Pascal и Basic — несут мало практической пользы, то 
               JavaScript — рабочая лошадка. Начинать с JavaScript хорошо и потому, что синтаксически он похож 
               на великий и ужасный язык С. Изучив JavaScript, получишь базовое представление обо всех «сиобразных» 
               языках: С++, C#, Java, PHP. Они задают тренд в своих областях и весьма популярны, поэтому для новичка 
               важно познакомиться с синтаксисом С.`,
      },
      {
         title: 'Что изучать до?',
         text: `Можно приступать к JavaScript, вообще не имея представления о программировании.
               JavaScript — удачный выбор для первого языка, особенно если связываешь будущее с веб-разработкой. 
               При этом любые знания в сфере программирования будет плюсом.
               Если есть опыт HTML и CSS, совсем хорошо. Создание сайта логично начать со статичных 
               страниц на HTML и CSS, а потом оживить их при помощи JavaScript. Плюс HTML и CSS дают базовое 
               понимание того, как устроен интернет и работают сайты.`
      }
   ]

   const changeContent = (index) => {
      text.textContent = tabsOptions[index].text;
      title.textContent = tabsOptions[index].title;
   }

   const changeActiveTabs = (indexClickedTab) => {
      tabs.forEach((tab, index) => {
         tab.classList.remove('active');

         if (indexClickedTab === index) {
            tab.classList.add('active');
         }
         changeContent(indexClickedTab);
      })
      console.log(indexClickedTab);
   }

   tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
         changeActiveTabs(index);
      })
   })
   changeContent(0);
}
tabsFunc();

const squareForm = () => {
   const firstForm = document.forms.square;
   const input = firstForm.elements.squareInp;

   firstForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!input.value) {
         document.querySelector('.fieldEmpty1').style.display = 'block';
      } else {
         document.querySelector('.fieldEmpty1').style.display = 'none';
         let value = input.value.split(' ');
         let result = value[0] * value[1] * 1 / 2;
         if (isNaN(result)) {
            alert('Введите два числа');
         } else {
            alert('Площадь треугольника = ' + result);
         }

      }
   })
}
squareForm();

const stringFunc = () => {
   const strForm = document.forms.strings;
   const strInput = strForm.elements.string__input;

   strForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!strInput.value) {
         document.querySelector('.fieldEmpty2').style.display = 'block';
      } else {
         document.querySelector('.fieldEmpty2').style.display = 'none';
         let strValue = strInput.value.split(' ');
         alert(strValue[0].length == strValue[1].length)
      }
   })
}
stringFunc();

const extremFunc = () => {
   const extrForm = document.forms.extArray;
   const extrInput = extrForm.elements.array__input;

   extrForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!extrInput.value) {
         document.querySelector('.fieldEmpty2').style.display = 'block';
      } else {
         document.querySelector('.fieldEmpty2').style.display = 'none';
         let extrValue = extrInput.value.split(' ');
         let min = Math.min(...extrValue);
         let max = Math.max(...extrValue);
         if (isNaN(min) || isNaN(max)) {
            alert('Введите значение корректно')
         } else {
            alert('min: ' + min + '; ' + 'max: ' + max);
         }
      }
   })
}
extremFunc();

const timerFunc = () => {
   let counter = document.querySelector('.counter');
   let start = document.querySelector('.btn__start');
   let stop = document.querySelector('.btn__stop');
   let reset = document.querySelector('.btn__reset');
   let switcher = false;
   let min = 0;
   let sec = 0;
   let zeroSec = '0';
   let zeroMin = '0';

   start.addEventListener('click', () => {
      if (!switcher) {
         var startTimer = setInterval(() => {
            sec++;
            if (sec == 60) {
               min++;
               sec = 0;
               zeroSec = '0'
            }
            if (sec > 9) {
               zeroSec = ''
            }
            if (min > 9) {
               zeroMin = ''
            }
            counter.textContent = `${zeroMin}${min}:${zeroSec}${sec}`;
         }, 1000);

         stop.addEventListener('click', () => {
            clearInterval(startTimer);
            switcher = false;

         })
         if (!switcher) {
            reset.addEventListener('click', () => {
               min = 0;
               sec = 0;
               switcher = false;
               zeroSec = '0';
               zeroMin = '0';
               counter.textContent = `${zeroMin}${min}:${zeroSec}${sec}`;
            })
         }
         switcher = true;
      }
   })

}
timerFunc();

const testFunc = () => {
   const wrap = document.querySelectorAll('.questinos__wrapper');
   const testForm = document.forms.testForm;
   const testInput = testForm.elements.test__input;
   const resultTest = document.querySelector('.result__test');
   let counter = 0;
   let ready = false;

   const resultModal = document.querySelector('.result');

   const answersList = [
      {
         ans: `console.log("Привет")`
      },
      {
         ans: `insertAdjacentHTML()`
      },
      {
         ans: `addEventListener()`
      },
      {
         ans: `6`
      },
      {
         ans: `getElementById()`
      },
      {
         ans: `1580`
      },
      {
         ans: `17`
      },
      {
         ans: `concat()`
      },
      {
         ans: `11`
      },
      {
         ans: `Math.max()`
      },
   ]

   testForm.addEventListener('submit', (event) => {
      event.preventDefault();

      testInput.forEach((elem, index) => {
         if (!ready) {
            if (testInput[index].value != answersList[index].ans) {
               wrap[index].insertAdjacentHTML('beforeend', `
                   <p class = "falseAns">Ваш ответ: ${testInput[index].value} неверный! <br> Правильный ответ: ${answersList[index].ans}</p>
                   `)
            } else {
               counter++;
               wrap[index].insertAdjacentHTML('beforeend', `
                   <p class = "trueAns">Ваш ответ: ${testInput[index].value} верный!</p>
                   `)
            }
         }
      })
      if (!ready) {
         resultTest.style.display = 'block';
         resultModal.insertAdjacentHTML('beforeend', `
           <p>Результат: ${counter} из ${testInput.length}</p>
           `)
      }
      ready = true;

   })
}
testFunc();

const resultFunc = () => {
   const resultTest = document.querySelector('.result__test');
   const modal = document.querySelector('.modal');
   const dateTime = document.querySelector('.modal__date-time');
   let active = false;

   resultTest.addEventListener('click', () => {
      modal.classList.add('active');
      document.body.classList.add('lock');

      if (!active) {
         dateTime.insertAdjacentHTML('beforeend', `
           <p>Дата: ${new Date().toLocaleDateString()} </p>
           <p>Время: ${new Date().toLocaleTimeString().slice(0, -3)}</p>
           `)
      }
      active = true;
   })

   modal.addEventListener('click', (e) => {
      const modalWindow = e.target.closest('.modal__window');
      if (!modalWindow) {
         modal.classList.remove('active');
         document.body.classList.remove('lock');
      }
   })

}
resultFunc();
