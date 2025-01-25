// Inisialisasi Web3
let web3;
let contract;
let contractAddress = "0x217b6886E490882DC5f83FCfE1853AfeAc4FE062"; // Ganti dengan alamat smart contract Anda
let abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_adminAddress",
				"type": "address"
			}
		],
		"name": "addAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_productSerialId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_productName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_dateOfManufacture",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_originOfProduct",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_expiryDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_sellerInformation",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_barcodeNumber",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "_isGenuine",
				"type": "bool"
			}
		],
		"name": "addProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_barcodeNumber",
				"type": "string"
			}
		],
		"name": "deleteProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "barcodeNumber",
				"type": "string"
			}
		],
		"name": "FakeProductReported",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "barcodeNumber",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "productName",
				"type": "string"
			}
		],
		"name": "ProductAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "barcodeNumber",
				"type": "string"
			}
		],
		"name": "ProductDeleted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "barcodeNumber",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "productName",
				"type": "string"
			}
		],
		"name": "ProductUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "barcodeNumber",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "isGenuine",
				"type": "bool"
			}
		],
		"name": "ProductVerified",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_barcodeNumber",
				"type": "string"
			}
		],
		"name": "reportFakeProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_barcodeNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_productSerialId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_productName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_dateOfManufacture",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_originOfProduct",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_expiryDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_sellerInformation",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "_isGenuine",
				"type": "bool"
			}
		],
		"name": "updateProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "admins",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "products",
		"outputs": [
			{
				"internalType": "string",
				"name": "productSerialId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "productName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "dateOfManufacture",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "originOfProduct",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "expiryDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "sellerInformation",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "barcodeNumber",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "isGenuine",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_barcodeNumber",
				"type": "string"
			}
		],
		"name": "verifyProduct",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "productSerialId",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "productName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "dateOfManufacture",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "originOfProduct",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "expiryDate",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "sellerInformation",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "barcodeNumber",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "isGenuine",
						"type": "bool"
					}
				],
				"internalType": "struct ProductVerification.Product",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

// Fungsi untuk menginisialisasi Web3 dan kontrak
async function initWeb3() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.enable(); // Meminta izin akses akun
            const accounts = await web3.eth.getAccounts();
            web3.eth.defaultAccount = accounts[0]; // Set akun default

            // Inisialisasi kontrak
            contract = new web3.eth.Contract(abi, contractAddress);
            console.log("Web3 and contract initialized successfully.");
        } catch (error) {
            console.error("User denied account access or error occurred:", error);
        }
    } else {
        console.error("MetaMask not detected. Please install MetaMask.");
    }
}

// Fungsi untuk login sebagai admin
async function loginAdmin() {
    const adminAddress = document.getElementById('adminAddress').value;
    const isAdmin = await contract.methods.admins(adminAddress).call();
    if (isAdmin) {
        document.getElementById('adminActions').style.display = 'block';
        alert("Logged in as admin.");
    } else {
        alert("You are not an admin.");
    }
}

function validateInputs(inputs) {
    for (let input of inputs) {
        if (!input.value) {
            alert("Please fill in all fields.");
            return false;
        }
    }
    return true;
}

// Fungsi untuk menambahkan produk
async function addProduct() {

    const inputs = [
        document.getElementById('productSerialId'),
        document.getElementById('productName'),
        document.getElementById('dateOfManufacture'),
        document.getElementById('originOfProduct'),
        document.getElementById('expiryDate'),
        document.getElementById('sellerInformation'),
        document.getElementById('barcodeNumber')
    ];

    if (!validateInputs(inputs)) return;

    const productSerialId = document.getElementById('productSerialId').value;
    const productName = document.getElementById('productName').value;
    const dateOfManufacture = document.getElementById('dateOfManufacture').value;
    const originOfProduct = document.getElementById('originOfProduct').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const sellerInformation = document.getElementById('sellerInformation').value;
    const barcodeNumber = document.getElementById('barcodeNumber').value;

    // Dapatkan alamat pengirim dari MetaMask
    const accounts = await web3.eth.getAccounts();
    const fromAddress = accounts[0];

    try {
        await contract.methods.addProduct(
            productSerialId,
            productName,
            dateOfManufacture,
            originOfProduct,
            expiryDate,
            sellerInformation,
            barcodeNumber,
            true // isGenuine
        ).send({ from: fromAddress, gas: 3000000 }) // Tambahkan gas limit
        .then(() => {
            alert("Product added successfully.");
        })
        .catch((error) => {
            console.error("Error adding product:", error);
            alert("Failed to add product. Check console for details.");
        });
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Check console for details.");
    }
}

