export var vm = new Vue({
    el: '#cstm',
    data: {
        value: 11
    },
    methods: {
        handle: function (value) {
            this.value = value;
            console.log('receive:' + this.value)
        }
    },
});