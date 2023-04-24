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

// QUEUE

let queue = [];

const enqueue = () => {
    let value = $("#enqueueValue").val();
    if (value != '') {
        let address = random_address();
        queue.push({value: value, address: address});
        updateQueue();
        $("#enqueueValue").val('');
    }
}
const dequeue = () => {
    queue.shift();
    updateQueue();
}
const head_tail_queue = () => {
    let head_ = $("#queueHead");
    (queue.length < 1) ? head_.text("nullptr") : head_.text(queue[0].address);
    let tail_ = $("#queueTail");
    (queue.length < 1) ? tail_.text("nullptr") : tail_.text(queue[queue.length - 1].address);
}
const updateQueue = () => {
    let queueDiv = $("#queue");
    queueDiv.empty();
    for (let i = 0; i < queue.length; i++) {
        let nodeDiv = $("<div>").addClass("queue-node").text(queue[i].value);
        let addressDiv = $("<div>").addClass("queue-node-address").append(`<span class="badge text-bg-primary">Address: `+ queue[i].address +`</span>`);
        if (i < queue.length-1) {
            let nextAddressDiv = $("<div>").addClass("queue-node-address").append(`<span class="badge text-bg-info">Next: `+ queue[i + 1].address +`</span>`);
            nodeDiv.append(nextAddressDiv);
        }
        nodeDiv.append(addressDiv);
        queueDiv.append(nodeDiv);
    }
    head_tail_queue();
}