export function formatPrice(price) {
    if (Number.isInteger(price)) {
        return price.toLocaleString('vi-VN')
    }
    if (!price) {
        return 'null'
    }
    return String(price)
}