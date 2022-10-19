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

/*import { DsButton } from '@drivera/comps'*/
import DsButton from '@drivera/comps'
/*import { multi } from '@drivera/funcs'*/
 
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
            /*const numbers = multi(2*4);*/
            /*console.log(this, { numbers })*/
            console.log(this)
            // this.count += 1;
        }
    }
};
</script>

<style scoped>
</style>
