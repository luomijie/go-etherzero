var enodeinfoContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"MasterAddr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"count","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes8"}],"name":"Enodes","outputs":[{"name":"id1","type":"bytes32"},{"name":"id2","type":"bytes32"},{"name":"ip_port","type":"bytes32"},{"name":"nextId","type":"bytes8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"id1","type":"bytes32"},{"name":"id2","type":"bytes32"},{"name":"ip_port","type":"bytes32"}],"name":"register","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"bytes8"}],"name":"getSingleEnode","outputs":[{"name":"id1","type":"bytes32"},{"name":"id2","type":"bytes32"},{"name":"ip_port","type":"bytes32"},{"name":"nextId","type":"bytes8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastId","outputs":[{"name":"","type":"bytes8"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);
var enodeinfo = enodeinfoContract.new(
    {
        from: web3.eth.accounts[0],
        data: '0x6080604052600a600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555034801561005257600080fd5b50610c35806100626000396000f300608060405260043610610083576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806301ec4aed1461008857806306661abd146100df57806320c148051461010a5780634da274fd146101c9578063515e7e0914610216578063a87d942c146102d5578063c1292cc314610300575b600080fd5b34801561009457600080fd5b5061009d610361565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156100eb57600080fd5b506100f4610387565b6040518082815260200191505060405180910390f35b34801561011657600080fd5b50610150600480360381019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505061038d565b604051808560001916600019168152602001846000191660001916815260200183600019166000191681526020018277ffffffffffffffffffffffffffffffffffffffffffffffff191677ffffffffffffffffffffffffffffffffffffffffffffffff1916815260200194505050505060405180910390f35b3480156101d557600080fd5b506102146004803603810190808035600019169060200190929190803560001916906020019092919080356000191690602001909291905050506103e2565b005b34801561022257600080fd5b5061025c600480360381019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506109c4565b604051808560001916600019168152602001846000191660001916815260200183600019166000191681526020018277ffffffffffffffffffffffffffffffffffffffffffffffff191677ffffffffffffffffffffffffffffffffffffffffffffffff1916815260200194505050505060405180910390f35b3480156102e157600080fd5b506102ea610b8f565b6040518082815260200191505060405180910390f35b34801561030c57600080fd5b50610315610b99565b604051808277ffffffffffffffffffffffffffffffffffffffffffffffff191677ffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b60006020528060005260406000206000915090508060000154908060010154908060020154908060030160009054906101000a9004780100000000000000000000000000000000000000000000000002905084565b6103ea610bc4565b6103f2610be6565b600080600080341480156104125750600060010260001916886000191614155b801561042a5750600060010260001916876000191614155b80156104425750600060010260001916866000191614155b151561044d57600080fd5b8785600060028110151561045d57fe5b602002019060001916908160001916815250508685600160028110151561048057fe5b602002019060001916908160001916815250506020846080876000600b600019f115156104ac57600080fd5b8360006001811015156104bb57fe5b6020020151600190049250600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561052e57508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b151561053957600080fd5b879050600078010000000000000000000000000000000000000000000000000277ffffffffffffffffffffffffffffffffffffffffffffffff19168177ffffffffffffffffffffffffffffffffffffffffffffffff19161415151561059d57600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166316e7f171826040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808277ffffffffffffffffffffffffffffffffffffffffffffffff191677ffffffffffffffffffffffffffffffffffffffffffffffff19168152602001915050602060405180830381600087803b15801561066457600080fd5b505af1158015610678573d6000803e3d6000fd5b505050506040513d602081101561068e57600080fd5b81019080805190602001909291905050509150600115158215151415156106b457600080fd5b6000600102600019166000808377ffffffffffffffffffffffffffffffffffffffffffffffff191677ffffffffffffffffffffffffffffffffffffffffffffffff19168152602001908152602001600020600001546000191614156107255760016002600082825401925050819055505b608060405190810160405280896000191681526020018860001916815260200187600019168152602001600360009054906101000a900478010000000000000000000000000000000000000000000000000277ffffffffffffffffffffffffffffffffffffffffffffffff19168152506000808377ffffffffffffffffffffffffffffffffffffffffffffffff191677ffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060008201518160000190600019169055602082015181600101906000191690556040820151816002019060001916905560608201518160030160006101000a81548167ffffffffffffffff0219169083780100000000000000000000000000000000000000000000000090040217905550905050600078010000000000000000000000000000000000000000000000000277ffffffffffffffffffffffffffffffffffffffffffffffff1916600360009054906101000a900478010000000000000000000000000000000000000000000000000277ffffffffffffffffffffffffffffffffffffffffffffffff191614151561097f5780600080600360009054906101000a900478010000000000000000000000000000000000000000000000000277ffffffffffffffffffffffffffffffffffffffffffffffff191677ffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060030160006101000a81548167ffffffffffffffff02191690837801000000000000000000000000000000000000000000000000900402179055505b80600360006101000a81548167ffffffffffffffff02191690837801000000000000000000000000000000000000000000000000900402179055505050505050505050565b600080600080600078010000000000000000000000000000000000000000000000000277ffffffffffffffffffffffffffffffffffffffffffffffff19168577ffffffffffffffffffffffffffffffffffffffffffffffff191614151515610a2b57600080fd5b6000808677ffffffffffffffffffffffffffffffffffffffffffffffff191677ffffffffffffffffffffffffffffffffffffffffffffffff191681526020019081526020016000206000015493506000808677ffffffffffffffffffffffffffffffffffffffffffffffff191677ffffffffffffffffffffffffffffffffffffffffffffffff191681526020019081526020016000206001015492506000808677ffffffffffffffffffffffffffffffffffffffffffffffff191677ffffffffffffffffffffffffffffffffffffffffffffffff191681526020019081526020016000206002015491506000808677ffffffffffffffffffffffffffffffffffffffffffffffff191677ffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060030160009054906101000a900478010000000000000000000000000000000000000000000000000290509193509193565b6000600254905090565b600360009054906101000a900478010000000000000000000000000000000000000000000000000281565b6040805190810160405280600290602082028038833980820191505090505090565b6020604051908101604052806001906020820280388339808201915050905050905600a165627a7a723058204a5a9f04ed31f53a468de4b1324d5b0fff99ecabb37801a16c48b08e619d412b0029',
        gas: '4700000'

    }, function (e, contract){
        console.log(e, contract);
        if (typeof contract.address !== 'undefined') {
            console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
        }
    })