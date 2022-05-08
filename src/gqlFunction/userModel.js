export class userDetails {
    constructor(email, name, isAdmin, phone, superviserEmail, isApproved, isEmailApproved, isPhoneVerified, isGooleSignIn, isFacebookSignIn, isGeneralAuthSignIn) {
        this.email = email;
        this.name = name;
        this.isAdmin = isAdmin
        this.phone = phone
        this.superviserEmail = superviserEmail
        this.isApproved = isApproved
        this.isEmailApproved = isEmailApproved
        this.isPhoneVerified = isPhoneVerified
        this.isGooleSignIn = isGooleSignIn
        this.isGooleSignIn = isGooleSignIn
        this.isFacebookSignIn = isFacebookSignIn
        this.isGeneralAuthSignIn = isGeneralAuthSignIn
    }
}

export class userByEmail {
    constructor(email) {
        this.email = email
    }
}

export class userBySupEmail {
    constructor(superviserEmail) {
        this.superviserEmail = superviserEmail
    }
}

export class updatedData {
    constructor(email) {
        this.email = email
    }
}

export class deleteByEmail{
    constructor(email) {
        this.email = email
    }
}

export class deleteBySupEmail{
    constructor(superviserEmail) {
        this.superviserEmail = superviserEmail
    }
}
