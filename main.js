function changeStorage() {
    localStorage.setItem('test', 1);
}

window.addEventListener('storage', function(e){
    console.log(e.key);
    console.log(e.newValue);
    console.log(e.oldValue);
    alert('localStorage changed')
});