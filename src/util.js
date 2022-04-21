export const isValidNation = (code) => {
    const validNations = [ 'AU', 'BR', 'CA', 'CH', 'DE', 'DK', 'ES', 'FI', 'FR', 'GB', 'IE', 'IR', 'NO', 'NL', 'NZ', 'TR', 'US'];
    return !!validNations.includes(code.toUpperCase());
}