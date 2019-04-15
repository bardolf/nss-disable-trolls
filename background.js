'use strict';

chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ trolls: 'Zmestabileho, naska' }, function () {
        console.log('Trolls initialized.');
    });    
});