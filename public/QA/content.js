Vue.component('one', {
    template: "<div><label v-for='obj in contents'><input  value = 'obj' type=\"radio\" name=\"\" id=\"\" title='obj'>{{obj}}</label></div>",
    props: {
        contents: Array
    }
});

Vue.component('muti', {
    template: "<div><label  v-for=\"obj in contents\"><input type=\"checkbox\" name=\"\" id=\"\" value='obj'>{{obj}}</label></div>",
    props: {
        contents: Array
    }
});

Vue.component('input1', {
    template: "<textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\"></textarea>",
    props: {
        contents: Array
    }
});