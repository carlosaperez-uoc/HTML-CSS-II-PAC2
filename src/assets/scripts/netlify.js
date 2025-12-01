const handleSubmit = event => {
    event.preventDefault();
  
    const myForm = event.target;
    const formData = new FormData(myForm);
  
    alert('Moltes gràcies per la teua inscripció');
    window.location.href = "/";
  };
  
  document.querySelector("form").addEventListener("submit", handleSubmit);