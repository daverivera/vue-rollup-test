<template>
    <button
        class="adl2-button"
        :class="conditionalClasses"
        :disabled="disabled"
        type="button"
        :aria-label="ariaLabel"
        @click="onClickButton"
    >
        <span v-if="icon" class="adl2-button__icon" data-testid="icon-button">
        </span>
        <span v-if="$slots.default" class="adl2-button__label">
            <slot></slot>
        </span>
    </button>
</template>

<script lang="ts">
    import { PropType, defineComponent } from 'vue';
    import { AdlButtonVariant, AdlButtonIconPosition, AdlButtonPropClasses } from './button.types';
    
    /**
     * Button component for all the various types of ADL buttons.
     *
     * import { AdlButton, AdlIconPosition } from '@adyen/adl-vue-components';
     */
    export default defineComponent({
        name: 'adl-button',
        inheritAttrs: false,
        props: {
            /**
             * Full container width button size.
             */
            block: {
                type: Boolean,
                default: false,
            },

            /**
             * Disables button functonality
             */
            disabled: {
                type: Boolean,
                default: false,
            },

            /**
             * Displays button as destructive
             */
            destructive: {
                type: Boolean,
                default: false,
            },

            /**
             * Is a tertiary variant of the secondary button type.
             */
            tertiary: {
                type: Boolean,
                default: false,
            },

            /**
             * Reduces sizing of button
             */
            small: {
                type: Boolean,
                default: false,
            },

            /**
             * Types of flavour of Button
             * @values primary, secondary, ghost
             */
            variant: {
                type: String as PropType<AdlButtonVariant>,
                default: AdlButtonVariant.PRIMARY,
                validator: (value: AdlButtonVariant) => Object.values(AdlButtonVariant).includes(value),
            },

            /**
             * Icon that appears next to the button text.
             */
            icon: {
                type: String,
                default: undefined,
            },

            /**
             * Icon position relative to button text.
             * @values before, after
             */
            iconPosition: {
                type: String as PropType<AdlButtonIconPosition>,
                default: AdlButtonIconPosition.BEFORE,
                validator: (value: AdlButtonIconPosition) => Object.values(AdlButtonIconPosition).includes(value),
            },
        },
        computed: {
            ariaLabel(): string {
                return this.$slots?.default?.[0].text || 'button';
            },
            conditionalClasses(): {
                [x: string]: boolean;
            } {
                return {
                    [`adl2-button--${this.variant}${
                        this.destructive && !this.ghost ? `-${AdlButtonPropClasses.DESTRUCTIVE}` : ''
                    }`]: true,
                    [`adl2-button--${AdlButtonPropClasses.TERTIARY}`]:
                        this.tertiary && this.variant === AdlButtonVariant.SECONDARY,
                    [`adl2-button--${AdlButtonPropClasses.SMALL}`]: this.small,
                    [`adl2-button--${AdlButtonPropClasses.BLOCK}`]: this.block,
                    [`adl2-button--${AdlButtonPropClasses.ICON_POSITION_AFTER}`]:
                        this.iconPosition === AdlButtonIconPosition.AFTER,
                };
            },
        },
        methods: {
            onClickButton() {
                if (!this.disabled) {
                    this.$emit('on-click');
                }
            },
        },
    });
</script>

<style lang="scss" scoped>
    @import 'button';
</style>
