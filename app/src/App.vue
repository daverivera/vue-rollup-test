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
 
<script lang="ts">

            /*<adl-button*/
                /*@on-click="clickedButtonAction"*/
            /*>*/
                /*Button */
            /*</adl-button>*/
 
/*import { AdlButton } from '@adyen/adl-vue-components';*/
 
export default {
    name: "App",
    components: {
        /*AdlButton*/
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
