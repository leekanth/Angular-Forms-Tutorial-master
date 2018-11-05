export class User {
    constructor(
        public x: string,
        public email: string,
        public phone: number,
        public topic: string,
        public timePreference: string,
        public subscribe: boolean
    ) {}
}
