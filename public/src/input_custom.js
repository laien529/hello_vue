Vue.component('input-custom', {
    template: "<div><input type='text' name='' id='' :value='current' @change='comHandleInput' v-on:keyup.up='up' v-on:keyup.down='down'>&nbsp;<button @click='down'>-</button>&nbsp;<button @click='up'>+</button></div>",
    props: {
        val: Number,
        min: {
            type: Number,
            default: -Infinity
        },
        max: {
            type: Number,
            default: Infinity
        },
        step: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            current: this.val
        }
    },
    methods: {
        comHandleInput: function (event) {
            // console.error(this.val)
            var val = event.target.value.trim()
            console.log('handle change:' + val)
            if (val > this.max || val < this.min) {
                console.log('handle change return')
                return;
            }
            this.$emit('handle', val)
            this.$emit('on-change', val)

        },
        up: function () {
            console.log(this.current)
            if (this.current >= this.max) {
                this.current = this.max
                return;
            }
            this.current += this.step
            console.log(this.current)

        },
        down: function () {
            if (this.current <= this.min) {
                this.current = min
                return;
            }
            this.current -= this.step
        }

    },
    watch: {
        current: function () {
            // console.log(this.current)
            this.$emit('handle', this.current)
        }
    }
});