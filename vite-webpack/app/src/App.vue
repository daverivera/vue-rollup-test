<template>
    <div>
        <head>
            <h1>ADL Test project</h1>
        </head>
        <article>
            <!-- <ds-button @click="clickedButtonAction">Increment</ds-button> -->
            <account-switch />
            <span>{{ count }}</span>
        </article>
    </div>
</template>
 
<script lang="ts">


// import { DsButton } from '@drivera/lib'
/*import { multi } from '@drivera/funcs'*/
import {AccountSwitch} from '@adyen/ui-assets-icons-16'
 
export default {
    name: "App",
    components: {
AccountSwitch,
        // DsButton
    },
    setup() {
        // console.log(Icons)
        return {
            count: 0,
        }
    },
};
</script>
