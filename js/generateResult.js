export default function generateResult(chars,length ){
    let result = ""
    
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * chars.length);
        
        result += chars[randomIndex]
    }
    password.value = result
}