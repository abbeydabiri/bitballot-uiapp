[{
        "constant": true,
        "inputs": [{
            "name": "",
            "type": "bytes32"
        }],
        "name": "initiator",
        "outputs": [{
            "name": "",
            "type": "address"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "",
            "type": "uint256"
        }],
        "name": "aProposals",
        "outputs": [{
                "name": "dateAdded",
                "type": "uint256"
            },
            {
                "name": "endDate",
                "type": "uint256"
            },
            {
                "name": "name",
                "type": "bytes32"
            },
            {
                "name": "isActive",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "_proposal",
            "type": "bytes32"
        }],
        "name": "positionToCanditateCount",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
                "name": "_proposal",
                "type": "bytes32"
            },
            {
                "name": "_position",
                "type": "bytes32"
            },
            {
                "name": "_candidate",
                "type": "bytes32"
            }
        ],
        "name": "vote",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "mProposalToPositions",
        "outputs": [{
                "name": "proposalId",
                "type": "uint256"
            },
            {
                "name": "maxCandidate",
                "type": "uint8"
            },
            {
                "name": "title",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
                "name": "_proposal",
                "type": "bytes32"
            },
            {
                "name": "_voter",
                "type": "address"
            }
        ],
        "name": "VerifyVoter",
        "outputs": [{
            "name": "",
            "type": "bool"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
                "name": "_name",
                "type": "bytes32"
            },
            {
                "name": "_position",
                "type": "bytes32"
            },
            {
                "name": "_proposal",
                "type": "bytes32"
            }
        ],
        "name": "accreditCandidate",
        "outputs": [{
            "name": "",
            "type": "bool"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "_position",
            "type": "bytes32"
        }],
        "name": "proposalPositionCount",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
                "name": "_name",
                "type": "bytes32"
            },
            {
                "name": "_endDate",
                "type": "uint256"
            }
        ],
        "name": "addProposal",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [{
            "name": "",
            "type": "address"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
                "name": "_voter",
                "type": "address"
            },
            {
                "name": "_name",
                "type": "bytes32"
            },
            {
                "name": "_idHash",
                "type": "bytes"
            }
        ],
        "name": "registerVoter",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "votersCount",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
                "name": "_name",
                "type": "bytes32"
            },
            {
                "name": "_idHash",
                "type": "bytes"
            },
            {
                "name": "_position",
                "type": "bytes32"
            },
            {
                "name": "_proposal",
                "type": "bytes32"
            }
        ],
        "name": "addCandidate",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "",
            "type": "uint256"
        }],
        "name": "aVoters",
        "outputs": [{
                "name": "name",
                "type": "bytes32"
            },
            {
                "name": "idHash",
                "type": "bytes"
            },
            {
                "name": "isUnique",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "mPositionToCanditate",
        "outputs": [{
                "name": "positionId",
                "type": "uint256"
            },
            {
                "name": "name",
                "type": "bytes32"
            },
            {
                "name": "idHash",
                "type": "bytes"
            },
            {
                "name": "isAccredited",
                "type": "bool"
            },
            {
                "name": "voteCount",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "_proposal",
            "type": "bytes32"
        }],
        "name": "eligibleVotersCount",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "mProposalVoters",
        "outputs": [{
                "name": "isVerified",
                "type": "bool"
            },
            {
                "name": "isVoted",
                "type": "bool"
            },
            {
                "name": "voter",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
                "name": "_title",
                "type": "bytes32"
            },
            {
                "name": "_maxCandidate",
                "type": "uint8"
            },
            {
                "name": "_proposal",
                "type": "bytes32"
            }
        ],
        "name": "addPosition",
        "outputs": [{
            "name": "positionId",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
                "name": "_proposal",
                "type": "bytes32"
            },
            {
                "name": "_voterIndex",
                "type": "uint256"
            }
        ],
        "name": "getEligibleVoters",
        "outputs": [{
                "name": "name",
                "type": "bytes32"
            },
            {
                "name": "idHash",
                "type": "bytes"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
            "name": "_proposal",
            "type": "bytes32"
        }],
        "name": "initiateVoting",
        "outputs": [{
            "name": "",
            "type": "bool"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "name": "_voter",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "_proposal",
                "type": "bytes32"
            }
        ],
        "name": "Verified",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "name": "_name",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "_endDate",
                "type": "uint256"
            }
        ],
        "name": "NewProposal",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "name": "_title",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "name": "_proposal",
                "type": "bytes32"
            }
        ],
        "name": "NewProposalPosition",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "name": "_name",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "_idHash",
                "type": "bytes"
            },
            {
                "indexed": true,
                "name": "_position",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "_candidateIndex",
                "type": "uint256"
            }
        ],
        "name": "NewPositionCandidate",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": false,
                "name": "_voter",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "_proposal",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "name": "_position",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "name": "_candidate",
                "type": "bytes32"
            }
        ],
        "name": "Voted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "name": "_voter",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_name",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "_idHash",
                "type": "bytes"
            }
        ],
        "name": "NewVoter",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "name": "_name",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "name": "_position",
                "type": "bytes32"
            }
        ],
        "name": "Accredited",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "name": "_proposal",
            "type": "bytes32"
        }],
        "name": "ProposalActive",
        "type": "event"
    }
]