import Vue from 'vue';

var AdlButton = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"adl2-button",class:_vm.conditionalClasses,attrs:{"disabled":_vm.disabled,"type":"button","aria-label":_vm.ariaLabel},on:{"click":_vm.onClickButton}},[(_vm.icon)?_c('span',{staticClass:"adl2-button__icon",attrs:{"data-testid":"icon-button"}}):_vm._e(),_vm._v(" "),(_vm.$slots.default)?_c('span',{staticClass:"adl2-button__label"},[_vm._t("default")],2):_vm._e()])},
staticRenderFns: [],
stub: 1
};

var buttonGroup = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"adl2-button-group"},[_vm._t("default")],2)},
staticRenderFns: [],
stub: 1
};

var AdlButtonVariant;
(function (AdlButtonVariant) {
    AdlButtonVariant["PRIMARY"] = "primary";
    AdlButtonVariant["SECONDARY"] = "secondary";
    AdlButtonVariant["GHOST"] = "ghost";
})(AdlButtonVariant || (AdlButtonVariant = {}));
var AdlButtonPropClasses;
(function (AdlButtonPropClasses) {
    AdlButtonPropClasses["TERTIARY"] = "tertiary";
    AdlButtonPropClasses["SMALL"] = "small";
    AdlButtonPropClasses["BLOCK"] = "block";
    AdlButtonPropClasses["GROUPED"] = "grouped";
    AdlButtonPropClasses["DESTRUCTIVE"] = "destructive";
    AdlButtonPropClasses["ICON_POSITION_AFTER"] = "icon-after";
})(AdlButtonPropClasses || (AdlButtonPropClasses = {}));
var AdlButtonIconPosition;
(function (AdlButtonIconPosition) {
    AdlButtonIconPosition["BEFORE"] = "before";
    AdlButtonIconPosition["AFTER"] = "after";
})(AdlButtonIconPosition || (AdlButtonIconPosition = {}));

var AdlTheme;
(function (AdlTheme) {
    AdlTheme["LEGACY"] = "adl2-legacy-theme";
    AdlTheme["ADL2"] = "";
})(AdlTheme || (AdlTheme = {}));
const setDefaultTheme = () => {
    const DEFAULT_THEME_CLASS = 'adl-legacy-theme';
    document.body.classList.add(DEFAULT_THEME_CLASS);
};
const registerComponents = app => {
    app.component(AdlButton.name, AdlButton);
};
const install = (app, options) => {
    if (options?.theme !== AdlTheme.ADL2) {
        setDefaultTheme();
    }
    registerComponents(app);
};
var AdlVue = {
    install,
};

var card = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"adl-card",class:_vm.conditionalClasses,attrs:{"data-testid":"card-container"},on:{"click":_vm.onClickCard}},[(_vm.showImage)?_c('div',{staticClass:"adl-card__image"},[_vm._t("image")],2):_vm._e(),_vm._v(" "),_c('header',{staticClass:"adl-card__header"},[_c('div',{staticClass:"adl-card__title-container"},[_c('span',{staticClass:"adl-card__title"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),(_vm.showHeaderActions)?_c('div',{staticClass:"adl-card__actions"},[_vm._t("headerActions")],2):_vm._e()]),_vm._v(" "),(_vm.subTitle)?_c('div',{staticClass:"adl-card__subtitle"},[_vm._v(_vm._s(_vm.subTitle))]):_vm._e()]),_vm._v(" "),(_vm.showBody)?_c('div',{staticClass:"adl-card__body"},[_vm._t("default")],2):_vm._e(),_vm._v(" "),(_vm.showFooter)?_c('footer',{staticClass:"adl-card__footer"},[_vm._t("footer")],2):_vm._e()])},
staticRenderFns: [],
stub: 1
};

var cardImage = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('img',{staticClass:"adl-card-image",attrs:{"src":_vm.src,"alt":_vm.alt}})},
staticRenderFns: [],
stub: 1
};

