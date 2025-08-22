export function initValidation() {
    const validation = new JustValidate('.questions__form')

    validation.addField('#name', [
        {
            rule: 'required',
            errorMessage: 'Введите ваше имя'
        },
        {
            rule: 'minLength',
            value: 3,
            errorMessage: 'Минимальная длина 3 символа'
        },
        {
            rule: 'maxLength',
            value: 20,
            errorMessage: 'Максимальная длина 20 символов'
        }
    ])
    .addField('#email', [
        {
            rule: 'required',
            errorMessage: 'Введите вашу почту'
        },
        {
            rule: 'email',
            errorMessage: 'Почта введена неверно'
        }
    ])
    .addField('#agree', [
        {
            rule: 'required',
            errorMessage: 'Согласие обязательно'
        }
    ])
    .onSuccess((event) => {
        event.preventDefault()
    })
}