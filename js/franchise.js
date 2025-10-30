const toggleModal = () => {
  document.addEventListener('DOMContentLoaded', function () {
    const modal = document.querySelector('.modal'); 
    const body = document.body; 
    const modalOpenButtons = document.querySelectorAll('.modal-open'); 
    const modalCloseButton = document.querySelector('.modal__close'); 
    const modalOverlay = modal.querySelector('.modal__overlay'); 

    function openModal() {
      modal.classList.add('active');
      body.classList.add('body-no-scroll'); 
    }

    function closeModal() {
      modal.classList.remove('active');
      body.classList.remove('body-no-scroll'); 
    }

    modalOpenButtons.forEach(button => {
      button.addEventListener('click', openModal);
    });

    modalCloseButton.addEventListener('click', closeModal);

    modalOverlay.addEventListener('click', (event) => {
      const modalWindow = modal.querySelector('.modal__window');
      if (!modalWindow.contains(event.target)) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    });
  });
};
toggleModal();


const btnMore = document.querySelector('.metrics__timeline-more');
const list2 = document.querySelector('.metrics__timeline-list-2');

if (btnMore && list2) {
  const toggleList = () => {
    // проверяем ширину экрана
    if (window.innerWidth <= 700) {
      list2.classList.toggle('active');
      btnMore.textContent = list2.classList.contains('active')
        ? 'Скрыть'
        : 'Смотреть все этапы';
    }
  };

  btnMore.addEventListener('click', toggleList);
}

