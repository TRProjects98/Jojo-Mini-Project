import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const ViconSRC = ref('off');
const VidElement = ref(null);
function ViconHandler() {
    if (ViconSRC.value === 'off') {
        ViconSRC.value = 'on';
        if (VidElement.value)
            VidElement.value.muted = false;
    }
    else {
        ViconSRC.value = 'off';
        if (VidElement.value)
            VidElement.value.muted = true;
    }
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
    __VLS_styleScopedClasses['JJLogoDiv'];
    __VLS_styleScopedClasses['VideoVolume'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ id: ("HSsection"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("HSoverlay") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("JJLogoDiv") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/JJBA_Logo.png"), alt: ("JJBA Logo"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.video, __VLS_intrinsicElements.video)({ ref: ("VidElement"), autoplay: (true), loop: (true), muted: (true), });
    // @ts-ignore navigation for `const VidElement = ref()`
    __VLS_ctx.VidElement;
    __VLS_elementAsFunction(__VLS_intrinsicElements.source)({ src: ("/hsVideoIntro.mp4"), type: ("video/mp4"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.ViconHandler) }, ...{ class: ("VideoVolume") }, type: ("button"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ id: ("Volume_image"), src: ((`/Volume_${__VLS_ctx.ViconSRC}_Icon.svg`)), alt: ("Volume On Icon"), });
    __VLS_styleScopedClasses['HSoverlay'];
    __VLS_styleScopedClasses['JJLogoDiv'];
    __VLS_styleScopedClasses['VideoVolume'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "VidElement": __VLS_nativeElements['video'],
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
            ViconSRC: ViconSRC,
            VidElement: VidElement,
            ViconHandler: ViconHandler,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
