var selectedRow = null;

//show alerts
function showAlert(message, className){
    const div = document.createElement("div")
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container =  document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(()=>document.querySelector(".alert").remove(), 3000);
}

//clear all fields
function clearFields(){
    document.querySelector("#productName").value = "";
    document.querySelector("#productId").value = "";
    document.querySelector("#price").value = "";
    document.querySelector("#quantity").value = "";
    document.querySelector("#amount").value = "";
}

//Add Data
document.querySelector("#inventory-form").addEventListener("submit",(e)=>{
    e.preventDefault();

    //get form value
    const productName = document.getElementById("productName").value;
    const productId = document.getElementById("productId").value;
    const price = document.getElementById("price").value;
    const quantity = document.getElementById("Quantity").value;
    const amount = document.getElementById("amount").value;

    //validate
    if(productName=="" || productId=="" || price=="" || Quantity=="" || amount=="" ){
        showAlert("Please fill all the fields","danger")
    }else{
        if(selectedRow == null){
            const list = document.querySelector(".product-list");
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${productName}</td>
                <td>${productId}</td>
                <td>${price}</td>
                <td>${quantity}</td>
                <td>${amount}</td>
                <td>
                     <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                    <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
                </td>
            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("student added", "success")
        }
        else{
            selectedRow.children[0].textContent = productName;
            selectedRow.children[1].textContent = productId;
            selectedRow.children[2].textContent = price;
            selectedRow.children[3].textContent = quantity;
            selectedRow.children[4].textContent = amount;
            selectedRow =  null;
            showAlert("student info edited","success")
        }

        clearFields();
    }
})

// Edit data
document.querySelector(".product-list").addEventListener("click",(e)=>{
    target = e.target;
    if(target.classList.contains("edit")){
        selectedRow =  target.parentElement.parentElement;
        document.querySelector("#productName").value = selectedRow.children[0].textContent;
        document.querySelector("#productId").value = selectedRow.children[1].textContent;
        document.querySelector("#price").value = selectedRow.children[2].textContent;
        document.querySelector("#quantity").value = selectedRow.children[3].textContent;
        document.querySelector("#amount").value = selectedRow.children[4].textContent;
    }
})

//delete data
document.querySelector(".product-list").addEventListener('click', (e)=>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("student data deleted", "danger")
    }
})