Vue.directive('csc', {
    bind: function (el, bindng, vnodes) {
        console.log('hello csc')
        console.log(bindng)
    }
});

var bus = new Vue({

})
var vm = new Vue({
    el: "#app",
    data: {
        tabsList: ['tab1', 'tab2', 'tab3'],
        currentindex: 0
    },
    method: {},
    mounted: function () {
        bus.$on('on-msg', function (msg) {
            this.currentindex = msg;
        });
    }
});
