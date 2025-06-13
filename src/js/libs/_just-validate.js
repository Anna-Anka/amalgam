import JustValidate from "just-validate";

(function () {
    const forms = document.querySelectorAll("[data-form-validate]")

    if (forms) {
        forms.forEach(form => {
            const buttonSubmit = form.querySelector('.form__button');

            const validation = new JustValidate(form, {
                validateBeforeSubmitting: true,
                errorFieldCssClass: 'form__field--error',
            });

            if (form.querySelector('input[type="email"]')) {
                const allEmailFields = form.querySelectorAll('input[type="email"]')

                allEmailFields.forEach((item) => {
                    validation.addField(item, [
                        {
                            rule: 'email',
                        },
                        {
                            rule: 'required',
                        },
                    ]);
                })
            }

            if (form.querySelector('input[type="tel"]')) {
                const allEmailFields = form.querySelectorAll('input[type="tel"]')

                allEmailFields.forEach((item) => {
                    validation.addField(item, [
                        {
                            rule: 'customRegexp',
                            value: /^((8|\+7)[\-\s]?)?(\(?\d{3}\)?[\-\s]?)?[\d\-\s]{7,10}$/
,
                        },
                        {
                            rule: 'required',
                        },
                    ]);
                })
            }

            if (form.querySelector('input[data-agreement]')) {
                const allEmailFields = form.querySelectorAll('input[data-agreement]')

                allEmailFields.forEach((item) => {
                    validation.addField(item, [
                        {
                            rule: 'required',
                        },
                    ]);
                })
            }

            validation.onValidate(({
                isValid,
                isSubmitted,
                fields,
            }) => {


                if (buttonSubmit) {
                    if (isValid) {
                        buttonSubmit.removeAttribute('disabled');
                    } else {
                        buttonSubmit.setAttribute('disabled', 'true');
                    }
                }

                for (let key in fields) {
                    const element = fields[key].elem
                    if (fields[key].isValid) {
                        element.removeAttribute('aria-invalid');
                    } else {
                        if (!element.hasAttribute('aria-invalid')) {
                            element.setAttribute('aria-invalid', 'true');
                        }
                    }
                }
            });
        });
    }
}())