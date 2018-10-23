// new clipboard copy symbols
var symbols = new ClipboardJS('.cs');

// notify after copy
symbols.on('success', function(e) {
    /**
     * e.action
     * e.text
     * e.trigger
     * end -> e.clearSelection
     */
    toastr.success("Copied!");
});