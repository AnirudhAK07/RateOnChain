//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract ROC {

    uint256 public registerCount = 0;

    struct Item{
        uint256 id;
        address storageProvider;
        string cid;
        string title;
        uint256 star;
        string category;  
        uint256 voters;    
    }

    struct Voters{
        uint256 itemId;
        address voter;
        uint256 star;
        string review;
    }

    mapping(uint256 => Item) public items;
    mapping(uint256 => Voters[]) public voters;
    mapping(address => mapping(uint256 => bool)) public hasVotedForItem;

    function register (string memory cid, string memory title, string memory category)public returns(uint256){
        registerCount = registerCount+1;
        Item memory item = Item(registerCount,msg.sender, cid, title, 0, category,0);
        items[registerCount]=item;
        return registerCount;
    }

    function isCaller(uint256 itemId) view internal returns(bool) {
       return items[itemId].storageProvider == msg.sender;
    }


    function rate (uint256 itemId, uint256 star, string memory review) public returns(uint256){

        require(!isCaller(itemId), "Cannot vote your own proposal");
        require(!hasVotedForItem[msg.sender][itemId], "Already Voted");

        Voters memory vote = Voters(itemId, msg.sender, star,review);

        voters[itemId].push(vote);

        star = star*2;
        items[itemId].voters = items[itemId].voters +1;
        items[itemId].star = ((items[itemId].star*(items[itemId].voters-1))+star)/items[itemId].voters;

        return items[itemId].star;
    }

    function getItem (uint256 itemId) public view returns(Item memory){

        return items[itemId];
    }
}