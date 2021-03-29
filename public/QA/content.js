Vue.component('one', {
    template: "<div><label v-for='obj in contents'><input  v-model='selected'  selected='value' type=\"radio\" name=\"one\" id=\"\" title='obj' >{{obj}}</label></div>",
    props: {
        contents: Array
    },
    data() {
        return {
            selected:['11']
        }
    },
    watch:{
        selected(){
            console.log(this.selected)
            this.$emit('setinput', this.selected);
        }
    }
});

Vue.component('muti', {
    template: "<div><label v-for=\"obj in contents\"><input  v-model='selected' type=\"checkbox\" name=\"muti\" id=\"\" checked='value'>{{obj}}</label></div>",
    props: {
        contents: Array
    },
    data() {
        return {
            selected:[]
        }
    }
});

Vue.component('input1', {
    template: "<textarea v-model='inputtext' name=\"\" id=\"\" cols=\"30\" rows=\"10\"></textarea>",
    props: {
        contents: Array
    },
    data() {
        return {
            inputtext:''
        }
    }
});