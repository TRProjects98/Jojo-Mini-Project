import { ref, onMounted } from 'vue';
import client from '../services/contentfulClient';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const JojoCharacters = ref([]);
const fetchJojoCharacters = async () => {
    try {
        const response = await client.getEntries({
            content_type: 'jojoCharacters',
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        JojoCharacters.value = response.items.map((item) => ({
            name: item.fields.jojoName,
            image: item.fields.jojoImage.fields.file.url,
        }));
    }
    catch (error) {
        console.error('Error fetching manga data:', error);
    }
};
onMounted(async () => {
    await fetchJojoCharacters();
});
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
    __VLS_styleScopedClasses['Card'];
    __VLS_styleScopedClasses['Card'];
    __VLS_styleScopedClasses['Card'];
    __VLS_styleScopedClasses['Card'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ id: ("MeetJJSection"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("JojoApresent") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("CardContainer") }, });
    for (const [element, index] of __VLS_getVForSourceType((__VLS_ctx.JojoCharacters.slice().reverse()))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((index)), ...{ class: ("Card") }, id: ((`JojoDiv${index}`)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("JojoName") }, });
        (element.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((element.image)), alt: ((`${element.name}_image`)), });
    }
    __VLS_styleScopedClasses['JojoApresent'];
    __VLS_styleScopedClasses['CardContainer'];
    __VLS_styleScopedClasses['Card'];
    __VLS_styleScopedClasses['JojoName'];
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
            JojoCharacters: JojoCharacters,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
