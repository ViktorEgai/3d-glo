const sendForm = () => {
  const errorMessage = 'Что-то пошло не так...',
    successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

  const forms = document.querySelectorAll('form');

  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 2rem;';
  // обработчик для всех форм
  forms.forEach((form) => {
    // событие сабмит
    form.addEventListener('submit', (event) => {
      statusMessage.innerHTML = `
	<div class='sk-double-bounce'>
		<div class='sk-child sk-double-bounce-1'></div>
		<div class='sk-child sk-double-bounce-2'></div>
	</div>
				`;
      animStyle();
      form.querySelector('.btn').disabled = true;
      event.preventDefault();
      form.appendChild(statusMessage);
      const formData = new FormData(form);
      let body = {};
      formData.forEach((val, key) => {
        body[key] = val;
      });

      // вызов функции postData
      postData(body)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error('status network not 200')
          }
          if (form.id === 'form3') {
            setTimeout(() => {
              document.querySelector('.popup').style.display = 'none';
            }, 3000);
          }
          statusMessage.textContent = successMessage;
          setTimeout(() => {
            statusMessage.textContent = '';
          }, 3000)
        })
        .catch((error) => {
          statusMessage.textContent = errorMessage;
          if (form.id === 'form3') {
            setTimeout(() => {
              document.querySelector('.popup').style.display = 'none';
            }, 3000);
          }
          setTimeout(() => {
            statusMessage.textContent = '';
          }, 3000)
          console.error(error);
        });
      // очистка инпутов после отправки
      [...form].forEach((input) => {
        input.value = '';
      });
    });
    // цвет текста сообщения в popup окне
    if (form.id === 'form3') {
      statusMessage.style.color = '#fff';
    }
  });

  // стили для анимации 
  const animStyle = () => {
    const style = document.createElement('style');
    style.textContent = `
.sk-double-bounce {
  width: 50px;
  height: 50px;
  position: fixed;
  margin: auto;  
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%)
  
}
.sk-child {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #19b5fe;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    animation: sk-double-bounce 2s infinite ease-in-out;
  }

  .sk-double-bounce-2 {
    animation-delay: -1s;
  }
@keyframes sk-double-bounce {
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
}
		`;
    document.head.appendChild(style);

  };

  // отправка данных на сервер
  const postData = (body) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  };
};

export default sendForm;