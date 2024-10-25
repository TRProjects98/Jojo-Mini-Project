import FormReview from './components/FormReview.vue';
import HeroSection from './components/HeroSection.vue';
import JojoCharacters from './components/JojoCharacters.vue';
import MangaDisplayer from './components/MangaDisplayer.vue';
import PageFooter from './components/PageFooter.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    // @ts-ignore
    [HeroSection,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(HeroSection, new HeroSection({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    // @ts-ignore
    [JojoCharacters,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(JojoCharacters, new JojoCharacters({}));
    const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
    // @ts-ignore
    [MangaDisplayer,];
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(MangaDisplayer, new MangaDisplayer({}));
    const __VLS_11 = __VLS_10({}, ...__VLS_functionalComponentArgsRest(__VLS_10));
    // @ts-ignore
    [FormReview,];
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(FormReview, new FormReview({}));
    const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
    // @ts-ignore
    [PageFooter,];
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(PageFooter, new PageFooter({}));
    const __VLS_21 = __VLS_20({}, ...__VLS_functionalComponentArgsRest(__VLS_20));
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
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
            FormReview: FormReview,
            HeroSection: HeroSection,
            JojoCharacters: JojoCharacters,
            MangaDisplayer: MangaDisplayer,
            PageFooter: PageFooter,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
