document.getElementById("phishingForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    var url = document.getElementById("urlInput").value;
  
    try {
      const response = await fetch('/detect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url })
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      displayDetectionResult(result);
    } catch (error) {
      console.error('Error detecting phishing:', error);
    }
  });
  
  function displayDetectionResult(result) {
    var resultDiv = document.getElementById("result");
    if (result.is_phishing) {
      resultDiv.innerText = "This website is suspected to be a phishing website!";
      resultDiv.style.color = "red";
    } else {
      resultDiv.innerText = "This website seems safe.";
      resultDiv.style.color = "green";
    }
  }
  