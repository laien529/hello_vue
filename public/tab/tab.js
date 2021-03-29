Vue.component('tab', {
    props: {
        tabname: String,
        index: Number
    },
    template: "<button @click='selecttab(index)'>{{tabname}}</button>",
    methods: {
        selecttab: function (index) {
            console.log('send ' + this.index);
            bus.$emit('on-msg', this.index);
        }
    },
});