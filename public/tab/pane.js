Vue.component('pane', {
    data() {
        return {
            title: 'ttitle1',
            content: ['news 1news 1news 1news 1news 1news 1news 1news 1news 1news 1news 1', 'news 2news 2news 2news 2news 2news 2news 2news 2news 2news 2news 2', 'news 3news 3news 3news 3news 3news 3news 3news 3news 3news 3news 3'],
            current: 0
        }
    },
    props: {
        index: Number,
        // content: String
    },
    methods: {
        onmsg: function (index) {
            console.log(index)
        }
    },
    watch: {
        index() {
            this.current = this.index;
            console.log(this.current)
        }
    },
    template: "<div style='border-width:1;background-color:green'><label>{{title}}</label><p>{{content[current]}}</p><p>{{index}}</p></div>"
});