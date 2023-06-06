export default {
    computed: {
        filterblog() {
            return this.data.filter((get) => {
                return get.title.match(this.filter)
            })
        }
    },
    filters: {
        bold(value) {
            return `<b>${ value}</b>`
        },
        filter(value) { return value.slice(0, 100) },
        toUpperCase (value) {
            return value.toUpperCase()
        }
    },
}