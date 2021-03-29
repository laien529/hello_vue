var shopping = new Vue({
    el: '#shopping',
    data: {
        list: [
            {
                type: "电子产品",
                items: [
                    {
                        id: 1,
                        name: 'iPhone 12',
                        price: 5999,
                        count: 1,
                        selected: true
                    },
                    {
                        id: 2,
                        name: 'iPad Pro',
                        price: 3999,
                        count: 1,
                        selected: true
                    },
                    {
                        id: 3,
                        name: 'Macbook pro 2021',
                        price: 15999,
                        count: 2,
                        selected: true
                    }]
            },
            {
                type: "果蔬",
                items: [
                    {
                        id: 1,
                        name: '苹果 12',
                        price: 599,
                        count: 1,
                        
                    },
                    {
                        id: 2,
                        name: '梨子 Pro',
                        price: 399,
                        count: 1,
                        
                    },
                    {
                        id: 3,
                        name: '西蓝花 2021',
                        price: 1599,
                        count: 2,
                       
                    }]
            }
        ],
        checkList: [''],
        selected: '',
        options: [],
        drinkings: [
            "coca cola",
            "juice",
            "milk",
            "water"
        ],
        selectedDrink: [],
        selectedFoods:123,
        isSelected: true,
        value1: "111111",
        value2: "22222",
        tg:true
        
    },
    mounted: function () {
        console.log('shopping vue mounted')
    },
    computed: {
        total: function () {
            var total = 0;
            this.checkList.forEach(item => {
                // console.log(item)
                total += item.price*item.count
            });
            return total
        }
    },
    methods: {
        add: function (item) {
            item.count += 1;
        },
        remove: function (item) {
            if (item.count == 0) {
                return;
            }
            item.count -= 1;

        },
        checkAll: function () {
            var total = []
            this.list.forEach(element => {
                element.items.forEach(obj => {
                    total.push(obj)
                });
            });
            if (this.checkList.length == total.length) {
                this.checkList = [];
            } else {
                this.checkList = []
                this.list.forEach(element => {
                    element.items.forEach(obj => {
                        this.checkList.push(obj)
                    });
                });
                // this.checkList = this.list;
            }
        }
    }
});