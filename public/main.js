const onSubmitHandler = (event) =>{
    event.preventDefault();

    document.getElementById('loader').className = "loader";

    console.log(document.forms["main-form"]["imageUrl"].value);

    let inputUrl = document.forms["main-form"]["imageUrl"].value;
    axios.post(`/process?imageUrl=${inputUrl}`).then(response=>{
        document.getElementById('loader').className = "loader-closed";
        document.getElementById('os').innerText = `Operation Successfull!`
        document.getElementById('os-2').innerText = `Conversion Details: ${response.data.info}`
    });
}