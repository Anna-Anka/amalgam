import GraphModal from 'graph-modal';

window.BASE_MODAL = new GraphModal();
window.MODAL_FORM = document.querySelector('[data-graph-target="modal-form"]');
window.MODAL_THANK = document.querySelector('[data-graph-target="modal-thank"]');

new GraphModal('modal-form');
new GraphModal('modal-thank');

// if (MODAL_FORM && MODAL_THANK) {
//     BASE_MODAL.close('modal-form');
//     BASE_MODAL.open('modal-thank');
// }
