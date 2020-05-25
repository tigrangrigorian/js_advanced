export default {
    data() {
        return {
            names: ['koo', 'loo', 'boo', 'noo'],
            searchName: ''
        }
    },
    computed: {
        filteredName() {
            return this.names.filter(n => {
                return n.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
            })
        }
    },
}
