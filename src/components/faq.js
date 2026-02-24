export function setOpenAnswerFAQ() {
    const faq = document.querySelector('.faq__questions');

    function closeAnswer(answer, icon) {
        answer.classList.remove('show');
        icon.style.transform = 'rotate(0deg)';
    }

    function openAnswer(answer, icon) {
        answer.classList.add('show');
        icon.style.transform = 'rotate(140deg)';
    }

    function closeAllAnswer() {
        const allQuestions = faq.querySelectorAll('.question');
        allQuestions.forEach((item) => {
            const answer = item.querySelector('.question__answer');
            const icon = item.querySelector('.icon-plus');

            closeAnswer(answer, icon);
        });
    }

    function toggleAccordion(question) {
        const currentAnswer = question.querySelector('.question__answer');
        const currentIcon = question.querySelector('.icon-plus');
        const isOpen = currentAnswer.classList.contains('show');

        if (isOpen) {
            closeAnswer(currentAnswer, currentIcon);
        } else {
            closeAllAnswer();
            openAnswer(currentAnswer, currentIcon);
        }
    }

    faq.addEventListener('click', (e) => {
        const question = e.target.closest('.question');
        if (!question) return;
        toggleAccordion(question);
    });
}
