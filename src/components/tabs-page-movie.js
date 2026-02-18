function setSelectTab() {
    const tabs = document.querySelector('.reviews-tabs__header');
    const tabsName = document.querySelectorAll('.name-tab');

    function activeTab(e){
        e.target.classList.add('active');
    }

    function resetTabs(){
        tabsName.forEach(t => {
            t.classList.remove('active');
        })
    }

    function handelActiveTab() {
        tabs.addEventListener('click', (e) => {
            resetTabs();
            activeTab(e);
        })
    }
    handelActiveTab()
}

export { setSelectTab };