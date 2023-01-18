const endpoints = {
    addUser:{url:'users/register', method:'POST'},
    login:{url:'users/login', method:'POST'},
    createProduct:{url:'products/createProduct', method:'POST'},
    findProduct:{url:'products/findProduct', method:'POST'},
    addToEditor:{url:'products/editors',method:'POST'},
    getEditors:{url:'products/getEditors', method:'GET'},
    getBySection:{url:'products/getSection/',method:'GET'},
    getSingleProduct:{url:'products/singleProduct/', method:'GET'},
    postRating:{url:'products/addRating/', method:'POST'},
    getReviews:{url:'products/getReviews/', method:'GET'},
    similarProducts:{url:'products/getSimilar/', method:'GET'},
    getItems:{url:'products/checkOut', method:'POST'},
    addPopular:{url:'products/addPopular/', method:'POST'},
    getPopular:{url:'products/popular', method:'GET'}



}
export default endpoints;