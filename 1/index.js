console.log("hello Node")
import slugify  from 'slugify'
import {hello,topla} from './my-module.js'
let toplam =topla(3,2)
let str=slugify('some string', '_')  // some_string
console.log(str)
console.log(toplam)
hello()