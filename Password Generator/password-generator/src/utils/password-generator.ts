const numbers = [1,2,3,4,5,6,7,8,9,0];
const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const specialCharacters = ['!','@','#','$','%','^','&','*','(',')','_','+','-','=','{','}','[',']','|',';',':','"',"'",'<','>','?',',','.','/','~','`'];

const generateStrongPassword = (passwordLength : Number) : string => {
    const password = [];
    
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * 3);
        switch (randomIndex) {
            case 0:
                password.push(numbers[Math.floor(Math.random() * numbers.length)]);
                break;
            case 1:
                password.push(letters[Math.floor(Math.random() * letters.length)]);
                break;
            case 2:
                password.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
                break;
            default:
                break;
        }
    }
    
    return password.join('');
} 


export default generateStrongPassword;