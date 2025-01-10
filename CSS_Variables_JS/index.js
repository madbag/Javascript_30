const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    // console.log(this.value);
    const suffix = this.dataset.sizing || '';
    // console.log(this.name)

    //updating the variable
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    // console.log(this.dataset)
    // console.log(suffix)
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));