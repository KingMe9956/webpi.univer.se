pragma solidity ^0.8.19;

contract ProPayQuantum {
    address public immutable FEE_RECEIVER;
    uint256 public constant FEE_PERCENT = 8; // 0.8%
    uint256 public constant FIXED_FEE = 17; // $0.17 in cents
    
    constructor(address feeReceiver) {
        FEE_RECEIVER = feeReceiver;
    }
    
    function processPayment() external payable {
        uint256 fee = (msg.value * FEE_PERCENT) / 1000 + FIXED_FEE;
        uint256 netAmount = msg.value - fee;
        
        // Transfer fee to 0x6aF3fB556c57f4d973a3AA7B80Bb5E643e03690e 
        (bool feeSuccess, ) = FEE_RECEIVER.call{value: fee}("");
        require(feeSuccess, "Fee transfer failed");
        
        // Rest of payment processing...
    }
}