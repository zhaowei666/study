import $ from 'jquery'
import '../css/index.css'
import '../css/test.less'
import '../css/test1.scss'

$(function() {
    $('li:odd').css('backgroundColor', '#ccc')
    $('li:even').css('backgroundColor', 'skyblue')
})
