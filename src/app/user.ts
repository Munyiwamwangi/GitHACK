export class User {
    constructor(public login: string,
                // tslint:disable-next-line: variable-name
                public avatar_url: string,
                // tslint:disable-next-line: variable-name
                public public_repos: string,
                public followers: number,
                public following: number,
                // tslint:disable-next-line: variable-name
                public created_at: string) { }
}
