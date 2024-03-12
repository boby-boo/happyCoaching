const accordion = (triggersSelectors, messagesSelectors) => {
    const triggers = document.querySelectorAll(triggersSelectors);
    const messages = document.querySelectorAll(messagesSelectors);

    triggers.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            toggleVisible(btn, index);
        });
    });

    function toggleVisible(trigger, index) {
        trigger.classList.toggle('circle-minus');
        trigger.classList.toggle('circle-plus');
        messages[index].classList.toggle('none');
        messages[index].classList.toggle('animate__fadeIn');
    }
};

export default accordion;
