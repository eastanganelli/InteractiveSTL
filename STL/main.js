const random_address = () => {
    return "0x" + Math.floor(Math.random() * 100).toString(16).padStart(4, "0");
}
 const follow_address = (length) => {
    let address = length > 0 ? "0x" + length.toString(16).padStart(4, "0") : "null";
    return  address;
 }


// STACK
let stack = [];

const push = () => {
    let value = $("#pushValue").val();
    if (value != '') {
        let address = random_address();
        stack.push({ value: value, address: address });
        updateStack();
        $("#pushValue").val('');
    }
}
const pop = () => {
    stack.pop();
    updateStack();
}
const top_stack = () => {
    let myAddress = $("#stackTop");
    (stack.length < 1) ? myAddress.text("nullptr") : myAddress.text(stack[stack.length - 1].address);
}
const updateStack = () => {
    let stackDiv = $("#stack");
    stackDiv.empty();
    for (let i = stack.length - 1; i >= 0; i--) {
        let nodeDiv = $("<div>").addClass("stack-node").text(stack[i].value);
        let addressDiv = $("<div>").addClass("stack-node-address").append(`<span class="badge text-bg-primary">Address: `+ stack[i].address +`</span>`);
        if (i < stack.length - 1) {
            let nextAddressDiv = $("<div>").addClass("stack-node-address").append(`<span class="badge text-bg-info">Next: `+ stack[i + 1].address +`</span>`);
            nodeDiv.append(nextAddressDiv);
        }
        nodeDiv.append(addressDiv);
        stackDiv.append(nodeDiv);
    }
    top_stack();
}