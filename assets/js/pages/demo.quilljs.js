document.addEventListener('DOMContentLoaded', function () {

    var editor = document.getElementById('snow-editor-insert');
    if (editor) {

        var quill = new Quill("#snow-editor-insert", { 
            theme: "snow", 
            modules: { 
                toolbar: [
                    [{ font: [] }, { size: ['small', false, 'large', 'huge' ] }], 
                    ["bold", "italic", "underline", "strike"], 
                    [{ color: [] }, { background: [] }], 
                    [{ script: "super" }, { script: "sub" }], 
                    [{ header: [!1, 1, 2, 3, 4, 5, 6] }, "blockquote", "code-block"], 
                    [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }], 
                    ["direction", { align: [] }], 
                    ["link", "image", "video"], 
                    ["clean"]
                ] 
            } 
        }) //quill = new Quill("#bubble-editor", { theme: "bubble" });
   
    } else {
        console.log('There is no, editor-insert');
    }
});

document.addEventListener('DOMContentLoaded', function () {

    var editor = document.getElementById('snow-editor-update');
    if (editor) {
        
        var quill = new Quill("#snow-editor-update", { 
            theme: "snow", 
            modules: { 
                toolbar: [
                    [{ font: [] }, { size: [] }], 
                    ["bold", "italic", "underline", "strike"], 
                    [{ color: [] }, { background: [] }], 
                    [{ script: "super" }, { script: "sub" }], 
                    [{ header: [!1, 1, 2, 3, 4, 5, 6] }, "blockquote", "code-block"], 
                    [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }], 
                    ["direction", { align: [] }], 
                    ["link", "image", "video"], 
                    ["clean"]
                ] 
            } 
        }) //quill = new Quill("#bubble-editor", { theme: "bubble" });

    } else {
        console.log('There is no, editor-update');
    }
});



