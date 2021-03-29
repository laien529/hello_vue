Vue.component('page', {
    template: "<div><slot name='pagetitle'></slot><slot name='pagecontent'></slot><slot name='pagebottom'></slot></div>",
    props: {
        page: Object
    }
});

Vue.component('pagetitle', {
    template: "<div>{{pageno}}.{{page.name}}</div>",
    props: {
        pageno: Number,
        page: Object

    }
});
Vue.component('pagecontent', {
    template: "<div>        \
        <one v-if=\"page.type ==='one'\" :contents='page.content'></one>\
        <muti v-else-if= \"page.type==='muti'\" :contents='page.content'></muti>\
        <input1 v-else></input1></div>",
    props: {
        page: Object

    }
})
Vue.component('pagebottom', {
    template: "<div><button v-show='getStatus().submit' id='submit' @click=\"sendmsg('submit    ')\">提交</button><button id='pre' @click=\"sendmsg('pre')\" v-show='getStatus().pre'>上一步</button><button id='next' @click=\"sendmsg('next')\"v-show='getStatus().next'>下一步</button><button id='reset' v-show='getStatus().reset' @click=\"sendmsg('reset')\">重置</button></div>",
    props: {
        pageno: Number,
        page: Object,
        current: Number,
        count: Number
    },
    data() {
        return {
            status: {
                pre: false,
                next: false,
                reset: true,
                submit: false
            }
        }
    },
    methods: {
        pre: function () {
            this.$emit("handle", "pre");
        },
        next: function () {
            console.log("cscsc")
            this.$emit("handle", "next");

        },
        reset: function () {
            this.$emit("handle", "pre");
        },
        submit: function () {
            console.log("cscsc")
            this.$emit("handle", "next");

        },
        sendmsg: function (val) {
            this.$emit("handle", val);

        },
        getStatus: function () {
            if (this.pageno < this.count) {
                this.status.next = true;
            } else {
                this.status.next = false;

            }
            if (this.pageno == 1) {
                this.status.pre = false;
            } else {
                this.status.pre = true;

            }
            if (this.pageno == this.count) {
                this.status.submit = true;
            } else {
                this.status.submit = false;

            }
            // console.log(this.pageno)
            // console.log(this.count)
            // console.log(this.status)

            return this.status
        }
    },
})