var AdlCardImagePosition;
(function (AdlCardImagePosition) {
    AdlCardImagePosition["TOP"] = "top";
    AdlCardImagePosition["LEFT"] = "left";
})(AdlCardImagePosition || (AdlCardImagePosition = {}));
var AdlCardPropClass;
(function (AdlCardPropClass) {
    AdlCardPropClass["CLICKABLE"] = "clickable";
    AdlCardPropClass["WITH_FOOTER"] = "with-footer";
    AdlCardPropClass["WITH_IMAGE"] = "with-image";
    AdlCardPropClass["WITH_LEFT_SIDE_IMAGE"] = "with-left-side-image";
})(AdlCardPropClass || (AdlCardPropClass = {}));

var checkbox = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"adl2-checkbox",attrs:{"data-testid":_vm.testId}},[_c('input',_vm._g({ref:"input",staticClass:"adl2-checkbox__input",attrs:{"role":"checkbox","disabled":_vm.disabled,"data-indeterminate":_vm.isIndeterminate,"aria-label":_vm.ariaLabel,"type":"checkbox"},domProps:{"checked":_vm.isChecked,"indeterminate":_vm.isIndeterminate,"value":_vm.inputValue}},_vm.listeners)),_vm._v(" "),(_vm.$slots.default || _vm.$slots.description)?_c('span',{staticClass:"adl2-checkbox__text"},[(_vm.$slots.default)?_c('span',{staticClass:"adl2-checkbox__label"},[_vm._t("default")],2):_vm._e(),_vm._v(" "),(_vm.$slots.description)?_c('span',{staticClass:"adl2-checkbox__description"},[_vm._t("description")],2):_vm._e()]):_vm._e()])},
staticRenderFns: [],
stub: 1
};

var inputRadio = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"adl2-input-radio",class:_vm.conditionalClasses,attrs:{"data-testid":"input-radio-container"}},[_c('input',{staticClass:"adl2-input-radio__input",attrs:{"aria-checked":_vm.ariaChecked,"aria-label":_vm.ariaLabel,"disabled":_vm.disabled,"type":"radio","role":"radio"},domProps:{"checked":_vm.isChecked,"value":_vm.value},on:{"change":_vm.onClick}}),_vm._v(" "),(_vm.shouldShowDescription)?_c('span',{staticClass:"adl2-input-radio__description"},[(_vm.shouldShowLabel)?_c('span',{staticClass:"adl2-input-radio__label"},[_vm._t("default")],2):_vm._e(),_vm._v(" "),(_vm.shouldShowSubLabel)?_c('span',{staticClass:"adl2-input-radio__sub-label"},[_vm._t("subLabel")],2):_vm._e()]):_vm._e()])},
staticRenderFns: [],
stub: 1
};

var AdlInputRadioPropClasses;
(function (AdlInputRadioPropClasses) {
    AdlInputRadioPropClasses["INLINE"] = "inline";
    AdlInputRadioPropClasses["LABEL_FIRST"] = "label-first";
})(AdlInputRadioPropClasses || (AdlInputRadioPropClasses = {}));

var tab = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"adl-tabs-handle",class:_vm.conditionalClasses,attrs:{"data-testid":_vm.testId,"role":"tab"},on:{"click":_vm.activate}},[_vm._t("title",function(){return [_c('span',{staticClass:"adl-tabs-handle__title"},[_vm._v(_vm._s(_vm.title))])]}),_vm._v(" "),_c('portal',{attrs:{"to":_vm.contentName}},[_vm._t("default")],2)],2)},
staticRenderFns: [],
stub: 1
};

var tabs = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"adl-tabs"},[_c('div',{staticClass:"adl-tabs__handles",attrs:{"role":"tablist"}},[_vm._t("default")],2),_vm._v(" "),_c('div',{staticClass:"adl-tabs__content",attrs:{"data-testid":"adl-tabs-portal-content"}},[_c('portal-target',{attrs:{"name":_vm.activeTabContentName}})],1)])},
staticRenderFns: [],
stub: 1
};

var AdlTabsHandleState;
(function (AdlTabsHandleState) {
    AdlTabsHandleState["ACTIVE"] = "active";
    AdlTabsHandleState["DISABLED"] = "disabled";
})(AdlTabsHandleState || (AdlTabsHandleState = {}));

