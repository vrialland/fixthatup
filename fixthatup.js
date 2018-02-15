window.addEventListener('load', () => {
    // Look for divs of class "commit-message" that contains commits messages beginning with "fixup!"
    var xpath = '//*[contains(@class, "commit-message")]//*[starts-with(text(), "fixup!")]',
        fixups = document.evaluate(xpath, document.body, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    // Fixup commits were found
    if (fixups.snapshotLength > 0) {
        // Disable merge button with an explanatory title
        let mergeButton = document.querySelectorAll('.merge-pr .merge-message button');
        mergeButton.forEach((button) => {
            button.setAttribute('disabled', 'disabled');
            button.setAttribute('title', 'Commit history contains fixup commits, squash them first!');
        });
    }
});
