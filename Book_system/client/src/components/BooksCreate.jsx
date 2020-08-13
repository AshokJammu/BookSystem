import React from 'react'

class BooksCreate extends React.Component{
    render(){
        return(
            <div>
                
                <div className="my-5">
                <div class="form-group mb-2">
                  <label for="staticEmail2" class="sr-only">Book</label>
                  <input type="text" class="form-control" id="staticEmail2" value="book" />
                </div>
                <div class="form-group mb-2">
                  <label for="staticEmail2" class="sr-only">Price</label>
                  <input type="text" class="form-control" id="staticEmail2" value="price" />
                </div>
                <div class="form-group mb-2">
                  <label for="staticEmail2" class="sr-only">Quantity</label>
                  <input type="text" class="form-control" id="staticEmail2" value="Quantity" />
                </div>
                <div class="form-group mb-2">
                  <label for="staticEmail2" class="sr-only">Category</label>
                  <input type="text" class="form-control" id="staticEmail2" value="Category" />
                </div>
                <button type="submit" class="btn btn-primary mb-2">Submit</button>
                </div>
                 
            </div>
        )
    }
}

export default BooksCreate