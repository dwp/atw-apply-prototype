document.addEventListener('DOMContentLoaded', () => {

    const group = 'unusedTravelMethods';
    const checkboxes = document.getElementsByName('unusedTravelMethods[]');
    const noneID = `${group}-${checkboxes.length}`;
    const noneCheckbox = document.getElementById(noneID);

    noneCheckbox.addEventListener('click', (evt) => {

        if (checkboxes.length) {

            for (let i = 0, j = checkboxes.length; i < j; i++) {

                if (checkboxes[i].id !== noneID) {
                    checkboxes[i].checked = false
                }
            }
        }
    });

    if (checkboxes.length) {

        for (let i = 0, j = checkboxes.length; i < j; i++) {

            if (checkboxes[i].id !== noneID) {
                checkboxes[i].addEventListener('click', (evt) => {
                    noneCheckbox.checked = false;
                });
            }
        }
    }
});