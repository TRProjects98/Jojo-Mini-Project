import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const Form = ref(null);
const FDivmessage = ref(null);
const Fmessage = ref('');
let FmessageIcon = 'Error';
let FormValidation = false;
function formSubmition(e) {
    e.preventDefault();
    if (Form.value) {
        const FormNameInput = Form.value.querySelector('input[name="name"]');
        const FormEmailInput = Form.value.querySelector('input[name="email"]');
        const FormMessageInput = Form.value.querySelector('textarea[name="text"]');
        // Check if inputs are defined
        if (FormNameInput && FormEmailInput && FormMessageInput) {
            if (FormNameInput.value.trim() !== '' &&
                FormEmailInput.value.trim() !== '' &&
                FormMessageInput.value.trim() !== '') {
                if (FormNameInput.validity.valid &&
                    FormEmailInput.validity.valid &&
                    FormMessageInput.validity.valid) {
                    FormValidation = true;
                    Form.value.reset();
                    FmessageIcon = 'Warning';
                    Fmessage.value =
                        'This form was created for testing purposes. Your message wasnt sent.';
                }
                else {
                    Fmessage.value = 'Your inputs are not valid';
                }
            }
            else {
                Fmessage.value = 'You cant leave any inputs empty';
            }
        }
        else {
            Fmessage.value = 'One or more inputs are not defined';
        }
    }
    if (FDivmessage.value) {
        if (FormValidation) {
            //check if element its not null
            FDivmessage.value.style.backgroundColor = 'rgb(255, 230, 0)';
        }
        else {
            FDivmessage.value.style.backgroundColor = 'rgb(245, 27, 20)';
            FmessageIcon = 'Error';
        }
        FDivmessage.value.style.top = '10px';
    }
    setTimeout(() => {
        if (FDivmessage.value)
            FDivmessage.value.style.top = '-100px';
        FormValidation = false;
    }, 3000);
}
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    __VLS_styleScopedClasses['feedback-input'];
    __VLS_styleScopedClasses['submit'];
    __VLS_styleScopedClasses['ease'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ id: ("FormSection"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("FormMessage") }, ref: ("FDivmessage"), });
    // @ts-ignore navigation for `const FDivmessage = ref()`
    __VLS_ctx.FDivmessage;
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((`/${__VLS_ctx.FmessageIcon}_Icon.svg`)), alt: ((`/${__VLS_ctx.FmessageIcon} Icon`)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.Fmessage);
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("form-main"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("form-div"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.formSubmition) }, ...{ class: ("form") }, id: ("form1"), ref: ("Form"), });
    // @ts-ignore navigation for `const Form = ref()`
    __VLS_ctx.Form;
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ name: ("name"), type: ("text"), ...{ class: ("feedback-input") }, placeholder: ("Name"), id: ("name"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ name: ("email"), type: ("email"), ...{ class: ("feedback-input") }, id: ("email"), placeholder: ("Email"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({ name: ("text"), ...{ class: ("feedback-input") }, id: ("comment"), placeholder: ("Message"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("submit") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("submit"), value: ("SEND"), id: ("form-button"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ease") }, });
    __VLS_styleScopedClasses['FormMessage'];
    __VLS_styleScopedClasses['form'];
    __VLS_styleScopedClasses['feedback-input'];
    __VLS_styleScopedClasses['feedback-input'];
    __VLS_styleScopedClasses['feedback-input'];
    __VLS_styleScopedClasses['submit'];
    __VLS_styleScopedClasses['ease'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "FDivmessage": __VLS_nativeElements['div'],
        "Form": __VLS_nativeElements['form'],
    };
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Form: Form,
            FDivmessage: FDivmessage,
            Fmessage: Fmessage,
            FmessageIcon: FmessageIcon,
            formSubmition: formSubmition,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
