import { ref, onMounted } from 'vue';
import client from '../services/contentfulClient';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const All_Mangas = ref([]);
const fetchMangaData = async () => {
    try {
        const response = await client.getEntries({
            content_type: 'allMangas',
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        All_Mangas.value = response.items.map((item) => ({
            name: item.fields.name,
            dates: item.fields.dates,
            image_src: item.fields.imageSrc,
        }));
    }
    catch (error) {
        console.error('Error fetching manga data:', error);
    }
};
onMounted(async () => {
    await fetchMangaData();
    // eslint-disable-next-line no-undef
    const allMangaDivs = document.querySelectorAll('.manga_div');
    window.addEventListener('mousemove', (e) => {
        allMangaDivs.forEach((element, index) => {
            if (element.matches(':hover') === true) {
                const elemW = element.clientWidth; //largura
                const elemH = element.clientHeight; //altura
                image_animation(index, elemW, elemH, e);
            }
        });
    });
    function image_animation(index, divWidth, divHeight, e) {
        let w = window.innerWidth;
        const PadPercetn = (20 * 100) / w;
        const StopPercent = (w * 10) / 100;
        let horizontal_move_range = divWidth * 0.6 + (e.pageX - PadPercetn) * 0.25;
        let horizontal_move_limit = w - StopPercent;
        let imgElement = document.querySelector(`#image${index}`);
        if (e.pageX <= horizontal_move_limit) {
            imgElement.style.left = horizontal_move_range + 'px';
        }
        else {
            imgElement.style.right = '5%';
        }
        let BodyElement = document.querySelector('body');
        let FullPageH = 0;
        for (let i = 0; i < 2; i++) {
            FullPageH = FullPageH + BodyElement.children[0].children[i].clientHeight;
        }
        imgElement.style.top =
            -(divHeight * 1.5) +
                (e.pageY - FullPageH - divHeight * index) * 0.2 +
                'px';
    }
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
    __VLS_styleScopedClasses['manga_div'];
    __VLS_styleScopedClasses['manga_div'];
    __VLS_styleScopedClasses['manga_div'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("MDsection") }, id: ("MDsection"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("MDtitle") }, });
    if (__VLS_ctx.All_Mangas.length > 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        for (const [element, index] of __VLS_getVForSourceType((__VLS_ctx.All_Mangas.slice().reverse()))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((index)), ...{ class: ("manga_div") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
            (element.name);
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
            (element.dates);
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((element.image_src)), id: ((`image${index}`)), alt: ((`${element.name} Image`)), });
        }
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    }
    __VLS_styleScopedClasses['MDsection'];
    __VLS_styleScopedClasses['MDtitle'];
    __VLS_styleScopedClasses['manga_div'];
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
            All_Mangas: All_Mangas,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
