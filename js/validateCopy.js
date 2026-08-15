export default function validateCopy(passwordValue){
    if(!password.value){
        return
    }

    navigator.clipboard.writeText(password.value)
    copyBtn.innerHTML = `
    <span class="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer !text-base"
    >
    check_circle
    </span>`

    setTimeout(() => {
        copyBtn.innerHTML = `
            <span
                class="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer !text-base"
                id="copyBtn"
            >
            content_copy
            </span>
        `
    }, 2000)
}