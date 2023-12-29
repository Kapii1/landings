export function cssStringToObject(cssString:string) {
    const styles:any = {};
    const declarations = cssString.split(';');
  
    declarations.forEach(declaration => {
      const [property, value] = declaration.split(':').map(part => part.trim());
  
      if (property && value) {
        styles[property]= value;
      }
    });
  
    return styles;
  }

  export function generateRandomId(length = 8) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
    }
  
    return randomId;
  }