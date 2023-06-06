<template>
    <div>
        <h1>Third Index Title</h1>
        <div class="health">
            <div class="health-blood" :style="{ 'width': width + '%' }"></div>
        </div>
        <div>
            <button @click="punch" :disabled="disabled">Punch</button>
            <button @click="superpunch" :disabled="superp">Super Punch</button>
            <button @click="heal">Heal</button>
        </div>
        <div>
            <ul v-for="x in propty" :key="x">
                <li>
                    {{ x.name }} -- {{ x.id }}
                </li>
            </ul>
            <form action="">
                <input type="text" ref="input" v-model="input1" value="">
                <h2>{{ input1 }}</h2>
                <button @click.prevent="submit">submit</button>
            </form>
            <h3 ref="hello" v-if="hide" :class="{ hell0: true }">hello</h3>
            <button @click="hide = !hide">hide</button>
        </div>
        <TheButton btntext="submit" />
        <TheButton btntext="Not submit" />
        <div>
            <button @click="$emit('chnageTitle', 'text is change')">click me</button>
        </div>
        <div>
            <p>{{ text1 }}</p>
            <button @click="gm">Gm to Gn</button>
            <p v-html="html" :class="`btn--${width}`"></p>
        </div>
        <TheMin name="sarthik">
            <a slot="link">TheMin Link</a>
            <p slot="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nostrum!</p>
        </TheMin>
        <TheMin />
        <div>
            <input type="text" ref="input" placeholder="">
            <p>{{ input }}</p>
            <button @click="submit">submit</button>
        </div>
    </div>
</template>
<script>
import TheButton from "./TheButton.vue";
import TheMin from "./TheMin.vue";
export default {
    components: {
        TheButton,
        TheMin
    },
    name: "ThirdIndex",
    data() {
        return {
            input: "",
            heading: true,
            black: 'super-duper-active',
            html: "<p>HTML text here</p>",
            text1: "good morning",
            text2: "good night",
            input1: null,
            width: 100,
            disabled: false,
            reduce: 15,
            superp: true,
            count: 0,
            hide: true,
            redc: false,
            bio: ["sarthik", 23, 5.11, "ahmedabad"]
        }
    },
    props: {
        propty: Array
    },
    methods: {
        gm() {
            this.text1 = this.text2
        },
        punch() {
            this.count++
            console.log(this.count)
            if (this.count % 3 == 0) {
                this.superp = false
            }
            if (this.width >= this.reduce) {
                this.width -= this.reduce;
            }
            else if (this.width <= this.reduce) {
                this.width = 0;
                this.disabled = true;
            }
        },
        heal() {
            this.width = 100
            if (this.width >= 0) {
                this.disabled = false
            }
        },
        superpunch() {
            this.count = 0;
            this.width = 0;
            this.superp = true;
            if (this.width <= this.reduce) {
                this.width = 0;
                this.disabled = true;
            }
        },
        submit() {
            this.input = this.$refs.input.value
            console.log(this.$refs.input)
        }
    },
    mounted() {
        this.$refs.input.style.background = "red"
    }
}
</script>
<style>
.health {
    width: 600px;
    height: 30px;
    margin: 30px auto;
    border: 1px solid black;
}

.health-blood {
    background-color: red;
    height: 100%;
}
</style>