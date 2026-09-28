import Model from '/Model.js';
import View from '/View.js';
import Controller from '/Controller.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = new Controller(new Model(), new View());
});