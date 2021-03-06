export default function CartAmountFilter(value: number) {
    if (value < 100) {
        return value.toString();
    } else {
        return '99+'
    }
}
