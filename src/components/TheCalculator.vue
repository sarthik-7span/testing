<template>
    <div>
        <input type="text" class="display" v-model="display">
        <div class="buttons">
            <button v-for="button in buttons" :key="button.value" class="button" @click="append(button)">
                {{ button.label }}
            </button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            display: "0",
            buttons: [
                { label: "1", value: "1" },
                { label: "2", value: "2" },
                { label: "3", value: "3" },
                { label: ".", value: "." },
                { label: "4", value: "4" },
                { label: "5", value: "5" },
                { label: "6", value: "6" },
                { label: "=", value: "=" },
                { label: "7", value: "7" },
                { label: "8", value: "8" },
                { label: "9", value: "9" },
                { label: "+", value: "+" },
                { label: "-", value: "-" },
                { label: "/", value: "/" },
                { label: "%", value: "%" },
                { label: "0", value: "0" },
                { label: "AC", value: "AC" },
            ]
        }
    },
    methods: {
        append(button) {
            const { value } = button;
            if (value === "=") {
                this.cal()
            }
            else if (value === "AC") {
                this.display = "0"
            }
            else {
                this.add(value)
            }
        },
        add(value) {
            if (this.display === "0") {
                this.display = value
            } else {
                this.display += value
            }
        },
        cal() {
            const result = eval(this.display).toString()
            this.display = result
        }
    }
}
</script>
<style>
.buttons {
    display: grid;
    grid-template-columns: auto auto auto auto;
    width: 35%;
    margin: auto;
    margin-top: 20px;
}

.button {
    padding: 10px;
    font-size: 20px;
}

.display {
    padding: 10px;
}

input {
    font-size: 20px;
}
</style>