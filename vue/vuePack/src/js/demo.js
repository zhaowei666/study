import $ from 'jquery'
import '../css/index.css'
import '../css/test.less'
import '../css/test1.scss'

import Vue from 'vue';
import App from '../components/App.vue'

$(function () {
    $('li:odd').css('backgroundColor', '#ccc')
    $('li:even').css('backgroundColor', 'skyblue')
})

var vm = new Vue({
    el: '#app',
    render: h => h(App)
})


class A {
    static info = '123'
}

console.log(A.info)
