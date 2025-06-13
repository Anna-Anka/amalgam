import GraphModal from 'graph-modal';

const BASE_MODAL = new GraphModal();
const MODAL_FORM = document.querySelector('[data-graph-target="modal-form"]');
const MODAL_THANK = document.querySelector('[data-graph-target="modal-thank"]');

new GraphModal('modal-form');
new GraphModal('modal-thank');

// if (MODAL_FORM && MODAL_THANK) {
//     BASE_MODAL.close('modal-form');
//     BASE_MODAL.open('modal-thank');
// }