var toggle = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"adl2-toggle",class:_vm.conditionalClasses,attrs:{"data-testid":"label"}},[_c('span',[_c('input',{staticClass:"adl2-toggle__input",attrs:{"aria-checked":_vm.value === true ? 'true' : 'false',"disabled":_vm.disabled,"aria-label":_vm.ariaLabel,"role":"switch","type":"checkbox"},domProps:{"checked":_vm.value,"value":_vm.value},on:{"change":function ($event) { return _vm.$emit('input', $event.target.checked); }}}),_vm._v(" "),_vm._m(0)]),_vm._v(" "),(_vm.shouldDisplayLabelSlot)?_c('span',{staticClass:"adl2-toggle__description"},[_c('span',{staticClass:"adl2-toggle__label",attrs:{"data-testid":"inner-label"}},[_vm._t("default")],2),_vm._v(" "),(_vm.shouldDisplaySubLabelSlot)?_c('span',{staticClass:"adl2-toggle__sub-label"},[_vm._t("subLabel")],2):_vm._e()]):_vm._e()])},
staticRenderFns: [function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"adl2-toggle__track"},[_c('span',{staticClass:"adl2-toggle__handle"})])}],
stub: 1
};

var AdlTogglePropClasses;
(function (AdlTogglePropClasses) {
    AdlTogglePropClasses["INLINE"] = "inline";
    AdlTogglePropClasses["LABEL_FIRST"] = "label-first";
})(AdlTogglePropClasses || (AdlTogglePropClasses = {}));

var Tooltip = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('adl-popper-container',{staticClass:"adl2-tooltip",class:_vm.conditionalClasses,attrs:{"target-element":_vm.targetElement,"position":_vm.position,"offset":[0, _vm.offset],"arrow":{ classes: ['adl2-tooltip__arrow'] },"aria-hidden":!_vm.isShown,"tabindex":_vm.tabIndex,"role":"tooltip"}},[_vm._v("\n    "+_vm._s(_vm.content)+"\n")])},
staticRenderFns: [],
stub: 1
};

var AdlTooltipPosition;
(function (AdlTooltipPosition) {
    AdlTooltipPosition["TOP"] = "top";
    AdlTooltipPosition["RIGHT"] = "right";
    AdlTooltipPosition["BOTTOM"] = "bottom";
    AdlTooltipPosition["LEFT"] = "left";
})(AdlTooltipPosition || (AdlTooltipPosition = {}));
var AdlTooltipState;
(function (AdlTooltipState) {
    AdlTooltipState["HIDDEN"] = "hidden";
})(AdlTooltipState || (AdlTooltipState = {}));

var AdlLabelPositions;
(function (AdlLabelPositions) {
    AdlLabelPositions["BEFORE"] = "before";
    AdlLabelPositions["AFTER"] = "after";
})(AdlLabelPositions || (AdlLabelPositions = {}));

const optionsSupport = (() => {
    const support = {
        capture: false,
        passive: false,
        once: false,
    };
    try {
        const options = {
            get capture() {
                support.capture = true;
                return false;
            },
            get passive() {
                support.passive = true;
                return false;
            },
            get once() {
                support.once = true;
                return false;
            },
        };
        document.addEventListener('test', null, options);
        document.removeEventListener('test', null, options);
    }
    catch {
    }
    return support;
})();
function listen(target, type, listener, options) {
    if (type.indexOf(' ') >= 0) {
        const cleanupBatch = type.split(' ').map(eventType => listen(target, eventType, listener, options));
        return () => cleanupBatch.forEach(cleanup => cleanup && cleanup());
    }
    let cleanup;
    let eventOptions;
    let useNativeOnce = false;
    const eventListener = event => {
        if (options?.self && event.target !== target) {
            return;
        }
        try {
            listener(event);
        }
        finally {
            if (options?.once) {
                cleanup();
            }
        }
    };
    cleanup = () => {
        if (!useNativeOnce) {
            target.removeEventListener(type, eventListener, eventOptions);
        }
        options?.vm?.$off('hook:beforeDestroy', cleanup);
        options?.onCleanup?.();
    };
    if (options?.capture) {
        eventOptions = optionsSupport.capture ? { capture: true } : true;
    }
    if (options?.passive && optionsSupport.passive) {
        eventOptions = { ...eventOptions, passive: true };
    }
    if (options?.once && optionsSupport.once) {
        if (!options?.self && !options?.vm && !options?.onCleanup) {
            useNativeOnce = true;
            eventOptions = { ...eventOptions, once: true };
        }
    }
    if (options?.vm) {
        if (!(options.vm instanceof Vue)) {
            throw new TypeError('options.vm is not a Vue component instance');
        }
        options.vm.$once('hook:beforeDestroy', cleanup);
    }
    target.addEventListener(type, eventListener, eventOptions);
    return cleanup;
}

