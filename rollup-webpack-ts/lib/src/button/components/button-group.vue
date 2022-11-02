<template>
    <div class="adl2-button-group">
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
    .adl2-button-group {
        display: flex;

        button {
            $grouped-button-offset: -4px;

            border-radius: 0;
            border-right-width: 0;

            &:first-of-type {
                border-bottom-left-radius: var(--adl-button-border-radius);
                border-top-left-radius: var(--adl-button-border-radius);
                margin-right: $grouped-button-offset;
            }

            &:last-of-type {
                border-bottom-right-radius: var(--adl-button-border-radius);
                border-right-width: var(--adl-button-border-width);
                border-top-right-radius: var(--adl-button-border-radius);
                margin-left: $grouped-button-offset;
            }

            &:hover + .adl2-button--secondary {
                border-left-color: var(--adl-button-secondary-hover-border-color);
            }

            &:hover + .adl2-button--secondary-destructive {
                border-left-color: var(--adl-button-secondary-destructive-hover-border-color);
            }
        }
    }
</style>