// Fungsi untuk memverifikasi produk (admin)
async function verifyProduct() {
    const barcodeNumber = document.getElementById('verifyBarcode').value;

    try {
        const product = await contract.methods.verifyProduct(barcodeNumber).call();
        if (product.barcodeNumber === "") { // Jika produk tidak ditemukan
            document.getElementById('productDetails').innerHTML = `<p>Product not found.</p>`;
        } else {
            document.getElementById('productDetails').innerHTML = `
                <p>Product Serial Id: ${product.productSerialId}</p>
                <p>Product Name: ${product.productName}</p>
                <p>Date of Manufacture: ${product.dateOfManufacture}</p>
                <p>Origin of Product: ${product.originOfProduct}</p>
                <p>Expiry Date: ${product.expiryDate}</p>
                <p>Seller Information: ${product.sellerInformation}</p>
                <p>Is Genuine: ${product.isGenuine ? "Yes" : "No"}</p>
            `;
        }
    } catch (error) {
        console.error("Error verifying product:", error);
        document.getElementById('productDetails').innerHTML = `<p>Error verifying product. Check console for details.</p>`;
    }
}

// Fungsi untuk memverifikasi produk (user)
async function verifyProductUser() {
    const barcodeNumber = document.getElementById('userBarcode').value;

    try {
        const product = await contract.methods.verifyProduct(barcodeNumber).call();
        if (product.barcodeNumber === "") { // Jika produk tidak ditemukan
            document.getElementById('userProductDetails').innerHTML = `<p>Product not found.</p>`;
        } else {
            document.getElementById('userProductDetails').innerHTML = `
                <p>Product Serial Id: ${product.productSerialId}</p>
                <p>Product Name: ${product.productName}</p>
                <p>Date of Manufacture: ${product.dateOfManufacture}</p>
                <p>Origin of Product: ${product.originOfProduct}</p>
                <p>Expiry Date: ${product.expiryDate}</p>
                <p>Seller Information: ${product.sellerInformation}</p>
                <p>Is Genuine: ${product.isGenuine ? "Yes" : "No"}</p>
            `;
        }
    } catch (error) {
        console.error("Error verifying product:", error);
        document.getElementById('userProductDetails').innerHTML = `<p>Error verifying product. Check console for details.</p>`;
    }
}

// Fungsi untuk melaporkan produk palsu
async function reportFakeProduct() {
    const barcodeNumber = document.getElementById('userBarcode').value;

    try {
        const product = await contract.methods.verifyProduct(barcodeNumber).call();
        if (product.barcodeNumber === "") { // Jika produk tidak ditemukan
            alert("Product not found. Cannot report as fake.");
        } else {
            const accounts = await web3.eth.getAccounts();
            const fromAddress = accounts[0];

            await contract.methods.reportFakeProduct(barcodeNumber).send({ from: fromAddress, gas: 3000000 })
            .then(() => {
                alert("Product reported as fake.");
            })
            .catch((error) => {
                console.error("Error reporting fake product:", error);
                alert("Failed to report product as fake. Check console for details.");
            });
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Check console for details.");
    }
}

// Inisialisasi Web3 saat halaman dimuat
window.onload = initWeb3;