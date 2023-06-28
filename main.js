const logins = document.querySelectorAll('.js-login')
const registers = document.querySelectorAll('.js-register')
const modal = document.querySelector('.js-modal')
const Register_form = document.querySelector('.js-modal-register')
const modalContainer = document.querySelector('.js-auth-form')
const modalClose =document.querySelector('.js-modal__overlay-register')
const Close__login =document.querySelector('.js-modal__overlay')
// ham  hien thi modal dang nhap ( them class open vao modal)
    function showLogin(){
        modal.classList.add('open')
    }
    for(const login of logins){
        login.addEventListener('click',hideRegister && showLogin)

    }
// ham hien thi modal dang ky
    function showRegister(){
        Register_form.classList.add('open')
    }
    for(const register of registers){
        register.addEventListener('click',hideLogin && showRegister)
    }
// ham an modal dang nhap  ( go bo class open cua modal)
    function hideLogin(){
        modal.classList.remove('open')
    }
    Close__login.addEventListener('click', hideLogin)
// ham an modal dang ky
    function hideRegister(){
        Register_form.classList.remove('open')
    }
    modalClose.addEventListener('click',hideRegister)

    modalContainer.addEventListener('click', function(event){
    // ngan chan su noi bot 
        event.stopPropagation()
    })