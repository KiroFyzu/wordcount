document.getElementById('uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    const fileInput = document.querySelector('input[type="file"]');
    formData.append('textfile', fileInput.files[0]);
    
    try {
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        
        document.getElementById('filename').textContent = data.filename;
        document.getElementById('wordCount').textContent = data.wordCount;
        document.getElementById('charCount').textContent = data.characterCount;
        document.getElementById('lineCount').textContent = data.lineCount;
        
        document.getElementById('result').classList.remove('hidden');
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while processing the file.');
    }
});
