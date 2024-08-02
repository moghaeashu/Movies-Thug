document.getElementById('copyButton').addEventListener('click', function() {
    const customLink = 'https://hubcloud.lol/drive/j12wq2a2kgdvtg7'; // Replace with your custom link
    const dummy = document.createElement('input');
    document.body.appendChild(dummy);
    dummy.value = customLink;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    alert('Link copied to clipboard!');
});
