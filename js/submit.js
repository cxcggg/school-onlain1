"use strict"

window.addEventListener('DOMContentLoaded', function(){
    document.getElementById('phone').addEventListener('input', function (e) {
        var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
      });
//inner
    document.querySelector('.choise__course').innerHTML = localStorage.getItem("course");
    document.querySelector('.choise__subject').innerHTML = localStorage.getItem("subject");
    document.querySelector('.choise__tutor').innerHTML = localStorage.getItem("tutor");
    document.querySelector('.choise__period').innerHTML = localStorage.getItem("period");
//form

    const form = document.getElementById('submit-form');
    form.addEventListener("submit", formSend);

    async function formSend(e){
        e.preventDefault();

        let error =  formValidate(form);
        const formData = new FormData(form);
        formData.append("subject", document.querySelector('.choise__subject').innerHTML)
        formData.append("course", document.querySelector('.choise__course').innerHTML)
        formData.append("tutor", document.querySelector('.choise__tutor').innerHTML)
        formData.append("period", document.querySelector('.choise__period').innerHTML)

        if (error === 0){
            let response = await fetch('../../php/course-submit.php', {
                method: 'POST',
                body: formData,
                mode: 'no-cors'
            });
            if (response.ok){
                form.reset();
                document.querySelector('.submit').classList.add('disabled');
                document.querySelector('.success').classList.add('active');
            }else{
                alert('Error!!');
            }

        }else{
            // alert('Заполните обязательные поля!'); 
        }
    }

    function formValidate(form){
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        formReq.forEach(function(el){
            const input = el;
            formRemoveError(input);

            if(input.classList.contains('_email')){
                if(emailTest(input)){
                    formAddError(input);
                    error++;
                }
            }else if (input.getAttribute("type") === "checkbox" && input.checked === false){
                    formAddError(input);
                    error++;
                }else{
                    if(input.value === ''){
                        formAddError(input);
                        error++;
                    }
                }

            
        })
        return error;
    }

    function formAddError(input){
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input){
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function emailTest(input){
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
})