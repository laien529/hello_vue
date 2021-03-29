
Vue.component('com-1', {
    template: "<div><H1><font color='red'>style</font></H1><div><button id='com'>click me</button></div></div>",
    data() {
        return {
            value1: this.hello_com1,
        }
    },
    computed: {
        style: function () {
            
            return {
                style: hello_com1 + '~~~~'
            }
        }
    },
    props: ['hello_com1']
    
});

Vue.component('com-2', {
    template: "<div><ul><li v-for='item in items'>{{item}}</li></ul><div><button id='com' @click='add'>click me2</button></div></div>",
    data() {
        return {
            value1:this.items
        }
    },
    methods: {
        add: function () {
            this.value1.push('add item')
        }
    },
    computed: {
        style: function () {
            
            return {
                style: hello_com1 + '~~~~'
            }
        }
    },
    props: {
        items: {
            type:Number
        }
    }
    
});

Vue.component('com-3', {
    template: "<div><div><button id='com3' @click='click3'>click me3</button></div></div>",
    data() {
        return {
            value3:100
        }
    },
    methods: {
        click3: function () {
            this.value3++;
            this.$emit('input', this.value3)
            console.log(this.value3)
        }
    },
    computed: {
        style: function () {
            
            return {
            }
        }
    },
    props: {
        items: {
        }
    }
    
});
Vue.component('com-slot', {
    template: "<div><slot v-for='car in cars' :slot_msg = 'car'></slot></div> ",
    data() {
        return {
            cars:['宝马320Li','奥迪A4L','奔驰C200L','凯迪拉克CT6']
        }
    }
});
Vue.component('com-inline', {
    data() {
        return {
            inline_data:'test inline'
        }
    },
});
Vue.component("lazy-com", function (resolve, reject) {
        window.setTimeout(function () {
            resolve({
                template: "<div>success</div>"
            })
        }, 3000);
    });
var vm = new Vue({
    el: '#com',
    data: {
        parent_value1: ['parenttttttt'],
        text1: 'it',
        parent_items: ['item1', 'item2'],
        md: 0,
        current_com:'comA'

    },
    components: {
        comA: {
            template:"<div><H2><font color='blue'>is a dyCom</font></H2></div>"
        }
    }
});