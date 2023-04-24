const random_address = () => {
    return "0x" + Math.floor(Math.random() * 100).toString(16).padStart(4, "0");
}
const follow_address = (length) => {
    let address = length > 0 ? "0x" + length.toString(16).padStart(4, "0") : "null";
    return  address;
 }
