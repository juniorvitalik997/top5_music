const apiUrl = 'https://parcer-7p0y.onrender.com/music';
axios.get(apiUrl)
.then(res => {
    console.log(res.data);
    for(let el of res.data){
        $('.audioContainer').append(`<audio src='${el}' controls></audio>`)
    }
})

