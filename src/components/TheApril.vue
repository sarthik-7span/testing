<template >
    <div class="gray">
        <div>
            <h1>April Component</h1>
            <p>{{ name }}</p>
            <p>{{ count }}</p>
            <button @click="count++">counter increment</button>
            <button @click="count--">counter decrement</button>
            <p>FirstName: {{ FirstName }}</p>
            <p>LastName: {{ LastName }}</p>
            <input type="text" v-model.lazy="FirstName" placeholder="FirstName"><br>
            <input type="text" v-model.lazy="LastName" placeholder="LastName"><br>
            <b>{{ FirstName_note }}</b><br>
            <b>{{ LastName_note }}</b>
        </div>
        <div class="card-wrap">
            <ul class="card" v-for="item in Bus" :key="item.id">
                <li>Name: {{ item.name }}</li>
                <li>Set.No: {{ item.set }}</li>
                <li>Pick-up Place: {{ item.place }}</li>
            </ul>
        </div>
        <div>
            {{ json_data.name }}:
            {{ json_data.age }}
            <ul>
                <li v-for="item in json_data.hobbies" :key="item">{{ item }}</li>
            </ul>
        </div>
        <div v-if="bossdata">
            <input type="text" v-model.lazy="name">
            <p>{{ Fname }}</p>
            <button @click="updateName()">click me</button>
        </div>
        <p>{{ bossdata }}</p>
        <button @click="bossfunc()">Click here</button>
        <div>
            {{ hell(33) }}
        </div>
        <h2>hello event</h2>
        <input type="text" @keypress="hell">
        <h1 :style="{ color: 'red' }">{{ text }}</h1>
        <h1 :class="{ colorbg: show }">{{ text }}</h1>
        <p :class='[show ? "classbg" : "classog"]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores,
            culpa?</p>
        <form v-if="destroy">
            <div>
                <label for="username">Username:</label>
                <input type="text" id="username" v-model="username" @input="userafter">
                <div v-if="usernameValid">Username must be at least 5 characters.</div>
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" @input="passwordafter()">
                <div v-if="passwordValid">Password must be at least 8 characters.</div>
            </div>
            <button type="submit" @click.prevent="submitForm">Submit</button>
            <p v-if="formSubmit">Your form is successfully submited</p>
        </form>
        <h2>{{ text_exp | toUpperCase }}</h2>
        <p v-html="reversedStr | bold"></p>
        <div>
            <ul v-for="x in Api_data" :key="x.id">
                <li>{{ x.title }}</li>
                <li>{{ x.body }}</li>
            </ul>
        </div>
        <div>
            <postComp xyz="xyz" abc="abc">
                <template v-slot:second>
                <h1 >PostComp Slot</h1>
                </template>
            </postComp>
        </div>
        <h1 v-my-directive="'blue'">Routing Section</h1>
        <div>
            <router-link to="/theall/">Router link : TheSub</router-link>
        </div>
        <br>
        <br>
        <button>click me</button>
        <component :is="currentComponent"></component>
        <button @click="DyComp">Dynamic Component</button>
        <h1>{{  jjname??jjsurname }}</h1>

        <div ref="gginput">
            <input type="text" value="11">
            <button @click="gg()">clicck me</button>
            <h2>{{ gginputF }}</h2>
        </div>
        <TheCalculator/>
    </div>
    
</template>
<script>
import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import data from '../data.json';
import searchmixin from "../mixins/searchmixin";
import postComp from "./postComp.vue";
import ComponetA from "./ComponetA.vue";
import ComponetB from "./ComponetB.vue";
import TheCalculator from "./TheCalculator.vue";
Vue.use(VueAxios, axios);

