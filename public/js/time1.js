$(document).ready(function() {
    var embed = document.getElementById('timeline-embed');
    embed.style.height = getComputedStyle(document.body).height;
    window.timeline = new TL.Timeline('timeline-embed', 'timeline3.json', {
        hash_bookmark: false
    });
    window.addEventListener('resize', function() {
        var embed = document.getElementById('timeline-embed');
        embed.style.height = getComputedStyle(document.body).height;
        timeline.updateDisplay();
    })
});
