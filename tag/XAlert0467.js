/*!
* XAlert 0.1
* Release by KAIF Production
*/

function XToast(text, type, time) {
    var toast = $('#toast');
    var toast_text = document.querySelector("#toast__text");

    if(toast.hasClass('flex') === false){
        toast.removeClass("hidden");
        toast.addClass("tooltip-enter-active flex");

        if(type == 'error') {
            toast_text.innerHTML = '<i class="fa-solid fa-circle-xmark text-red-500"></i> ' + text
        } else if(type == 'success') {
            toast_text.innerHTML = '<i class="fa-solid fa-circle-check text-green-300"></i> ' + text
        }

        setTimeout(() => { 
            toast.removeClass("tooltip-enter-active");
            toast.addClass("tooltip-leave-active");

            setTimeout(() => { 
                toast.removeClass("flex tooltip-leave-active");
                toast.addClass("hidden");
            }, 500);
        }, time);
    }
}