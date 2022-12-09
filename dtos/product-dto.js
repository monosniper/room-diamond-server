module.exports = class ProductDto {
    id;
    articul;
    price;
    image;
    sizes;
    sex;

    toBase64(arr) {
        return Buffer.from(arr.reduce((data, byte) => data + String.fromCharCode(byte), ''), 'binary').toString('base64');
    }

    constructor(model) {
        this.id = model._id;
        this.articul = model.articul;
        this.price = model.price;
        this.image = `data:image/png;base64,${this.toBase64(Buffer.from(model.image))}`;
        this.sizes = model.sizes;
        this.sex = model.sex;
    }
}