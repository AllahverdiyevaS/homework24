// Создать в html форму с тремя инпутами (имя, фамилия, возраст). Написать скрипт, который при отправке формы выводит собранные данные в консоль.
const userForm= document.querySelector(".user_form")
const nameInput= document.querySelector(".user_name")
const surnameInput=document.querySelector(".user_surname")
const ageInput=document.querySelector(".user_age")
const newBtn=document.querySelector("button")
const users=[]
userForm.addEventListener("submit", function () {
    event.preventDefault()
    console.log(nameInput.value);
    console.log(surnameInput.value);
    console.log(ageInput.value);
//     // Доработать процесс таким образом, чтобы при отправке формы данные из нее добавлялись в массив users в виде объекта.
//     const allElem={ name:nameInput.value,
//     surname:surnameInput.value,
// age:ageInput.value}
// users.push(allElem)
// console.log(users)
// userForm.reset()
// rerender()


//
   })


// Реализовать функцию rerender. Эта функция очищает контейнер с карточками и создает множество карточек с пользователями из массива. Настроить rerender при добавлении нового пользователя.
// function createUsersCard(name,surname,age) {const divElem=document.createElement("div")
// divElem.classList.add("users_item")
    
// }
// function rerender() {
//     usersContainer.innerHTML = ""
//     for (let i = 0; i < users.length; i++) {
//         const {name, surname,age} = users[i]
//         const usersElem = createUsersCard(name, surname,age)
// usersContainer.append(usersElem)}}
// Доработать rerender таким образом, чтобы при двойном клике по карточке из массива удалялся пользователь по id и вызывался rerender.