export default {
    name: "TheApril",
    props: {
        boss: Boolean,
        text: {
            type: Number,
            default: 22
        }
    },
    components: {
        postComp,
        ComponetA,
        ComponetB,
        TheCalculator
    },
    data() {
        return {
            jjname: null,
            jjsurname: "456",
            name: true,
            count: 0,
            FirstName: "",
            LastName: "",
            FirstName_note: "",
            LastName_note: "",
            show: false,
            Bus1:[1,1,1,1,1,1,1],
            Bus: [
                { id: 1, name: "Sanjay", set: 1, place: "New CG Road" },
                { id: 2, name: "Sunny", set: 2, place: "CG Road" },
                { id: 3, name: "Jay", set: 3, place: "New York City" },
                { id: 4, name: "Jaymin", set: 4, place: "New York City" },
                { id: 5, name: "Jaysukh", set: 5, place: "New York City" }
            ],
            json_data: data,
            age: 30,
            Fname: "sarthik",
            note: '',
            x: 10,
            y: 20,
            detail: {
                name: null,
                age: null,
                technologie: []
            },
            bossdata: this.boss,
            username: '',
            password: '',
            usernameValid: false,
            passwordValid: false,
            formSubmit: false,
            text_exp: "lorem10e e e  e eeeeeeee eeessxkm xkmckxewcx kewcmxke kemxex kmwdk",
            reversedStr: '<span>This text may be bold</span>',
            Api_data: null,
            currentComponent: "ComponetA",
            gginputF:""
        }
    },
    watch: {
        count(newValue, oldValue) {
            if (newValue < oldValue) {
                alert('New value is less than old value')
            }
            console.log(`Count changed from ${oldValue} to ${newValue}`);
        },
        FirstName(newValue) {
            this.FirstName_note = `You have chnge the FirstName to ${newValue}`
        },
        LastName(newValue) {
            this.LastName_note = `You have chnge the FirstName to ${newValue}`
        }
    },
    methods: {
        updateName() {
            this.name = !this.name
        },
        updatefName() {
            console.log("abcd")
        },
        bossfunc() {
            this.bossdata = !this.bossdata
            this.$emit("data-updated", this.bossdata);
        },
        hell() {
            console.log("value")
        },
        submit() {
            this.error = []
            console.warn(this.detail)
            if (!this.detail.name) {
                this.error.push("name is required")
            }
            if (!this.detail.age) {
                this.error.push("age is required")
            }
            console.log(this.error)
        },
        submitForm() {
            if (this.username.length <= 5) {
                this.usernameValid = true
            }
            if (this.password.length < 8) {
                this.passwordValid = true
            }
            if (this.username.length >= 5 && this.password.length > 8) (
                this.formSubmit = true
            )
            else (this.formSubmit = false)
        },
        userafter() {
            if (this.username.length >= 5) {
                this.usernameValid = false
            }
        },
        passwordafter() {
            if (this.password.length >= 8) {
                this.passwordValid = false
            }
        },
        DyComp() {
            if (this.currentComponent === "ComponetA") {
                this.currentComponent = "ComponetB"
            }
            else {
                this.currentComponent = "ComponetA"
            }
        },
        gg() {
            this.gginputF = this.$refs.gginput.value
            console.log(this.$refs.gginput.style.color = "red")
            this.$refs.gginput.querySelector("input").style.padding="20px"
        }
    },
    computed: {

    },
    mixins: [searchmixin],
    mounted() {
        Vue.axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.Api_data = response.data
                console.log(this.Api_data)
            })
            .catch(error => {
                console.log(error)
            })
    },
    directives: {
        'my-directive': {
            bind(el, binding) {
                el.style.color = binding.value
            }
        }
    }
}
</script>
<style>
.gray {
    background-color: rgb(236, 236, 236);
}

.card {
    background-color: rgb(174, 244, 244);
    padding: 20px;
    list-style-type: none;
}

.card-wrap {
    display: flex;
    justify-content: center;
    gap: 30px;
}

.colorbg {
    background-color: orange;
}

.card li {
    font-size: 20px;
}
</style>