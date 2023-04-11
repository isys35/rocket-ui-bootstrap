import 'simplebar';
import ResizeObserver from 'resize-observer-polyfill';
import SimpleBar from "simplebar";
window.ResizeObserver = ResizeObserver;

import { Dropdown } from 'bootstrap';

const side_nav = document.querySelector(".side-nav");
const wrapper = document.querySelector(".wrapper");
const toggler = document.querySelector(".side-nav__header__toggler");
const mobileTogglers = document.querySelectorAll('.mobile-menu-toggler');

function toogle(event) {
    event.preventDefault();
    side_nav.classList.toggle("side-nav--simple");
    wrapper.classList.toggle("wrapper--simple");
}

function toogleMobile(event) {
    event.preventDefault();
    side_nav.classList.toggle("side-nav--active");
}

toggler.addEventListener("click", toogle);
mobileTogglers.forEach(mobileToggler => mobileToggler.addEventListener("click", toogleMobile));
new SimpleBar(document.querySelector('.scrollable'));