<template>
    <div :class="`main-${name}`">
        <slot name="link"></slot>
        <h1 >TheMin</h1>
        <slot name="para"></slot>
    </div>
</template>
<script>
export default {
    name: "TheMin",
    data() {
        return {

        }
    },
    props: {
        name: String
    }
}
</script>