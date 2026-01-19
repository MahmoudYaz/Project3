// Copy button functionality for all translation sections
document.querySelectorAll('.copy-btn').forEach(function(copyBtn) {
    copyBtn.addEventListener('click', function() {
        // Get the parent section
        const section = this.closest('.translation-content');
        const textarea = section.querySelector('.translate-area');
        const copiedMessage = section.querySelector('.copied-message');
        const text = textarea.value;

        // Copy to clipboard
        if (text) {
            navigator.clipboard.writeText(text).then(function() {
                // Show the copied message
                copiedMessage.style.display = 'inline-block';

                // Show the modal
                const copyModal = new bootstrap.Modal(document.getElementById('copyModal'));
                copyModal.show();

                // Hide the copied message after 2 seconds
                setTimeout(function() {
                    copiedMessage.style.display = 'none';
                }, 2000);
            }).catch(function(err) {
                console.error('Failed to copy text: ', err);
            });
        } else {
            // Show copied message and modal even if textarea is empty
            copiedMessage.style.display = 'inline-block';
            const copyModal = new bootstrap.Modal(document.getElementById('copyModal'));
            copyModal.show();

            setTimeout(function() {
                copiedMessage.style.display = 'none';
            }, 2000);
        }
    });
});
