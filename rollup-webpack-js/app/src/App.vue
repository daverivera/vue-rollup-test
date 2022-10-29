<template>
    <div>

        <head>
            <h1>ADL Test project</h1>
        </head>
        <article>
            <ds-button @click="clickedButtonAction">Increment</ds-button>
            <span>{{ count }}</span>
        </article>
    </div>
</template>

<script>
import { DsButton } from '@borys/lib';

export default {
    components: {
        DsButton
    },
    data() {
        return {
            count: 0,
        }
    },
    methods: {
        clickedButtonAction() {
            console.log(this)
        }
    }
};
</script>
