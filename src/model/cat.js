class Cat {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.id = Math.random().toString(36).substr(2, 9);
    }
}

export default Cat;