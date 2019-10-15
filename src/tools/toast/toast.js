import Vue from 'vue';
import toast from './toast.vue';

const Toast = Vue.extend(toast);

export default function ( {duration=2000, msg, type} ) {
    const app = new Toast({
        el: document.createElement('div'),
        data: {
            showClass: false,
            over: true,
            msg: msg,
            type: type,
        }
    });
    document.body.appendChild(app.$el);

    setTimeout(_ => {
        app.showClass = false;
    }, duration - 300);

    setTimeout(_ => {
        app.over = false;
    }, duration)
}