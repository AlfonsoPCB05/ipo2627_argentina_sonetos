export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // Inicialización
        this.onSonnetListLoaded();
        this.view.bindSelectSonnet(this.handleSonnetSelection.bind(this));
    }

    onSonnetListLoaded() {
        let sonnets = this.model.getAllSonnets();
        this.view.populateSelect(sonnets);
    }

    handleSonnetSelection(sonnetId) {
        if (!sonnetId) return;
        const sonnetData = this.model.getSonnetById(sonnetId);
        if (sonnetData) {
            this.view.renderSonnet(sonnetData);
        }
    }
}