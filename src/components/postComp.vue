<template>
    <div>
        <p>{{ abc }}</p>
        <slot name="first">Default</slot>
        <form action="" v-bind="$attrs">
            <input type="text" v-model="username">
            <input type="email" name="" id="" v-model="email">
            <input type="password" name="" id="" v-model="password">
            <button @click.prevent="submit"> Submit</button>
        </form>
        <slot name="second">Default</slot>
        <table>
            <th>
                <td>Username</td>
                <td>Email</td>
                <td>Password</td>
            </th>
            <tr v-for="item in data" :key="item.id">
                <td>{{ item.username }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.password }}</td>
                <td><button @click="deletee(item.id)">Delete</button></td>
            </tr>
        </table>
    </div>
</template>
<script>
import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);
export default {
    inheritAttrs: false,
    data() {
        return {
            username: "",
            email: "",
            password: "",
            data: null
        }
    },
    props:{
     abc :String
    },
    methods: {
        submit() {
            this.axios.get(`http://localhost:3000/user`).then((data) => this.data = data.data)
            // console.log("data is here:" + this.data)
        },
        deletee(id) {
            this.axios.delete(`http://localhost:3000/user/` + id)

            this.submit()
        }
    },
    mounted() {
        this.submit()
    }
}

</script>