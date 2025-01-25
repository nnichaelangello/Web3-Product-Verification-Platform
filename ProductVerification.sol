// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProductVerification {
    // Struct untuk menyimpan informasi produk
    struct Product {
        string productSerialId;
        string productName;
        string dateOfManufacture;
        string originOfProduct;
        string expiryDate;
        string sellerInformation;
        string barcodeNumber;
        bool isGenuine;
    }

    // Mapping untuk menyimpan produk berdasarkan barcode
    mapping(string => Product) public products;

    // Mapping untuk menyimpan daftar admin
    mapping(address => bool) public admins;

    // Event untuk logging
    event ProductAdded(string barcodeNumber, string productName);
    event ProductUpdated(string barcodeNumber, string productName);
    event ProductDeleted(string barcodeNumber);
    event ProductVerified(string barcodeNumber, bool isGenuine);
    event FakeProductReported(string barcodeNumber);

    // Constructor: Set deployer sebagai admin pertama
    constructor() {
        admins[msg.sender] = true;
    }

    // Modifier untuk membatasi akses ke admin
    modifier onlyAdmin() {
        require(admins[msg.sender], "Only admin can perform this action");
        _;
    }

    // Fungsi untuk menambahkan admin baru (hanya bisa diakses oleh admin)
    function addAdmin(address _adminAddress) public onlyAdmin {
        admins[_adminAddress] = true;
    }

    // Fungsi untuk menambahkan produk baru (hanya bisa diakses oleh admin)
    function addProduct(
        string memory _productSerialId,
        string memory _productName,
        string memory _dateOfManufacture,
        string memory _originOfProduct,
        string memory _expiryDate,
        string memory _sellerInformation,
        string memory _barcodeNumber,
        bool _isGenuine
    ) public onlyAdmin {
        require(bytes(products[_barcodeNumber].barcodeNumber).length == 0, "Product already exists");
        products[_barcodeNumber] = Product(
            _productSerialId,
            _productName,
            _dateOfManufacture,
            _originOfProduct,
            _expiryDate,
            _sellerInformation,
            _barcodeNumber,
            _isGenuine
        );
        emit ProductAdded(_barcodeNumber, _productName);
    }

    // Fungsi untuk memperbarui produk (hanya bisa diakses oleh admin)
    function updateProduct(
        string memory _barcodeNumber,
        string memory _productSerialId,
        string memory _productName,
        string memory _dateOfManufacture,
        string memory _originOfProduct,
        string memory _expiryDate,
        string memory _sellerInformation,
        bool _isGenuine
    ) public onlyAdmin {
        require(bytes(products[_barcodeNumber].barcodeNumber).length != 0, "Product does not exist");
        products[_barcodeNumber] = Product(
            _productSerialId,
            _productName,
            _dateOfManufacture,
            _originOfProduct,
            _expiryDate,
            _sellerInformation,
            _barcodeNumber,
            _isGenuine
        );
        emit ProductUpdated(_barcodeNumber, _productName);
    }

    // Fungsi untuk menghapus produk (hanya bisa diakses oleh admin)
    function deleteProduct(string memory _barcodeNumber) public onlyAdmin {
        require(bytes(products[_barcodeNumber].barcodeNumber).length != 0, "Product does not exist");
        delete products[_barcodeNumber];
        emit ProductDeleted(_barcodeNumber);
    }

    // Fungsi untuk memverifikasi produk (bisa diakses oleh siapa saja)
    function verifyProduct(string memory _barcodeNumber) public view returns (Product memory) {
        require(bytes(products[_barcodeNumber].barcodeNumber).length != 0, "Product not found");
        return products[_barcodeNumber];
    }

    // Fungsi untuk melaporkan produk palsu (bisa diakses oleh siapa saja)
    function reportFakeProduct(string memory _barcodeNumber) public {
        require(bytes(products[_barcodeNumber].barcodeNumber).length != 0, "Product not found");
        products[_barcodeNumber].isGenuine = false;
        emit FakeProductReported(_barcodeNumber);
    }
}