<template>
    <div>
        <head>
            <h1>ADL Test project</h1>
        </head>
        <article>
            <span>{{ count }}</span>
        </article>
 
    </div>
</template>
 
<script>

            /*<ds-button @click="clickedButtonAction">Increment</ds-button>*/
/*import { DsButton } from '@drivera/lib'*/
import { multi } from '@drivera/funcs'
 
export default {
    name: "App",
    components: {
        /*DsButton*/
    },
    data() {
        return {
            count: 0,
        }
    },
    methods: {
        clickedButtonAction(): void {
            const numbers = multi(2*4);
            console.log(this, { numbers })
            /*console.log(this)*/
            // this.count += 1;
        }
    }
};
</script>

<style scoped>
</style>
