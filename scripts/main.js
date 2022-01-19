
import { fishList } from './fishlist.js'

const div = document.querySelector(".fish__desc")


div.innerHTML = fishList();

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */

