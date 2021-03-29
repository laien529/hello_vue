var vm = new Vue({
    el: "#app",
    data: {
        pages: [
            {
                name: '请问性别是',
                type: 'one',
                content: ['男', '女', '保密']
            },
            {
                name: '请选择兴趣爱好',
                type: 'muti',
                content: ['看书', '写作', '听歌', '打球', '电影']
            },
            {
                name: '剪短的自我介绍',
                type: 'input',
                content: []
            }
        ],
        current: 0,
        forminput:[]

    },
    methods: {
        pre: function () {
            console.log('pre')
            this.current--;
        },
        next: function () {
            console.log('next')
            this.current++;

        },
        reset: function () {
            console.log('reset')
            this.forminput = []
        },
        submit: function () {
            console.log('submit')

        },
        handle: function (val) {
            if (val == 'pre') {
                this.pre()
            }
            if (val == 'next') {
                this.next()
            }
            if (val == 'reset') {
                this.reset()
            }
            if (val == 'submit') {
                this.submit()
            }
        }
    }
});