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
 
<script lang="ts">

import { DsButton } from 'lib'
 
export default {
    name: "App",
    components: {
        DsButton
    },
    data() {
        return {
            count: 0,
        }
    },
    methods: {
        clickedButtonAction(): void {
            console.log(this)
            // this.count += 1;
        }
    }
};
</script>
