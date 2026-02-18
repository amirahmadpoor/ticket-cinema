function setOpenAnswerFAQ() {
    const questionBox = document.querySelectorAll('.question__box');
    const questionAnswer = document.querySelectorAll('.question__answer');
    const iconPlus = document.querySelectorAll('.icon-plus');
    const questionAll = document.querySelectorAll('.faq__questions');

    function resetQuestions() {
        questionAnswer.forEach((answerAll) => {
            answerAll.classList.remove('show');
        })
        iconPlus.forEach((iconAll) => {
            iconAll.style.transform = 'rotate(0deg)';
        })
    }

    function closeOtherQuestions(answer, plus) {
        answer.classList.remove('show');
        plus.style.transform = 'rotate(0deg)';
    }

    function openAnswer(answer, plus) {
        answer.classList.add('show');
        plus.style.transform = 'rotate(140deg)';
    }

    questionBox.forEach((question, index) => {
        question.addEventListener('click', () => {
            let answer = questionAnswer[index]
            let plus = iconPlus[index];
            if (!answer.classList.contains('show')) {
                resetQuestions();
                openAnswer(answer, plus);
            } else {
                closeOtherQuestions(answer, plus);
            }
        });
    })
}

export { setOpenAnswerFAQ };