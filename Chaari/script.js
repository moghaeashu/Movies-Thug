document.getElementById('copyButton').addEventListener('click', function() {
    const customLink = 'https://download.bbupload.com/download?v=I1ZQTYOE'; // Replace with your custom link
    const dummy = document.createElement('input');
    document.body.appendChild(dummy);
    dummy.value = customLink;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    alert('Link copied to clipboard!');
});
