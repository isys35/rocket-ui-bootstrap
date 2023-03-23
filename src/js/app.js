import 'simplebar';
import ResizeObserver from 'resize-observer-polyfill';
import SimpleBar from "simplebar";
window.ResizeObserver = ResizeObserver;

const side_nav = document.querySelector(".side-nav");
const wrapper = document.querySelector(".wrapper");
const toggler = document.querySelector(".side-nav__header__toggler");

function toogle(event) {
    event.preventDefault();
    side_nav.classList.toggle("side-nav--simple");
    wrapper.classList.toggle("wrapper--simple");
}

toggler.addEventListener("click", toogle)
new SimpleBar(document.querySelector('.scrollable'));