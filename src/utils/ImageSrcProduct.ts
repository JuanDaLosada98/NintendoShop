
const imageUrl = '/images/product_images/';

export const ImageSrcProduct = (product: string = '') => {
    const extension = product;
    
    switch (extension) {
        case 'Nintendo Switch Console':
            return `${imageUrl}console.png`;
        case 'Nintendo Switch Game':
            return `${imageUrl}game.png`;
        case 'Joy Con Set':
        case 'Left Joy Con':
        case 'Right Joy Con':
            return `${imageUrl}controls.png`;
        case 'Nintendo Switch Accesories':
            return `${imageUrl}accesories.png`;
        default:
            return `${imageUrl}switchproduct.png`;
    }
}