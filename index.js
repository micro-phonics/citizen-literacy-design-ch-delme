//file specific javascript to go here
console.log('JS file (index.js) loaded for 2.1 (Activity)');

console.log('Place exercise logic and cuepoints specific to this file in the index.js file');

$(document).ready(function(){
    DataManager.updateStatus('inProgress','2.1');
    $('#interface').load('interface.html',function(){
        console.log('Interface loaded');
    });
});

function markCompleted(){
    DataManager.updateStatus('completed','2.1');
}

