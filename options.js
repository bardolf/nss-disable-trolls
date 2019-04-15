// Saves options to chrome.storage
function save_options() {
    var trollsInput = document.getElementById('trolls').value;
    var removeInput = document.getElementById('remove').checked;
    chrome.storage.sync.set({
        trolls: trollsInput,
        remove: removeInput
    }, function () {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');        
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    chrome.storage.sync.get({
        trolls: 'Zmestabileho, naska, ciki333',
        remove: false
    }, function (items) {
        document.getElementById('trolls').value = items.trolls;
        document.getElementById('remove').checked = items.remove;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);