const TooltipComponent = Vue.extend(Tooltip);
const tooltipInstances = [];
const ariaDescribedByAttr = 'aria-describedby';
let tooltip;
let open = false;
const createTooltip = (el) => {
    tooltip = new TooltipComponent({ propsData: { targetElement: el, content: '' } }).$mount();
    document.body.appendChild(tooltip.$el);
};
const destroyTooltip = () => {
    document.body.removeChild(tooltip.$el);
    tooltip.$destroy();
    tooltip = undefined;
};
const getTooltipPosition = (binding) => Object.values(AdlTooltipPosition).includes(binding.arg)
    ? binding.arg
    : AdlTooltipPosition.TOP;
const getTooltipInstanceForTarget = (el) => tooltipInstances.find(ctx => ctx.target.isEqualNode(el) && ctx.target === el);
const showTooltip = (el) => {
    const tooltipInstance = getTooltipInstanceForTarget(el);
    if (!tooltipInstance.content || !el) {
        return;
    }
    if (!el.getAttribute(ariaDescribedByAttr)) {
        el.setAttribute(ariaDescribedByAttr, tooltip.id);
    }
    open = true;
    tooltip.content = tooltipInstance.content;
    tooltip.position = tooltipInstance.position;
    Vue.nextTick(() => {
        if (!open) {
            return;
        }
        tooltip.targetElement = el;
        tooltip.isShown = true;
    });
};
const hideTooltip = (el) => {
    open = false;
    if (el && el.getAttribute(ariaDescribedByAttr) === tooltip.id) {
        el.removeAttribute(ariaDescribedByAttr);
    }
    tooltip.isShown = false;
};
const TooltipDirective = {
    bind(el, binding) {
        if (tooltipInstances.length === 0) {
            createTooltip(el);
        }
        const show = () => showTooltip(el);
        const hide = () => hideTooltip(el);
        const tooltipInstance = {
            target: el,
            content: binding.value,
            position: getTooltipPosition(binding),
            removeListeners: [
                listen(el, 'mouseenter', show),
                listen(el, 'mouseleave', hide),
                listen(el, 'focus', show),
                listen(el, 'blur', hide),
            ],
        };
        tooltipInstances.push(tooltipInstance);
    },
    update(el, binding) {
        const tooltipInstance = getTooltipInstanceForTarget(el);
        if (tooltipInstance.content !== binding.value) {
            tooltipInstance.content = binding.value;
            if (tooltip.isShown && tooltip.targetElement.isEqualNode(el)) {
                if (!tooltipInstance.content) {
                    tooltip.isShown = false;
                }
                else {
                    tooltip.content = binding.value;
                }
            }
        }
        if (tooltipInstance.position !== binding.arg) {
            const position = getTooltipPosition(binding);
            tooltipInstance.position = position;
            tooltip.position = position;
        }
    },
    unbind(el) {
        const context = getTooltipInstanceForTarget(el);
        context.removeListeners.forEach(removeListener => {
            removeListener();
        });
        hideTooltip(el);
        tooltipInstances.splice(tooltipInstances.indexOf(context), 1);
        if (tooltipInstances.length === 0) {
            destroyTooltip();
        }
    },
};

export { AdlButton, buttonGroup as AdlButtonGroup, AdlButtonIconPosition, AdlButtonPropClasses, AdlButtonVariant, card as AdlCard, cardImage as AdlCardImage, AdlCardImagePosition, AdlCardPropClass, checkbox as AdlCheckbox, inputRadio as AdlInputRadio, AdlInputRadioPropClasses, AdlLabelPositions, tab as AdlTab, tabs as AdlTabs, AdlTabsHandleState, AdlTheme, toggle as AdlToggle, AdlTogglePropClasses, Tooltip as AdlTooltip, TooltipDirective as AdlTooltipDirective, AdlTooltipPosition, AdlTooltipState, AdlVue as default, setDefaultTheme };
