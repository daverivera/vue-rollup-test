<template>
    <div>
        <head>
            <h1>ADL Test project</h1>
        </head>
        <article>
            <!-- <ds-button @click="clickedButtonAction">Increment</ds-button> -->\
            <!-- <o-autocomplete></o-autocomplete> -->
            <g-button></g-button>
            <span>{{ count }}</span>
        </article>
    </div>
</template>
 
<script lang="ts">

/*import { DsButton } from '@drivera/comps'*/
import { GButton } from '@drivera/lib'
/*import { multi } from '@drivera/funcs'*/
// import { OAutocomplete } from '@oruga-ui/oruga'
 
export default {
    name: "App",
    components: {
        GButton
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
