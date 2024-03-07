export const currencyFormat = (amount: number): string => {
    return `€${amount.toFixed(2)}`;
}

export const bidderPremium = (amount: number): string => {
    const BD = Number(process.env.REACT_APP_BIDDER_PREMIUM || 20);
    const amountWithPremium = amount + (amount * BD) / 100; // 20%
    return `€${amountWithPremium.toFixed(2)}`;
}

export const validationRules = {
    email: {
        required: 'Email is required', pattern: {
            message: 'Email is not valid',
            value: /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
        }
    },
    password: {required: 'Password is required'}
}

export const determineMinBid = (currentBid: number): number => {
    let increment;

    if (currentBid >= 1 && currentBid <= 49) {
        increment = 1;
    } else if (currentBid < 99) {
        increment = 2;
    } else if (currentBid < 499) {
        increment = 10
    } else if (currentBid < 999) {
        increment = 20
    } else if (currentBid < 4999) {
        increment = 50
    } else if (currentBid < 9999) {
        increment = 100
    } else if (currentBid < 49999) {
        increment = 500
    } else {
        increment = 1000
    }

    return (currentBid + increment);
}