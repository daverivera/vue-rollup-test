<template>
    <div>

        <head>
            <h1>ADL Test project</h1>
        </head>
        <article>
            <adl-button @on-click="clickedButtonAction">Increment</adl-button>
            <span>{{ count }}</span>
            <adl-card>
                <template #headerActions>
                    <adl-button variant="secondary">Secondary</adl-button>
                    <adl-button>Primary</adl-button>
                </template>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum sem, fermentum ut erat at, porta lacinia sapien. Maecenas venenatis massa justo, ut ornare mi lacinia interdum. Vivamus tristique, lorem id vestibulum suscipit, nulla risus fermentum orci, at ultrices augue ipsum sed purus. Nam facilisis tellus fringilla facilisis blandit. Quisque commodo metus mi. Morbi bibendum elit ut leo aliquet tempus. Vestibulum eu consectetur nulla.
            </adl-card>
        </article>
    </div>
</template>

<script>
import { AdlButton, AdlCard } from '@borys/lib';


export default {
    components: {
        AdlButton,
        AdlCard
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
