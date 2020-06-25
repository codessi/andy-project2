document.addEventListener('DOMContentLoaded', function() {
    _bindInputEvents();
});

function _bindInputEvents() {
    var inputs = document.querySelectorAll('.form-input');

    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            if (this.value.length > 0) {
                this.nextElementSibling.classList.add('float');
            }
            else {
                this.nextElementSibling.classList.remove('float');
            }
        });
    });
};
//
//
//

<div>
    <input class='form-input'>

    <label class='float'></label>
</div>