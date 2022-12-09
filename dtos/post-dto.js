module.exports = class PostDto {
    id;
    articul;
    price;
    image;

    toBase64(arr) {
        return Buffer.from(arr.reduce((data, byte) => data + String.fromCharCode(byte), ''), 'binary').toString('base64');
        // return btoa(
        //     arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
        // );
    }

    constructor(model) {
        this.id = model._id;
        this.articul = model.articul;
        this.price = model.price;
        this.image = `data:image/png;base64,${this.toBase64(Buffer.from(model.image))}`;
    }
}