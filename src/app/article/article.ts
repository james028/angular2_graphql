export class Art {

    id: string;
    title: string;
    author: string;
    url: string;

    constructor(id: string, title: string, author: string, url: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.url = url;
    }
}